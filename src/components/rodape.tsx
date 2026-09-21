import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

export function Rodape() {
  return <footer className="mt-auto border-t bg-card">
    <div className="file-band h-1.5 w-full" />
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      <div><Logo /><p className="mt-3 max-w-xs text-sm text-muted-foreground">Conectando pessoas, cultura e economia local em Alagoas.</p></div>
      <div><h3 className="font-bold">Descobrir</h3><div className="mt-3 grid gap-2 text-sm text-muted-foreground"><Link to="/feirinhas">Feirinhas</Link><Link to="/agenda">Agenda</Link><Link to="/mapa">Mapa</Link></div></div>
      <div><h3 className="font-bold">Plataforma</h3><div className="mt-3 grid gap-2 text-sm text-muted-foreground"><Link to="/como-funciona">Como funciona</Link><Link to="/cadastro">Criar cadastro</Link><Link to="/creditos">Créditos de imagens</Link></div></div>
      <div><h3 className="font-bold">Importante</h3><p className="mt-3 text-sm text-muted-foreground">Projeto acadêmico demonstrativo, sem vínculo com órgãos públicos.</p></div>
    </div>
    <div className="border-t px-4 py-4 text-center text-xs text-muted-foreground">© 2026 FeiraFácil Alagoas · Dados e eventos fictícios para demonstração.</div>
  </footer>;
}
