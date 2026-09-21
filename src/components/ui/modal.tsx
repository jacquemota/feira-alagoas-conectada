import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export function Modal({ aberto, aoMudar, titulo, descricao, children }: { aberto: boolean; aoMudar: (v: boolean) => void; titulo: string; descricao?: string; children: ReactNode }) {
  return (
    <Dialog.Root open={aberto} onOpenChange={aoMudar}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-marinho/55 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-card p-6 shadow-2xl">
          <div className="pr-8">
            <Dialog.Title className="text-xl font-bold text-foreground">{titulo}</Dialog.Title>
            {descricao && <Dialog.Description className="mt-1 text-sm text-muted-foreground">{descricao}</Dialog.Description>}
          </div>
          <Dialog.Close className="absolute right-4 top-4 rounded-md p-2 text-muted-foreground hover:bg-muted" aria-label="Fechar"><X className="size-5" /></Dialog.Close>
          <div className="mt-5">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
