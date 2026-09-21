import { useEffect, useSyncExternalStore } from "react";
import type {
  Atividade,
  Avaliacao,
  Estado,
  Evento,
  FeedbackPlataforma,
  Perfil,
  Usuario,
} from "./tipos";
import { estadoInicial } from "./dados-demo";

const CHAVE = "feirafacil:estado:v1";

let estado: Estado = estadoInicial();
let hidratado = false;
const ouvintes = new Set<() => void>();

const notificar = () => ouvintes.forEach((l) => l());

const persistir = () => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CHAVE, JSON.stringify(estado));
  } catch {
    /* armazenamento local indisponível ou cheio */
  }
};

const definir = (novo: Estado) => {
  estado = novo;
  persistir();
  notificar();
};

export const atualizar = (fn: (e: Estado) => Estado) => definir(fn(estado));

export const hidratar = () => {
  if (hidratado || typeof window === "undefined") return;
  hidratado = true;
  try {
    const bruto = window.localStorage.getItem(CHAVE);
    if (bruto) {
      const salvo = JSON.parse(bruto) as Estado;
      if (salvo && salvo.versao === 1) {
        estado = { ...estadoInicial(), ...salvo };
      }
    } else {
      persistir();
    }
  } catch {
    /* ignora dados corrompidos e mantém a demonstração */
  }
  notificar();
};

const subscribe = (l: () => void) => {
  ouvintes.add(l);
  return () => ouvintes.delete(l);
};

const getSnapshot = () => estado;

