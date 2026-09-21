import { Link, useNavigate } from "@tanstack/react-router";
import { CalendarDays, Heart, MapPin, Star } from "lucide-react";
import type { Evento } from "@/lib/tipos";
import { imagemDe, nomeCategoria } from "@/lib/catalogo";
import { formatarData, formatarHorario } from "@/lib/formato";
import { alternarFavorito, notaMedia, useEstado, useUsuario } from "@/lib/loja";
import { Botao } from "./ui/botao";
import { cn } from "@/lib/utils";

export function EventoCard({ evento, modo = "grade" }: { evento: Evento; modo?: "grade" | "lista" }) {
  const estado = useEstado();
  const usuario = useUsuario();
  const navigate = useNavigate();
  const favorito = usuario ? (estado.favoritos[usuario.id] ?? []).includes(evento.id) : false;
  const nota = notaMedia(estado, evento.id);
  const favoritar = () => {
    if (!usuario) { void navigate({ to: "/login", search: { voltar: `/feirinhas/${evento.id}` } }); return; }
    alternarFavorito(usuario.id, evento.id);
  };
  return (
    <article className={cn("group overflow-hidden card-elevado transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]", modo === "lista" && "sm:flex")}>
      <Link to="/feirinhas/$id" params={{ id: evento.id }} className={cn("relative block overflow-hidden", modo === "lista" ? "sm:w-64 sm:shrink-0" : "aspect-[16/10]")}>
        <img src={imagemDe(evento.imagem)} width={1200} height={800} loading="lazy" alt={`Ilustração temática de ${evento.nome}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {evento.patrocinado && <span className="rounded-sm bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">Patrocinado</span>}
          {evento.demo && <span className="rounded-sm bg-marinho/90 px-2 py-1 text-xs font-bold text-marinho-foreground">Evento demonstrativo</span>}
        </div>
      </Link>
      <div className="flex min-w-0 flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <span className="text-xs font-bold uppercase text-primary">{nomeCategoria(evento.categoria)}</span>
          <Botao variant="ghost" size="icon" className="-mr-2 -mt-2" onClick={favoritar} aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"} title={favorito ? "Remover dos favoritos" : "Favoritar"}>
            <Heart className={cn("size-5", favorito && "fill-primary text-primary")} />
          </Botao>
        </div>
        <Link to="/feirinhas/$id" params={{ id: evento.id }} className="font-display text-xl font-bold leading-tight text-marinho hover:text-primary">{evento.nome}</Link>
        <div className="mt-3 grid gap-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><CalendarDays className="size-4 text-primary" />{formatarData(evento.data)} · {formatarHorario(evento.horaInicio, evento.horaFim)}</span>
          <span className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{evento.bairro}, {evento.municipio}</span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-3">
          <span className="flex items-center gap-1 text-sm font-bold"><Star className="size-4 fill-primary text-primary" /> {nota || "Novo"}</span>
          <Link to="/feirinhas/$id" params={{ id: evento.id }} className="text-sm font-bold text-primary hover:underline">Ver detalhes</Link>
        </div>
      </div>
    </article>
  );
}
