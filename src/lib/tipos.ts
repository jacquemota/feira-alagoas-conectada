export type CategoriaId =
  | "artesanato"
  | "gastronomia"
  | "moda"
  | "agricultura"
  | "cultura"
  | "economia-criativa";

export type Perfil = "visitante" | "organizador" | "admin";

export type StatusEvento = "aprovado" | "pendente" | "pausado";

export type StatusUsuario = "ativo" | "suspenso";

export type ImagemId =
  | "hero"
  | "artesanato"
  | "gastronomia"
  | "moda"
  | "agricultura"
  | "cultura"
  | "criativa";

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  perfil: Perfil;
  telefone?: string;
  municipio?: string;
  interesses: CategoriaId[];
  notificacoes: { email: boolean; novidades: boolean; lembretes: boolean };
  status: StatusUsuario;
  criadoEm: string;
  demo?: boolean;
}

export interface Evento {
  id: string;
  nome: string;
  descricao: string;
  categoria: CategoriaId;
  produtos: string[];
  data: string; // ISO yyyy-mm-dd
  horaInicio: string;
  horaFim: string;
  recorrencia: "unico" | "semanal" | "quinzenal" | "mensal";
  municipio: string;
  bairro: string;
  endereco: string;
  referencia?: string;
  lat: number;
  lng: number;
  entradaGratuita: boolean;
  valorEntrada?: string;
  acessibilidade: boolean;
  alimentacao: boolean;
  estacionamento: boolean;
  contato?: string;
  redeSocial?: string;
  imagem: ImagemId;
  organizadorId: string;
  status: StatusEvento;
  patrocinado: boolean;
  patrocinioAte?: string;
  visualizacoes: number;
  demo?: boolean;
  criadoEm: string;
}

export interface Avaliacao {
  id: string;
  eventoId: string;
  autorId: string;
  autorNome: string;
  nota: number;
  comentario: string;
  criadoEm: string;
  oculto: boolean;
  resposta?: { texto: string; criadoEm: string };
}

export interface Denuncia {
  id: string;
  avaliacaoId: string;
  eventoId: string;
  motivo: string;
  autorId: string;
  criadoEm: string;
  situacao: "aberta" | "mantida" | "ocultada" | "excluida";
}

export interface Atividade {
  id: string;
  tipo: string;
  descricao: string;
  criadoEm: string;
  autor?: string;
}

export interface FeedbackPlataforma {
  id: string;
  autorId: string;
  tipo: "sugestao" | "problema" | "elogio";
  nota: number;
  mensagem: string;
  criadoEm: string;
}

export interface Estado {
  versao: number;
  usuarios: Usuario[];
  eventos: Evento[];
  avaliacoes: Avaliacao[];
  denuncias: Denuncia[];
  atividades: Atividade[];
  feedbacks: FeedbackPlataforma[];
  favoritos: Record<string, string[]>;
  agenda: Record<string, string[]>;
  sessaoId: string | null;
}
