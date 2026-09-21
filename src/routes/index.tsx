import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MapPinned, Search, Sparkles, Store, Users } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-feirinha.jpg";
import { LayoutPublico } from "@/components/layout-publico";
import { EventoCard } from "@/components/evento-card";
import { Botao } from "@/components/ui/botao";
import { Campo, Seletor } from "@/components/ui/campo";
import { CATEGORIAS, imagemDe, MUNICIPIOS } from "@/lib/catalogo";
import { eventosPublicos, useEstado } from "@/lib/loja";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "FeiraFácil Alagoas — Descubra feirinhas locais" },
    { name: "description", content: "Encontre feirinhas de artesanato, gastronomia, cultura e economia criativa em Alagoas." },
    { property: "og:title", content: "FeiraFácil Alagoas" },
    { property: "og:description", content: "Descubra feirinhas, sabores e encontros locais em Alagoas." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Inicio,
});

function Inicio() {
  const estado = useEstado();
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [municipio, setMunicipio] = useState("");
  const eventos = eventosPublicos(estado).sort((a,b) => a.data.localeCompare(b.data));
  const proximos = eventos.slice(0, 3);
  const patrocinados = eventos.filter((e) => e.patrocinado).slice(0, 3);
  const pesquisar = () => void navigate({ to: "/feirinhas", search: { busca, municipio, categoria: "" } });
  return <LayoutPublico>
    <section className="relative min-h-[680px] overflow-hidden bg-marinho text-marinho-foreground">
      <img src={hero} width={1600} height={1000} alt="Ilustração original de uma feirinha alagoana à beira da lagoa" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-marinho/70" />
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-sm bg-card/15 px-3 py-1.5 text-sm font-bold backdrop-blur"><Sparkles className="size-4 text-primary"/> Cultura, sabores e encontros locais</span>
          <h1 className="text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">Descubra as feirinhas de Alagoas</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-marinho-foreground/85 sm:text-xl">Encontre artesanato, gastronomia, moda e cultura pertinho de você — de Maceió ao interior.</p>
          <div className="mt-8 grid gap-2 rounded-lg bg-card p-2 shadow-2xl sm:grid-cols-[1fr_210px_auto]">
            <label className="sr-only" htmlFor="busca-inicio">Buscar feirinha</label><Campo id="busca-inicio" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Qual feirinha você procura?" className="border-0 shadow-none"/>
            <label className="sr-only" htmlFor="municipio-inicio">Município</label><Seletor id="municipio-inicio" value={municipio} onChange={(e) => setMunicipio(e.target.value)} className="border-0 shadow-none"><option value="">Todo Alagoas</option>{MUNICIPIOS.map((m) => <option key={m}>{m}</option>)}</Seletor>
            <Botao size="lg" onClick={pesquisar}><Search className="size-5"/>Buscar</Botao>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-card py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex items-end justify-between"><div><p className="font-bold text-primary">Explore por interesse</p><h2 className="mt-1 text-3xl font-bold text-marinho">Um passeio para cada gosto</h2></div></div><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{CATEGORIAS.map((c) => <Link key={c.id} to="/feirinhas" search={{ busca: "", municipio: "", categoria: c.id }} className="group overflow-hidden rounded-lg border bg-card hover:border-primary hover:shadow-lg"><div className="aspect-[4/3] overflow-hidden"><img src={imagemDe(c.imagem)} width={1200} height={800} loading="lazy" alt="" className="h-full w-full object-cover transition group-hover:scale-105"/></div><div className="p-3"><h3 className="text-sm font-bold text-marinho group-hover:text-primary">{c.nome}</h3></div></Link>)}</div></div></section>

    <section className="py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex items-end justify-between gap-4"><div><p className="font-bold text-primary">Chegando por aí</p><h2 className="mt-1 text-3xl font-bold text-marinho">Próximos eventos</h2></div><Link to="/feirinhas" search={{ busca: "", municipio: "", categoria: "" }} className="hidden font-bold text-primary hover:underline sm:block">Ver todos</Link></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{proximos.map((e) => <EventoCard key={e.id} evento={e}/>)}</div></div></section>

    {patrocinados.length > 0 && <section className="superficie-areia py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div><p className="font-bold text-primary">Destaques patrocinados</p><h2 className="mt-1 text-3xl font-bold text-marinho">Feirinhas em evidência</h2><p className="mt-2 text-sm text-muted-foreground">Destaques simulados, sem cobrança. Eventos demonstrativos.</p></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{patrocinados.map((e) => <EventoCard key={e.id} evento={e}/>)}</div></div></section>}

    <section className="bg-card py-16"><div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="text-center"><p className="font-bold text-primary">É simples</p><h2 className="mt-1 text-3xl font-bold text-marinho">Como funciona</h2></div><div className="mt-10 grid gap-8 md:grid-cols-3">{[
      [Search,"Encontre","Busque por nome, categoria, data, município ou bairro."],
      [CalendarCheck,"Planeje","Favorite eventos e monte sua própria agenda local."],
      [Users,"Participe","Avalie, comente e ajude outras pessoas a descobrir."],
    ].map(([Icone,t,d],i) => { const Icon = Icone as typeof Search; return <div key={String(t)} className="text-center"><span className="mx-auto grid size-14 place-items-center rounded-lg bg-primary text-primary-foreground"><Icon/></span><span className="mt-4 block text-xs font-bold text-primary">PASSO {i+1}</span><h3 className="mt-1 text-xl font-bold text-marinho">{String(t)}</h3><p className="mt-2 text-sm text-muted-foreground">{String(d)}</p></div>; })}</div></div></section>

    <section className="bg-marinho py-14 text-marinho-foreground"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6"><div><span className="flex items-center gap-2 text-primary"><Store className="size-5"/><strong>Você organiza uma feirinha?</strong></span><h2 className="mt-2 text-3xl font-bold">Coloque seu evento no mapa</h2><p className="mt-2 max-w-xl text-marinho-foreground/75">Cadastre, gerencie e acompanhe o retorno do público em um só lugar.</p></div><Botao size="lg" asChild><Link to="/cadastro">Começar agora <ArrowRight className="size-5"/></Link></Botao></div></section>
  </LayoutPublico>;
}
