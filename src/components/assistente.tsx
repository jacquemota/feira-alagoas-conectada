import { Link } from "@tanstack/react-router";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { CATEGORIAS } from "@/lib/catalogo";
import { ehFimDeSemana } from "@/lib/formato";
import { eventosPublicos, useEstado } from "@/lib/loja";
import { Botao } from "./ui/botao";
import { Campo } from "./ui/campo";

const rapidas = ["O que tem no fim de semana?", "Quais eventos são gratuitos?", "Como cadastrar uma feira?", "Como funcionam os favoritos?", "O que é o destaque patrocinado?"];

export function Assistente() {
  const [aberto, setAberto] = useState(false);
  const [entrada, setEntrada] = useState("");
  const [resposta, setResposta] = useState("Olá! Eu sou a Fê. Posso ajudar você a encontrar uma feirinha em Alagoas.");
  const estado = useEstado();
  const eventos = eventosPublicos(estado);
  const responder = (texto: string) => {
    const q = texto.toLowerCase();
    if (q.includes("fim de semana")) {
      const lista = eventos.filter((e) => ehFimDeSemana(e.data)).slice(0, 3);
      setResposta(lista.length ? `Encontrei ${lista.length} evento(s) no fim de semana: ${lista.map((e) => e.nome).join(", ")}.` : "Não há eventos no próximo fim de semana nos dados atuais. Veja a agenda completa.");
    } else if (q.includes("grátis") || q.includes("gratuito")) {
      setResposta(`Há ${eventos.filter((e) => e.entradaGratuita).length} feirinhas gratuitas no catálogo atual.`);
    } else if (q.includes("cadastrar")) {
      setResposta("Crie um perfil de organizador, entre na sua área e use “Cadastrar nova feirinha”. O formulário tem revisão antes de salvar.");
    } else if (q.includes("favorito")) {
      setResposta("Entre como visitante e toque no coração de qualquer evento. Sua seleção fica salva neste navegador.");
    } else if (q.includes("patrocin")) {
      setResposta("O destaque patrocinado é uma simulação acadêmica de 7, 15 ou 30 dias, sem cobrança e sem solicitar cartão.");
    } else {
      const categoria = CATEGORIAS.find((c) => q.includes(c.nome.toLowerCase().split(" ")[0]));
      const local = eventos.find((e) => q.includes(e.municipio.toLowerCase()) || q.includes(e.bairro.toLowerCase()));
      if (categoria) setResposta(`Encontrei ${eventos.filter((e) => e.categoria === categoria.id).length} evento(s) de ${categoria.nome}. Use o link para abrir o catálogo filtrado.`);
      else if (local) setResposta(`Há eventos em ${local.municipio}, incluindo “${local.nome}”. Veja todos no catálogo ou no mapa.`);
      else setResposta("Não reconheci essa pergunta. Tente perguntar por categoria, município, eventos gratuitos, fim de semana ou cadastro de feira.");
    }
    setEntrada("");
  };
  return <>
    <Botao size="icon" className="fixed bottom-5 right-5 z-40 size-14 rounded-full shadow-xl" onClick={() => setAberto(!aberto)} aria-label="Abrir Fê, assistente da FeiraFácil"><MessageCircle className="size-6" /></Botao>
    {aberto && <aside className="fixed bottom-24 right-4 z-40 flex h-[min(560px,calc(100vh-8rem))] w-[calc(100%-2rem)] max-w-sm flex-col overflow-hidden rounded-lg border bg-card shadow-2xl">
      <div className="flex items-center justify-between bg-marinho px-4 py-3 text-marinho-foreground"><div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-full bg-primary"><Bot className="size-5"/></span><div><p className="font-bold">Fê</p><p className="text-xs opacity-80">assistente da FeiraFácil</p></div></div><button onClick={() => setAberto(false)} className="rounded p-1 hover:bg-card/10" aria-label="Fechar assistente"><X/></button></div>
      <div className="flex-1 overflow-y-auto p-4"><div className="rounded-md bg-muted p-3 text-sm leading-relaxed">{resposta}</div><div className="mt-4 grid gap-2">{rapidas.map((q) => <button key={q} onClick={() => responder(q)} className="rounded-md border bg-card px-3 py-2 text-left text-xs font-medium hover:border-primary hover:text-primary">{q}</button>)}</div><div className="mt-4 flex gap-2 text-sm"><Link to="/feirinhas" className="font-bold text-primary hover:underline" onClick={() => setAberto(false)}>Ver catálogo</Link><Link to="/agenda" className="font-bold text-primary hover:underline" onClick={() => setAberto(false)}>Abrir agenda</Link></div></div>
      <form className="flex gap-2 border-t p-3" onSubmit={(e) => { e.preventDefault(); if (entrada.trim()) responder(entrada); }}><Campo value={entrada} onChange={(e) => setEntrada(e.target.value)} placeholder="Pergunte à Fê..." aria-label="Mensagem para a Fê"/><Botao size="icon" aria-label="Enviar"><Send className="size-4"/></Botao></form>
    </aside>}
  </>;
}
