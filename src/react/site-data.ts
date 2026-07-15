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

export type AgendaItem = {
  time: string;
  title: string;
  text: string;
};

export type AgendaDay = {
  id: string;
  date: string;
  label: string;
  image: string;
  title: string;
  place: string;
  items: AgendaItem[];
  href: string;
};

export type DiaryChapter = {
  n: string;
  tag: string;
  title: string;
  date: string;
  image: string;
  text: string;
  status: string;
  videoUrl: string;
};

export type SiteSettings = {
  seasonLabel: string;
  heroTitleStart: string;
  heroTitleHighlight: string;
  heroTitleEnd: string;
  heroDescription: string;
  countdownDate: string;
  introLabel: string;
  introText: string;
  instagramUrl: string;
  instagramLabel: string;
  footerDescription: string;
  locationName: string;
  locationRegion: string;
  churchHeroImage: string;
  churchAboutImage: string;
  mapUrl: string;
};

export type SiteContent = {
  settings: SiteSettings;
  experiences: Experience[];
  agenda: AgendaDay[];
  diary: DiaryChapter[];
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

export const agendaDays: AgendaDay[] = [
  { id:"01-ago", date:"01 AGO", label:"Abertura", image:"/assets/caminhadas-editorial.png", title:"Abertura + Cachoeira do Marumbé", place:"Igreja do centrinho", items:[{time:"13h",title:"Cerimônia de abertura",text:"Apresentação do projeto e encontro dos participantes."},{time:"Depois",title:"Caminhada ao Marumbé",text:"Atividade especial com saída após a abertura."}], href:"/caminhadas" },
  { id:"15-ago", date:"15–16 AGO", label:"Fotografia", image:"/assets/fotografia-editorial.png", title:"Workshop de fotografia", place:"Pousada Café Aquarela + pontos turísticos", items:[{time:"Dia 1",title:"Aula teórica",text:"Fundamentos, linguagem e preparação para a prática."},{time:"Dia 2",title:"Saída fotográfica",text:"Registros em diferentes pontos turísticos de Macacos."}], href:"/fotografia" },
  { id:"29-ago", date:"29 AGO", label:"Trilha", image:"/assets/caminhadas-editorial.png", title:"Mirante do Eustáquio", place:"Encontro no Recanto do Suíço", items:[{time:"09h",title:"Concentração",text:"Recepção, conferência e orientações de segurança."},{time:"Em seguida",title:"Caminhada guiada",text:"Percurso até o mirante com acompanhamento."}], href:"/caminhadas" },
  { id:"12-set", date:"12 SET", label:"Fotografia", image:"/assets/fotografia-editorial.png", title:"Exposição e premiação", place:"Recanto do Suíço", items:[{time:"13h",title:"Encerramento da fotografia",text:"Resultado do concurso e celebração dos trabalhos."},{time:"No evento",title:"Trio Folk News",text:"Apresentação cultural de encerramento."}], href:"/fotografia" },
  { id:"19-set", date:"19 SET", label:"Poesia", image:"/assets/poesia-editorial.png", title:"Premiação da poesia", place:"Recanto do Suíço", items:[{time:"13h",title:"Cerimônia de encerramento",text:"Finalistas, votação e premiação das duas categorias."},{time:"No evento",title:"Apresentações culturais",text:"Beatriz Myrrha e Duo Dama-Triz."}], href:"/poesia" },
  { id:"26-set", date:"26 SET", label:"Canção + trilha", image:"/assets/cancao-editorial.png", title:"Um dia com dois encontros", place:"Macacos + Recanto do Suíço", items:[{time:"08h",title:"Cachoeira dos Anjos",text:"Terceira caminhada ecoturística guiada."},{time:"13h",title:"Semifinal da canção",text:"Vinte canções no palco e show de Lumineiro e Banda Dona Zilda."}], href:"/cancao" },
  { id:"27-set", date:"27 SET", label:"Grande final", image:"/assets/cancao-editorial.png", title:"Final do Festival da Canção", place:"Recanto do Suíço", items:[{time:"13h",title:"Dez canções finalistas",text:"Apresentações e definição das três vencedoras."},{time:"No evento",title:"Show de Júlia Rocha",text:"Encerramento da programação do festival."}], href:"/cancao" },
];

export const diaryChapters: DiaryChapter[] = [
  {n:"00",tag:"Preparação",title:"Antes do primeiro passo",date:"Julho de 2026",image:"/assets/igreja-macacos-hero.png",text:"O território, a equipe e os bastidores que preparam o início do projeto.",status:"Em breve",videoUrl:""},
  {n:"01",tag:"Abertura",title:"O dia em que tudo começa",date:"1º de agosto",image:"/assets/caminhadas-editorial.png",text:"Cerimônia, encontro na igreja e os primeiros registros da caminhada ao Marumbé.",status:"Em breve",videoUrl:""},
  {n:"02",tag:"Olhares",title:"Macacos por novos ângulos",date:"15 e 16 de agosto",image:"/assets/fotografia-editorial.png",text:"Aulas, saídas fotográficas, depoimentos e as imagens escolhidas pelos participantes.",status:"Em breve",videoUrl:""},
  {n:"03",tag:"Vozes",title:"Versos e canções do território",date:"Setembro de 2026",image:"/assets/cancao-editorial.png",text:"Finalistas, apresentações, bastidores e os melhores momentos dos encerramentos.",status:"Em breve",videoUrl:""},
];

export const siteSettings: SiteSettings = {
  seasonLabel: "Agosto — outubro • 2026",
  heroTitleStart: "Um território.",
  heroTitleHighlight: "Quatro jeitos",
  heroTitleEnd: "de sentir.",
  heroDescription: "Caminhe, fotografe, escreva e cante. Macacos vira encontro entre natureza, memória e criação.",
  countdownDate: "2026-08-01T13:00:00-03:00",
  introLabel: "01 / O PROJETO",
  introText: "Não é só uma programação. É um convite para ver Macacos com outros olhos e guardar cada encontro como parte da memória do lugar.",
  instagramUrl: "https://www.instagram.com/curta.macacos/",
  instagramLabel: "@curta.macacos",
  footerDescription: "Arte, natureza, cultura e turismo reunidos em experiências que valorizam São Sebastião das Águas Claras.",
  locationName: "São Sebastião das Águas Claras",
  locationRegion: "Nova Lima — Minas Gerais",
  churchHeroImage: "/assets/igreja-macacos-hero.png",
  churchAboutImage: "/assets/igreja-macacos.webp",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Sebasti%C3%A3o+das+%C3%81guas+Claras+Nova+Lima+MG",
};

export const defaultSiteContent: SiteContent = {
  settings: siteSettings,
  experiences,
  agenda: agendaDays,
  diary: diaryChapters,
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Experiências", href: "/eventos" },
  { label: "Agenda", href: "/agenda" },
  { label: "Diário", href: "/diario" },
  { label: "O projeto", href: "/sobre" },
];