export function useEstado(): Estado {
  useEffect(() => {
    hidratar();
  }, []);
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function useUsuario(): Usuario | null {
  const e = useEstado();
  return e.usuarios.find((u) => u.id === e.sessaoId) ?? null;
}

const id = (prefixo: string) =>
  `${prefixo}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

const registrar = (e: Estado, tipo: string, descricao: string, autor?: string): Estado => {
  const atividade: Atividade = {
    id: id("at"),
    tipo,
    descricao,
    criadoEm: new Date().toISOString(),
    ...(autor ? { autor } : {}),
  };
  return { ...e, atividades: [atividade, ...e.atividades].slice(0, 120) };
};

/* ------------------------------ sessão ------------------------------ */

export const entrar = (email: string, senha: string): Usuario | null => {
  const usuario = estado.usuarios.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.senha === senha,
  );
  if (!usuario) return null;
  definir({ ...estado, sessaoId: usuario.id });
  return usuario;
};

export const entrarComoPerfil = (perfil: Perfil): Usuario | null => {
  const emails: Record<Perfil, string> = {
    visitante: "visitante@feirafacil.com",
    organizador: "organizador@feirafacil.com",
    admin: "admin@feirafacil.com",
  };
  return entrar(emails[perfil], "123456");
};

export const sair = () => definir({ ...estado, sessaoId: null });

export const cadastrar = (dados: {
  nome: string;
  email: string;
  senha: string;
  perfil: Perfil;
  municipio?: string;
  telefone?: string;
}): { ok: boolean; erro?: string } => {
  if (estado.usuarios.some((u) => u.email.toLowerCase() === dados.email.toLowerCase())) {
    return { ok: false, erro: "Já existe um cadastro demonstrativo com este e-mail." };
  }
  const novo: Usuario = {
    id: id("u"),
    nome: dados.nome,
    email: dados.email,
    senha: dados.senha,
    perfil: dados.perfil,
    ...(dados.municipio ? { municipio: dados.municipio } : {}),
    ...(dados.telefone ? { telefone: dados.telefone } : {}),
    interesses: [],
    notificacoes: { email: true, novidades: true, lembretes: false },
    status: "ativo",
    criadoEm: new Date().toISOString(),
  };
  let novoEstado: Estado = { ...estado, usuarios: [...estado.usuarios, novo], sessaoId: novo.id };
  novoEstado = registrar(novoEstado, "usuario", `Novo cadastro demonstrativo: ${novo.nome}.`, novo.nome);
  definir(novoEstado);
  return { ok: true };
};

export const atualizarPerfil = (usuarioId: string, dados: Partial<Usuario>) =>
  atualizar((e) => ({
    ...e,
    usuarios: e.usuarios.map((u) => (u.id === usuarioId ? { ...u, ...dados } : u)),
  }));

/* ------------------------------ eventos ------------------------------ */

export const salvarEvento = (evento: Evento, autor?: string) =>
  atualizar((e) => {
    const existe = e.eventos.some((x) => x.id === evento.id);
    const eventos = existe
      ? e.eventos.map((x) => (x.id === evento.id ? evento : x))
      : [evento, ...e.eventos];
    return registrar(
      { ...e, eventos },
      "evento",
      existe ? `Evento “${evento.nome}” editado.` : `Evento “${evento.nome}” criado.`,
      autor,
    );
  });

export const excluirEvento = (eventoId: string, autor?: string) =>
  atualizar((e) => {
    const alvo = e.eventos.find((x) => x.id === eventoId);
    return registrar(
      {
        ...e,
        eventos: e.eventos.filter((x) => x.id !== eventoId),
        avaliacoes: e.avaliacoes.filter((a) => a.eventoId !== eventoId),
      },
      "evento",
      `Evento “${alvo?.nome ?? eventoId}” excluído.`,
      autor,
    );
  });

export const alterarStatusEvento = (
  eventoId: string,
  status: Evento["status"],
  autor?: string,
) =>
  atualizar((e) => {
    const alvo = e.eventos.find((x) => x.id === eventoId);
    return registrar(
      {
        ...e,
        eventos: e.eventos.map((x) => (x.id === eventoId ? { ...x, status } : x)),
      },
      "admin",
      `Evento “${alvo?.nome ?? eventoId}” marcado como ${status}.`,
      autor,
    );
  });

export const patrocinar = (eventoId: string, dias: number, autor?: string) =>
  atualizar((e) => {
    const ate = new Date();
    ate.setDate(ate.getDate() + dias);
    const alvo = e.eventos.find((x) => x.id === eventoId);
    return registrar(
      {
        ...e,
        eventos: e.eventos.map((x) =>
          x.id === eventoId
            ? { ...x, patrocinado: true, patrocinioAte: ate.toISOString().slice(0, 10) }
            : x,
        ),
      },
      "patrocinio",
      `Destaque patrocinado simulado de ${dias} dias ativado para “${alvo?.nome ?? eventoId}”.`,
      autor,
    );
  });

export const encerrarPatrocinio = (eventoId: string, autor?: string) =>
  atualizar((e) =>
    registrar(
      {
        ...e,
        eventos: e.eventos.map((x) =>
          x.id === eventoId
            ? (() => {
                const { patrocinioAte: _patrocinioAte, ...restante } = x;
                return { ...restante, patrocinado: false };
              })()
            : x,
        ),
      },
      "patrocinio",
      "Destaque patrocinado simulado encerrado.",
      autor,
    ),
  );

/* --------------------- favoritos, agenda e avaliações --------------------- */

const alternarLista = (lista: string[] = [], valor: string) =>
  lista.includes(valor) ? lista.filter((v) => v !== valor) : [...lista, valor];

export const alternarFavorito = (usuarioId: string, eventoId: string) =>
  atualizar((e) => ({
    ...e,
    favoritos: { ...e.favoritos, [usuarioId]: alternarLista(e.favoritos[usuarioId], eventoId) },
  }));

export const alternarAgenda = (usuarioId: string, eventoId: string) =>
  atualizar((e) => ({
    ...e,
    agenda: { ...e.agenda, [usuarioId]: alternarLista(e.agenda[usuarioId], eventoId) },
  }));

export const salvarAvaliacao = (avaliacao: Avaliacao) =>
  atualizar((e) => {
    const existe = e.avaliacoes.some((a) => a.id === avaliacao.id);
    const avaliacoes = existe
      ? e.avaliacoes.map((a) => (a.id === avaliacao.id ? avaliacao : a))
      : [avaliacao, ...e.avaliacoes];
    const evento = e.eventos.find((x) => x.id === avaliacao.eventoId);
    return registrar(
      { ...e, avaliacoes },
      "avaliacao",
      `${existe ? "Avaliação editada" : "Nova avaliação"} em “${evento?.nome ?? ""}”.`,
      avaliacao.autorNome,
    );
  });

export const excluirAvaliacao = (avaliacaoId: string, autor?: string) =>
  atualizar((e) =>
    registrar(
      {
        ...e,
        avaliacoes: e.avaliacoes.filter((a) => a.id !== avaliacaoId),
        denuncias: e.denuncias.filter((d) => d.avaliacaoId !== avaliacaoId),
      },
      "avaliacao",
      "Avaliação excluída.",
      autor,
    ),
  );

export const responderAvaliacao = (avaliacaoId: string, texto: string, autor?: string) =>
  atualizar((e) =>
    registrar(
      {
        ...e,
        avaliacoes: e.avaliacoes.map((a) =>
          a.id === avaliacaoId
            ? { ...a, resposta: { texto, criadoEm: new Date().toISOString() } }
            : a,
        ),
      },
      "avaliacao",
      "Organizador respondeu a um comentário.",
      autor,
    ),
  );

export const denunciar = (
  avaliacaoId: string,
  eventoId: string,
  motivo: string,
  autorId: string,
  autorNome?: string,
) =>
  atualizar((e) =>
    registrar(
      {
        ...e,
        denuncias: [
          {
            id: id("d"),
            avaliacaoId,
            eventoId,
            motivo,
            autorId,
            criadoEm: new Date().toISOString(),
            situacao: "aberta",
          },
          ...e.denuncias,
        ],
      },
      "denuncia",
      `Comentário denunciado (${motivo}).`,
      autorNome,
    ),
  );

export const moderar = (
  denunciaId: string,
  decisao: "mantida" | "ocultada" | "excluida",
  autor?: string,
) =>
  atualizar((e) => {
    const denuncia = e.denuncias.find((d) => d.id === denunciaId);
    if (!denuncia) return e;
    let avaliacoes = e.avaliacoes;
    if (decisao === "ocultada") {
      avaliacoes = avaliacoes.map((a) =>
        a.id === denuncia.avaliacaoId ? { ...a, oculto: true } : a,
      );
    }
    if (decisao === "excluida") {
      avaliacoes = avaliacoes.filter((a) => a.id !== denuncia.avaliacaoId);
    }
    if (decisao === "mantida") {
      avaliacoes = avaliacoes.map((a) =>
        a.id === denuncia.avaliacaoId ? { ...a, oculto: false } : a,
      );
    }
    return registrar(
      {
        ...e,
        avaliacoes,
        denuncias: e.denuncias.map((d) =>
          d.id === denunciaId ? { ...d, situacao: decisao } : d,
        ),
      },
      "moderacao",
      `Decisão de moderação registrada: comentário ${decisao}.`,
      autor,
    );
  });

export const alterarStatusUsuario = (
  usuarioId: string,
  status: Usuario["status"],
  autor?: string,
) =>
  atualizar((e) => {
    const alvo = e.usuarios.find((u) => u.id === usuarioId);
    return registrar(
      {
        ...e,
        usuarios: e.usuarios.map((u) => (u.id === usuarioId ? { ...u, status } : u)),
      },
      "admin",
      `Usuário ${alvo?.nome ?? usuarioId} marcado como ${status}.`,
      autor,
    );
  });

export const enviarFeedback = (feedback: Omit<FeedbackPlataforma, "id" | "criadoEm">) =>
  atualizar((e) => ({
    ...e,
    feedbacks: [
      { ...feedback, id: id("f"), criadoEm: new Date().toISOString() },
      ...e.feedbacks,
    ],
  }));

export const restaurarDemo = () => {
  const novo = estadoInicial();
  definir({ ...novo, sessaoId: estado.sessaoId });
};

/* ------------------------------ seletores ------------------------------ */

export const eventosPublicos = (e: Estado) =>
  e.eventos.filter((x) => x.status === "aprovado");

export const avaliacoesVisiveis = (e: Estado, eventoId: string) =>
  e.avaliacoes.filter((a) => a.eventoId === eventoId && !a.oculto);

export const notaMedia = (e: Estado, eventoId: string) => {
  const notas = avaliacoesVisiveis(e, eventoId).map((a) => a.nota);
  if (!notas.length) return 0;
  return Math.round((notas.reduce((a, b) => a + b, 0) / notas.length) * 10) / 10;
};

export const contarFavoritos = (e: Estado, eventoId: string) =>
  Object.values(e.favoritos).filter((lista) => lista.includes(eventoId)).length;
