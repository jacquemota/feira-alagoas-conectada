import type { ReactNode } from "react";
import { Cabecalho } from "./cabecalho";
import { Rodape } from "./rodape";
import { Assistente } from "./assistente";
export function LayoutPublico({ children }: { children: ReactNode }) { return <div className="flex min-h-screen flex-col"><Cabecalho /><main className="flex-1">{children}</main><Rodape/><Assistente/></div>; }
