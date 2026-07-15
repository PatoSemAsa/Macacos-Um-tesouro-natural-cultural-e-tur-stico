export type Experience = {
  slug: string;
  title: string;
  shortTitle: string;
  kind: "natureza" | "arte" | "cultura";
  period: string;
  deadline: string;
  eyebrow: string;
  description: string;
  href: string;
  form: string;
  regulation: string;
  accent: string;
  number: string;
  image: string;
  dateShort: string;
};

export const experiences: Experience[] = [
  {
    slug: "caminhadas",
    title: "Caminhadas ecoturísticas",
    shortTitle: "Caminhadas",
    kind: "natureza",
    period: "1º de agosto a 26 de setembro",
    deadline: "Vagas limitadas",
    eyebrow: "Natureza guiada",
    description: "Trilhas guiadas por cachoeiras, mirantes e mata preservada, com segurança e histórias da região.",
    href: "/caminhadas",
    form: "https://forms.gle/faHXaMziKTemPzna6",
    regulation: "https://drive.google.com/file/d/15WQb0vouxfGDcSI0R7Dr0fnwUbCHogeW/view?usp=sharing",
    accent: "#9dc7a5",
    number: "01",
    image: "/assets/caminhadas-editorial.png",
    dateShort: "01 AGO",
  },
  {
    slug: "fotografia",
    title: "Workshop e concurso de fotografia",
    shortTitle: "Fotografia",
    kind: "arte",
    period: "15 e 16 de agosto",
    deadline: "Inscrições até 31 de julho",
    eyebrow: "20 horas de formação",
    description: "Aprenda com um fotógrafo profissional, registre Macacos e concorra com a sua melhor imagem.",
    href: "/fotografia",
    form: "https://docs.google.com/forms/d/e/1FAIpQLScMFS62XOXHCZBz7oBrcfy3AZBOsIbAti-85GusS1gCa_5-zA/viewform",
    regulation: "https://drive.google.com/file/d/1TyKFESEZfl4yF50QKsMQA0LnlIEYnyim/view?usp=sharing",
    accent: "#8fc4df",
    number: "02",
    image: "/assets/fotografia-editorial.png",
    dateShort: "15 AGO",
  },
  {
    slug: "poesia",
    title: "Concurso de poesia",
    shortTitle: "Poesia",
    kind: "cultura",
    period: "Premiação em 19 de setembro",
    deadline: "Inscrições até 31 de agosto",
    eyebrow: "Palavras que preservam",
    description: "Poemas autorais inspirados na riqueza natural, cultural e turística de Macacos.",
    href: "/poesia",
    form: "https://forms.gle/aixvjfBY5vY5EDi39",
    regulation: "https://drive.google.com/file/d/1STeI4EDu526yJAPJh9LUuoLMTWfN46FI/view?usp=sharing",
    accent: "#d6b36a",
    number: "03",
    image: "/assets/poesia-editorial.png",
    dateShort: "19 SET",
  },
  {
    slug: "cancao",
    title: "Festival da canção",
    shortTitle: "Canção",
    kind: "cultura",
    period: "26 e 27 de setembro",
    deadline: "Inscrições até 17 de agosto",
    eyebrow: "R$ 10 mil em prêmios",
    description: "Canções autorais de todo o Brasil em uma celebração da música, da cultura e de novos artistas.",
    href: "/cancao",
    form: "https://forms.gle/V5omfRj9fe1ud2sK8",
    regulation: "https://drive.google.com/file/d/1yAfp_g1WvxRugEckBE1udECVtIZxC52Y/view?usp=sharing",
    accent: "#d38a67",
    number: "04",
    image: "/assets/cancao-editorial.png",
    dateShort: "26 SET",
  },
];

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Experiências", href: "/eventos" },
  { label: "Agenda", href: "/agenda" },
  { label: "Diário", href: "/diario" },
  { label: "O projeto", href: "/sobre" },
];
