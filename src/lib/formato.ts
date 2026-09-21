export const formatarData = (iso: string) => {
  if (!iso) return "";
  const [ano, mes, dia] = iso.split("-");
  if (!ano || !mes || !dia) return iso;
  return `${dia}/${mes}/${ano}`;
};

export const formatarDataHora = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
};

export const formatarHorario = (inicio: string, fim: string) =>
  `${inicio}h às ${fim}h`;

export const diaSemana = (iso: string) => {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("pt-BR", { weekday: "long" });
};

export const hojeISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
};

export const emDias = (dias: number) => {
  const d = new Date();
  d.setDate(d.getDate() + dias);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
};

export const ehFuturo = (iso: string) => iso >= hojeISO();

export const ehFimDeSemana = (iso: string) => {
  const dia = new Date(`${iso}T12:00:00`).getDay();
  return dia === 0 || dia === 6;
};

export const mediaNotas = (notas: number[]) =>
  notas.length ? Math.round((notas.reduce((a, b) => a + b, 0) / notas.length) * 10) / 10 : 0;
