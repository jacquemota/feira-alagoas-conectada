import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-feirafacil.png";

export function Logo({ compacto = false }: { compacto?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="FeiraFácil Alagoas — início">
      <img src={logo} width={816} height={816} alt="" className="size-10 shrink-0 object-contain" />
      {!compacto && <span className="leading-none"><strong className="block font-display text-lg text-marinho">FeiraFácil</strong><small className="font-bold text-primary">Alagoas</small></span>}
    </Link>
  );
}
