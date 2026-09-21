import type { CategoriaId, ImagemId } from "./tipos";

import heroFeirinha from "@/assets/hero-feirinha.jpg";
import feiraArtesanato from "@/assets/feira-artesanato.jpg";
import feiraGastronomia from "@/assets/feira-gastronomia.jpg";
import feiraModa from "@/assets/feira-moda.jpg";
import feiraAgricultura from "@/assets/feira-agricultura.jpg";
import feiraCultura from "@/assets/feira-cultura.jpg";
import feiraCriativa from "@/assets/feira-criativa.jpg";

export const IMAGENS: Record<ImagemId, { src: string; titulo: string }> = {
  hero: { src: heroFeirinha, titulo: "Feirinha à beira-mar (ilustração original)" },
  artesanato: { src: feiraArtesanato, titulo: "Barraca de artesanato e bordado filé" },
  gastronomia: { src: feiraGastronomia, titulo: "Barraca de gastronomia regional" },
  moda: { src: feiraModa, titulo: "Barraca de moda autoral" },
  agricultura: { src: feiraAgricultura, titulo: "Barraca de agricultura familiar" },
  cultura: { src: feiraCultura, titulo: "Feira cultural com música ao vivo" },
  criativa: { src: feiraCriativa, titulo: "Feira de economia criativa" },
};

export const imagemDe = (id: ImagemId | string): string =>
  IMAGENS[id as ImagemId]?.src ?? IMAGENS.artesanato.src;

export interface Categoria {
  id: CategoriaId;
  nome: string;
  descricao: string;
  imagem: ImagemId;
}

export const CATEGORIAS: Categoria[] = [
  {
    id: "artesanato",
    nome: "Artesanato",
    descricao: "Bordado filé, cerâmica, palha e peças do Pontal da Barra.",
    imagem: "artesanato",
  },
  {
    id: "gastronomia",
    nome: "Gastronomia",
    descricao: "Sabores da lagoa, tapioca, doces e comidas de barraca.",
    imagem: "gastronomia",
  },
  {
    id: "moda",
    nome: "Moda",
    descricao: "Moda autoral, brechós e acessórios feitos à mão.",
    imagem: "moda",
  },
  {
    id: "agricultura",
    nome: "Agricultura familiar",
    descricao: "Produtores locais, orgânicos e produtos da roça.",
    imagem: "agricultura",
  },
  {
    id: "cultura",
    nome: "Cultura",
    descricao: "Música, dança, literatura e encontros culturais.",
    imagem: "cultura",
  },
  {
    id: "economia-criativa",
    nome: "Economia criativa",
    descricao: "Design, ilustração, editorial independente e inovação.",
    imagem: "criativa",
  },
];

export const nomeCategoria = (id: CategoriaId | string) =>
  CATEGORIAS.find((c) => c.id === id)?.nome ?? String(id);

export const MUNICIPIOS = [
  "Maceió",
  "Marechal Deodoro",
  "Penedo",
  "Arapiraca",
  "Barra de São Miguel",
  "Piranhas",
];
