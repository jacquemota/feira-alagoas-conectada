import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Estrelas({ nota, tamanho = "sm", interativo, aoMudar }: { nota: number; tamanho?: "sm" | "lg"; interativo?: boolean; aoMudar?: (n: number) => void }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${nota} de 5 estrelas`}>
      {[1,2,3,4,5].map((n) => {
        const icone = <Star className={cn(tamanho === "lg" ? "size-7" : "size-4", n <= nota ? "fill-primary text-primary" : "text-border")} />;
        return interativo ? <button key={n} type="button" onClick={() => aoMudar?.(n)} aria-label={`${n} estrelas`} className="rounded-sm">{icone}</button> : <span key={n}>{icone}</span>;
      })}
    </div>
  );
}
