import { Link, useNavigate } from "@tanstack/react-router";
import { CalendarDays, ChevronDown, Heart, LogOut, Map, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import { Botao } from "./ui/botao";
import { sair, useUsuario } from "@/lib/loja";

const links = [
  { to: "/feirinhas" as const, label: "Feirinhas" },
  { to: "/agenda" as const, label: "Agenda" },
  { to: "/mapa" as const, label: "Mapa" },
  { to: "/como-funciona" as const, label: "Como funciona" },
];

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [conta, setConta] = useState(false);
  const usuario = useUsuario();
  const navigate = useNavigate();
  const destinoPerfil = usuario?.perfil === "admin" ? "/admin" : usuario?.perfil === "organizador" ? "/organizador" : "/perfil";
  const encerrar = () => { sair(); setConta(false); void navigate({ to: "/" }); };
  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="file-band h-1.5 w-full" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {links.map((l) => <Link key={l.to} to={l.to} activeProps={{ className: "bg-muted text-primary" }} className="rounded-md px-3 py-2 text-sm font-bold text-marinho hover:bg-muted">{l.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          {usuario ? (
            <div className="relative">
              <Botao variant="ghost" onClick={() => setConta(!conta)}><UserRound className="size-4" />{usuario.nome.split(" ")[0]}<ChevronDown className="size-4" /></Botao>
              {conta && <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-md border bg-card p-1 shadow-xl">
                <div className="border-b px-3 py-2"><p className="text-sm font-bold">{usuario.nome}</p><p className="truncate text-xs text-muted-foreground">{usuario.email}</p></div>
                <Link to={destinoPerfil} onClick={() => setConta(false)} className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-muted"><UserRound className="size-4" />Minha área</Link>
                {usuario.perfil === "visitante" && <Link to="/favoritos" onClick={() => setConta(false)} className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-muted"><Heart className="size-4" />Favoritos</Link>}
                <button onClick={encerrar} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-muted"><LogOut className="size-4" />Sair</button>
              </div>}
            </div>
          ) : <Botao variant="ghost" asChild><Link to="/login">Entrar</Link></Botao>}
          <Botao asChild><Link to={usuario?.perfil === "organizador" ? "/organizador/eventos/novo" : "/cadastro"}>Cadastrar minha feira</Link></Botao>
        </div>
        <Botao variant="ghost" size="icon" className="sm:hidden" onClick={() => setAberto(!aberto)} aria-label="Abrir menu">{aberto ? <X /> : <Menu />}</Botao>
      </div>
      {aberto && <div className="border-t bg-card px-4 py-4 sm:hidden">
        <nav className="grid gap-1">
          {links.map((l) => <Link key={l.to} to={l.to} onClick={() => setAberto(false)} className="rounded-md px-3 py-3 font-bold text-marinho hover:bg-muted">{l.label}</Link>)}
          {usuario?.perfil === "visitante" && <Link to="/favoritos" onClick={() => setAberto(false)} className="flex items-center gap-2 rounded-md px-3 py-3 font-bold"><Heart className="size-4"/> Favoritos</Link>}
          <div className="mt-2 grid grid-cols-2 gap-2 border-t pt-4">
            {usuario ? <><Botao variant="outline" asChild><Link to={destinoPerfil}>Minha área</Link></Botao><Botao variant="ghost" onClick={encerrar}>Sair</Botao></> : <><Botao variant="outline" asChild><Link to="/login">Entrar</Link></Botao><Botao asChild><Link to="/cadastro">Cadastrar</Link></Botao></>}
          </div>
        </nav>
      </div>}
    </header>
  );
}
