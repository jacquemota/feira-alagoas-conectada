import { createFileRoute } from "@tanstack/react-router";
import { Grid2X2, List, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { LayoutPublico } from "@/components/layout-publico";
import { EventoCard } from "@/components/evento-card";
import { CabecalhoPagina, Container, Vazio } from "@/components/pagina";
import { Botao } from "@/components/ui/botao";
import { Campo, Seletor } from "@/components/ui/campo";
import { CATEGORIAS, MUNICIPIOS } from "@/lib/catalogo";
import { notaMedia, eventosPublicos, useEstado } from "@/lib/loja";

const schemaBusca = z.object({ busca: z.string().catch(""), municipio: z.string().catch(""), categoria: z.string().catch("") });
export const Route = createFileRoute("/feirinhas/")({
  validateSearch: schemaBusca,
  head: () => ({ meta: [
    { title: "Catálogo de feirinhas — FeiraFácil Alagoas" }, { name: "description", content: "Pesquise e filtre feirinhas demonstrativas em Alagoas." },
    { property: "og:title", content: "Catálogo de feirinhas — FeiraFácil Alagoas" }, { property: "og:description", content: "Artesanato, gastronomia, cultura e economia criativa em Alagoas." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Catalogo,
});
function Catalogo() {
  const estado = useEstado(); const inicial = Route.useSearch();
  const [busca,setBusca]=useState(inicial.busca); const [categoria,setCategoria]=useState(inicial.categoria); const [municipio,setMunicipio]=useState(inicial.municipio); const [bairro,setBairro]=useState(""); const [data,setData]=useState(""); const [gratis,setGratis]=useState(false); const [acessivel,setAcessivel]=useState(false); const [ordem,setOrdem]=useState("data"); const [modo,setModo]=useState<"grade"|"lista">("grade");
  const bairros=[...new Set(estado.eventos.map(e=>e.bairro))].sort();
  const eventos=useMemo(()=> eventosPublicos(estado).filter(e => (!busca || e.nome.toLowerCase().includes(busca.toLowerCase())) && (!categoria || e.categoria===categoria) && (!municipio || e.municipio===municipio) && (!bairro || e.bairro===bairro) && (!data || e.data===data) && (!gratis || e.entradaGratuita) && (!acessivel || e.acessibilidade)).sort((a,b)=> ordem==="nota" ? notaMedia(estado,b.id)-notaMedia(estado,a.id) : ordem==="nome" ? a.nome.localeCompare(b.nome) : a.data.localeCompare(b.data)),[estado,busca,categoria,municipio,bairro,data,gratis,acessivel,ordem]);
  const limpar=()=>{setBusca("");setCategoria("");setMunicipio("");setBairro("");setData("");setGratis(false);setAcessivel(false);};
  return <LayoutPublico><CabecalhoPagina titulo="Feirinhas de Alagoas" descricao="Explore eventos demonstrativos e encontre seu próximo passeio."/><Container>
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]"><aside className="h-fit rounded-lg border bg-card p-4 lg:sticky lg:top-24"><div className="mb-4 flex items-center justify-between"><h2 className="flex items-center gap-2 font-bold"><SlidersHorizontal className="size-4"/>Filtros</h2><button onClick={limpar} className="text-xs font-bold text-primary">Limpar</button></div><div className="grid gap-4"><label className="grid gap-1 text-xs font-bold">Nome<Campo value={busca} onChange={e=>setBusca(e.target.value)} placeholder="Buscar..."/></label><label className="grid gap-1 text-xs font-bold">Categoria<Seletor value={categoria} onChange={e=>setCategoria(e.target.value)}><option value="">Todas</option>{CATEGORIAS.map(c=><option value={c.id} key={c.id}>{c.nome}</option>)}</Seletor></label><label className="grid gap-1 text-xs font-bold">Município<Seletor value={municipio} onChange={e=>setMunicipio(e.target.value)}><option value="">Todos</option>{MUNICIPIOS.map(m=><option key={m}>{m}</option>)}</Seletor></label><label className="grid gap-1 text-xs font-bold">Bairro<Seletor value={bairro} onChange={e=>setBairro(e.target.value)}><option value="">Todos</option>{bairros.map(b=><option key={b}>{b}</option>)}</Seletor></label><label className="grid gap-1 text-xs font-bold">Data<Campo type="date" value={data} onChange={e=>setData(e.target.value)}/></label><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={gratis} onChange={e=>setGratis(e.target.checked)} className="size-4 accent-primary"/> Entrada gratuita</label><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={acessivel} onChange={e=>setAcessivel(e.target.checked)} className="size-4 accent-primary"/> Com acessibilidade</label></div></aside>
    <div><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><strong>{eventos.length} resultado{eventos.length!==1&&"s"}</strong><div className="flex items-center gap-2"><Seletor value={ordem} onChange={e=>setOrdem(e.target.value)} aria-label="Ordenação" className="w-48"><option value="data">Próxima data</option><option value="nota">Melhor avaliação</option><option value="nome">Nome</option></Seletor><div className="flex rounded-md border bg-card p-1"><button className={`rounded p-2 ${modo==="grade"?"bg-muted text-primary":""}`} onClick={()=>setModo("grade")} aria-label="Visualizar em grade"><Grid2X2 className="size-4"/></button><button className={`rounded p-2 ${modo==="lista"?"bg-muted text-primary":""}`} onClick={()=>setModo("lista")} aria-label="Visualizar em lista"><List className="size-4"/></button></div></div></div>{eventos.length ? <div className={modo==="grade"?"grid gap-5 sm:grid-cols-2 xl:grid-cols-3":"grid gap-4"}>{eventos.map(e=><EventoCard key={e.id} evento={e} modo={modo}/>)}</div>:<Vazio titulo="Nenhuma feirinha encontrada" descricao="Tente remover algum filtro ou redefinir sua busca." acao={<Botao onClick={limpar}><X className="size-4"/>Limpar filtros</Botao>}/>}</div></div>
  </Container></LayoutPublico>;
}
