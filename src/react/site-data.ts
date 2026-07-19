export type ContentCard = {
  value: string;
  label: string;
  title: string;
  text: string;
};

export type ScheduleEntry = {
  date: string;
  title: string;
  place: string;
  time: string;
  description: string;
};

export type Prize = {
  place: string;
  reward: string;
};

export type ContentLink = {
  label: string;
  url: string;
};

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
  posterImage: string;
  dateShort: string;
  kicker: string;
  badges: string[];
  overviewEyebrow: string;
  overviewTitle: string;
  overviewText: string;
  bodyParagraphs: string[];
  facts: string[];
  featureCards: ContentCard[];
  schedule: ScheduleEntry[];
  prizes: Prize[];
  extraLinks: ContentLink[];
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
  slug: string;
  tag: string;
  title: string;
  date: string;
  publishedAt: string;
  image: string;
  text: string;
  bodyParagraphs: string[];
  gallery: string[];
  status: string;
  videoUrl: string;
};

export type FeaturedVlog = {
  active: boolean;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  instagramUrl: string;
  label: string;
  status: string;
  highlights: string[];
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

export type AboutContent = {
  eyebrow: string;
  title: string;
  lead: string;
  projectTitle: string;
  projectParagraphs: string[];
  territoryTitle: string;
  territoryParagraphs: string[];
  associationTitle: string;
  associationParagraphs: string[];
};

export type SiteContent = {
  settings: SiteSettings;
  about: AboutContent;
  experiences: Experience[];
  agenda: AgendaDay[];
  diary: DiaryChapter[];
  featuredVlog: FeaturedVlog;
};

export const experiences: Experience[] = [
  {
    slug: "caminhadas",
    title: "Caminhadas ecoturísticas",
    shortTitle: "Caminhadas",
    kind: "natureza",
    period: "1º de agosto a 25 de outubro de 2026",
    deadline: "Inscrições até 24 de outubro",
    eyebrow: "Natureza guiada",
    description: "Trilhas guiadas por cachoeiras, mirantes e mata preservada, com segurança e histórias da região.",
    href: "/caminhadas",
    form: "https://forms.gle/faHXaMziKTemPzna6",
    regulation: "https://drive.google.com/file/d/15WQb0vouxfGDcSI0R7Dr0fnwUbCHogeW/view?usp=sharing",
    accent: "#9dc7a5",
    number: "01",
    image: "/assets/caminhadas-editorial.png",
    posterImage: "/assets/cartaz-caminhadas.webp",
    dateShort: "01 AGO",
    kicker: "Caminhadas ecoturísticas",
    badges: ["Atividade gratuita", "10+ anos", "20 vagas por caminhada"],
    overviewEyebrow: "Sobre o evento",
    overviewTitle: "Natureza, histórias e novos caminhos.",
    overviewText: "Uma experiência guiada para conhecer de perto a riqueza natural, cultural e turística de Macacos.",
    bodyParagraphs: [
      "Venha participar de uma caminhada ecoturística guiada e viva uma experiência inesquecível em meio à natureza de Macacos. Explore trilhas cercadas por paisagens, cachoeiras, mirantes e mata preservada em uma atividade segura, educativa e ideal para toda a família.",
      "Participe e descubra as belezas naturais que fazem de Macacos um dos destinos mais especiais de Minas Gerais.",
    ],
    facts: [
      "Atividade gratuita mediante inscrição.",
      "Vagas limitadas a 20 participantes por caminhada.",
      "Participação permitida para maiores de 10 anos.",
      "Menores devem estar acompanhados por responsável legal e apresentar autorização assinada.",
      "Recomenda-se roupa leve, calçado apropriado, protetor solar, repelente e garrafa de água.",
    ],
    featureCards: [
      { value: "01 AGO", label: "Abertura especial", title: "Cachoeira do Marumbé", text: "Às 13h, com saída da igreja do centrinho após a cerimônia de abertura." },
      { value: "29 AGO", label: "Vista panorâmica", title: "Mirante do Eustáquio", text: "Às 9h, com ponto de encontro no Recanto do Suíço." },
      { value: "26 SET", label: "Natureza e água", title: "Cachoeira dos Anjos", text: "Às 8h, com ponto de encontro no Recanto do Suíço." },
    ],
    schedule: [
      { date: "01/07 a 24/10", title: "Inscrições", place: "Online", time: "Gratuitas", description: "Escolha a data disponível no formulário de inscrição." },
      { date: "01/08", title: "Abertura + Marumbé", place: "Igreja do centrinho", time: "13h", description: "Cerimônia de abertura seguida pela primeira caminhada." },
      { date: "29/08", title: "Mirante do Eustáquio", place: "Recanto do Suíço", time: "9h", description: "Caminhada guiada com encontro na Rua Seis de Outubro, 1500." },
      { date: "26/09", title: "Cachoeira dos Anjos", place: "Recanto do Suíço", time: "8h", description: "Caminhada guiada com encontro na Rua Seis de Outubro, 1500." },
    ],
    prizes: [],
    extraLinks: [
      { label: "Baixar autorização para menores — Anexo III", url: "https://docs.google.com/document/d/1sL59-Pvnf0y8_8H4WtNOdyEI_GIXgCIVMaoQkIIe1X4/edit?usp=sharing" },
    ],
  },
  {
    slug: "fotografia",
    title: "Workshop e concurso de fotografia",
    shortTitle: "Fotografia",
    kind: "arte",
    period: "15 e 16 de agosto de 2026",
    deadline: "Inscrições até 31 de julho",
    eyebrow: "20 horas de formação",
    description: "Aprenda com um fotógrafo profissional, registre Macacos e concorra com a sua melhor imagem.",
    href: "/fotografia",
    form: "https://docs.google.com/forms/d/e/1FAIpQLScMFS62XOXHCZBz7oBrcfy3AZBOsIbAti-85GusS1gCa_5-zA/viewform",
    regulation: "https://drive.google.com/file/d/1TyKFESEZfl4yF50QKsMQA0LnlIEYnyim/view?usp=sharing",
    accent: "#8fc4df",
    number: "02",
    image: "/assets/fotografia-editorial.png",
    posterImage: "/assets/cartaz-fotografia.webp",
    dateShort: "15 AGO",
    kicker: "Workshop + concurso",
    badges: ["60 vagas", "18+ anos", "Smartphone ou câmera"],
    overviewEyebrow: "Sobre o evento",
    overviewTitle: "Aprenda, registre e concorra.",
    overviewText: "Uma formação completa para transformar um olhar sobre Macacos em uma imagem finalista.",
    bodyParagraphs: [
      "O Workshop e Concurso de Fotografia é destinado a maiores de 18 anos que desejam desenvolver suas habilidades e registrar as belezas naturais, culturais e turísticas de Macacos. O workshop será ministrado pelo fotógrafo Flávio Souza Cruz.",
      "Durante as 20 horas de curso, o participante terá aulas teóricas e práticas e receberá apostila, camiseta do projeto, almoço, lanche, guia turístico, transporte para as atividades externas e certificado.",
      "Ao final, cada participante selecionará uma fotografia produzida durante o curso. As 60 imagens serão expostas para votação popular, integrarão o livro oficial do projeto e concorrerão à premiação.",
    ],
    facts: ["60 vagas para maiores de 18 anos.", "20 horas de aulas teóricas e práticas.", "Apostila, camiseta, alimentação, guia, transporte e certificado incluídos.", "Uma fotografia final por participante."],
    featureCards: [
      { value: "01", label: "Formação", title: "20 horas de curso", text: "Aulas teóricas e práticas com Flávio Souza Cruz." },
      { value: "02", label: "Evento", title: "Saídas fotográficas", text: "Registros em diferentes pontos turísticos de Macacos." },
      { value: "03", label: "Concurso", title: "Exposição popular", text: "As 60 imagens seguem para exposição, votação e livro oficial." },
    ],
    schedule: [
      { date: "01 a 31/07", title: "Inscrições", place: "Online", time: "Até 31/07", description: "Leia o regulamento antes de concluir a inscrição." },
      { date: "15 e 16/08", title: "Workshop", place: "Pousada Café Aquarela + pontos turísticos", time: "20 horas", description: "Aulas teóricas e saídas fotográficas." },
      { date: "20/08 a 12/09", title: "Exposição e votação", place: "Macacos", time: "Votação popular", description: "Exibição das 60 fotografias finalistas." },
      { date: "12/09", title: "Encerramento e premiação", place: "Recanto do Suíço", time: "13h", description: "Premiação e show com Trio Folk News." },
    ],
    prizes: [{ place: "1º", reward: "Câmera Canon EOS 4000D" }, { place: "2º", reward: "Tablet Redmi Pad 2" }, { place: "3º", reward: "Samsung Galaxy A26 5G" }],
    extraLinks: [
      { label: "Baixar Anexo IV", url: "https://drive.google.com/file/d/1ierGdBe-NxKG_V7rePWez9zW7RU_TxkS/view?usp=drive_link" },
      { label: "Ingresso gratuito — Encerramento da Fotografia", url: "https://www.sympla.com.br/evento/encerramento-do-concurso-de-fotografia-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3473746?share_id=copiarlink" },
    ],
  },
  {
    slug: "poesia",
    title: "Concurso de poesia",
    shortTitle: "Poesia",
    kind: "cultura",
    period: "Premiação em 19 de setembro de 2026",
    deadline: "Inscrições até 31 de agosto",
    eyebrow: "Palavras que preservam",
    description: "Poemas autorais inspirados na riqueza natural, cultural e turística de Macacos.",
    href: "/poesia",
    form: "https://forms.gle/aixvjfBY5vY5EDi39",
    regulation: "https://drive.google.com/file/d/1STeI4EDu526yJAPJh9LUuoLMTWfN46FI/view?usp=sharing",
    accent: "#d6b36a",
    number: "03",
    image: "/assets/poesia-editorial.png",
    posterImage: "/assets/cartaz-poesia.webp",
    dateShort: "19 SET",
    kicker: "Concurso nacional",
    badges: ["11+ anos", "Duas categorias", "20 poemas finalistas"],
    overviewEyebrow: "Sobre o evento",
    overviewTitle: "Toda geração tem uma voz.",
    overviewText: "Transforme sentimentos em versos e celebre a beleza natural, cultural e turística de Macacos.",
    bodyParagraphs: [
      "O concurso convida crianças, jovens e adultos de todo o Brasil a expressarem sua criatividade por meio de um poema autoral e inédito, em prosa ou verso, com o tema “Macacos: um tesouro natural, cultural e turístico”.",
      "Os 20 poemas finalistas serão publicados no livro oficial do projeto, expostos para votação popular e concorrerão à premiação.",
    ],
    facts: ["Categoria infantojuvenil: 11 a 17 anos.", "Categoria adulto: 18 anos ou mais.", "Um poema inédito por participante.", "Participação aberta a residentes de todo o Brasil."],
    featureCards: [
      { value: "11–17", label: "Categoria I", title: "Infantojuvenil", text: "Participação com autorização assinada pelo responsável legal." },
      { value: "18+", label: "Categoria II", title: "Adulto", text: "Aberto a participantes residentes em qualquer região do Brasil." },
    ],
    schedule: [
      { date: "01/07 a 31/08", title: "Inscrições", place: "Online", time: "Gratuitas", description: "Envio de um poema inédito conforme o regulamento." },
      { date: "01 a 10/09", title: "Seleção", place: "Comissão avaliadora", time: "10 dias", description: "Seleção dos vinte poemas finalistas." },
      { date: "12 a 19/09", title: "Exposição e votação", place: "Macacos", time: "Votação popular", description: "Leitura pública dos trabalhos finalistas." },
      { date: "19/09", title: "Premiação", place: "Recanto do Suíço", time: "13h", description: "Cerimônia com Beatriz Myrrha e Duo Dama-Triz." },
    ],
    prizes: [{ place: "1º", reward: "Notebook 2 em 1" }, { place: "2º", reward: "Tablet Redmi Pad 2" }, { place: "3º", reward: "Samsung Galaxy A26" }],
    extraLinks: [
      { label: "Baixar autorização — Anexo I", url: "https://docs.google.com/document/d/1xD2tcRmIWEhsWLTMZp3Qv-LvG-chk04WvcImRXyDmzo/edit?usp=sharing" },
      { label: "Ingresso gratuito — Encerramento da Poesia", url: "https://www.sympla.com.br/evento/encerramento-do-concurso-de-poesia-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3474005?share_id=copiarlink" },
    ],
  },
  {
    slug: "cancao",
    title: "Festival da canção",
    shortTitle: "Canção",
    kind: "cultura",
    period: "26 e 27 de setembro de 2026",
    deadline: "Inscrições até 17 de agosto",
    eyebrow: "R$ 10 mil em prêmios",
    description: "Canções autorais de todo o Brasil em uma celebração da música, da cultura e de novos artistas.",
    href: "/cancao",
    form: "https://forms.gle/V5omfRj9fe1ud2sK8",
    regulation: "https://drive.google.com/file/d/1yAfp_g1WvxRugEckBE1udECVtIZxC52Y/view?usp=sharing",
    accent: "#d38a67",
    number: "04",
    image: "/assets/cancao-editorial.png",
    posterImage: "/assets/cartaz-cancao.webp",
    dateShort: "26 SET",
    kicker: "Festival da canção",
    badges: ["18+ anos", "Canção inédita", "Participação nacional"],
    overviewEyebrow: "Sobre o evento",
    overviewTitle: "Uma canção autoral pode ganhar o palco.",
    overviewText: "Um festival para valorizar a produção musical brasileira, incentivar novos artistas e celebrar a cultura em Macacos.",
    bodyParagraphs: [
      "Compositores, músicos ou intérpretes com 18 anos ou mais e residentes em qualquer região do Brasil podem inscrever uma única canção autoral e inédita, com temática livre.",
      "Serão selecionadas 20 canções para a semifinal. Dez seguirão para a grande final, quando serão conhecidas as três vencedoras. As apresentações poderão contar com até quatro pessoas no palco, respeitando o arranjo enviado na inscrição.",
    ],
    facts: ["Uma canção autoral e inédita por participante.", "Até quatro pessoas no palco.", "20 canções na semifinal e 10 na final.", "Participação aberta a todo o Brasil."],
    featureCards: [
      { value: "20", label: "Selecionadas", title: "Semifinal", text: "26 de setembro, às 13h, com Lumineiro e Banda Dona Zilda." },
      { value: "10", label: "Finalistas", title: "Grande final", text: "27 de setembro, às 13h, com show de Júlia Rocha." },
      { value: "03", label: "Premiadas", title: "Novos talentos", text: "Reconhecimento para canções autorais de todo o país." },
    ],
    schedule: [
      { date: "01/07 a 17/08", title: "Inscrições", place: "Online", time: "Gratuitas", description: "Envio da canção e dos documentos exigidos no regulamento." },
      { date: "01/09", title: "Semifinalistas", place: "Online", time: "Divulgação", description: "Anúncio das vinte canções selecionadas." },
      { date: "26/09", title: "Semifinal", place: "Recanto do Suíço", time: "13h", description: "Vinte canções e shows de Lumineiro e Banda Dona Zilda." },
      { date: "27/09", title: "Grande final", place: "Recanto do Suíço", time: "13h", description: "Dez finalistas, premiação e show de Júlia Rocha." },
    ],
    prizes: [{ place: "1º", reward: "R$ 5.000" }, { place: "2º", reward: "R$ 3.000" }, { place: "3º", reward: "R$ 2.000" }],
    extraLinks: [
      { label: "Baixar Anexo II", url: "https://docs.google.com/document/d/14Q3EKwP-LyGJPsyFQ2W_OmKzWyyHeoYDml_49Ex4W_Q/edit?usp=sharing" },
      { label: "Ingresso — Semifinal do Festival", url: "https://www.sympla.com.br/evento/semifinal-do-festival-da-cancao-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3474131?share_id=copiarlink" },
      { label: "Ingresso — Grande Final", url: "https://www.sympla.com.br/evento/final-do-festival-da-cancao-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3474485?share_id=copiarlink" },
    ],
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
  {n:"00",slug:"preparacao",tag:"Preparação",title:"Antes do primeiro passo",date:"Julho de 2026",publishedAt:"2026-07-01T12:00:00-03:00",image:"/assets/igreja-macacos-hero.png",text:"O território, a equipe e os bastidores que preparam o início do projeto.",bodyParagraphs:[],gallery:[],status:"Em breve",videoUrl:""},
  {n:"01",slug:"abertura",tag:"Abertura",title:"O dia em que tudo começa",date:"1º de agosto",publishedAt:"2026-08-01T13:00:00-03:00",image:"/assets/caminhadas-editorial.png",text:"Cerimônia, encontro na igreja e os primeiros registros da caminhada ao Marumbé.",bodyParagraphs:[],gallery:[],status:"Em breve",videoUrl:""},
  {n:"02",slug:"olhares",tag:"Olhares",title:"Macacos por novos ângulos",date:"15 e 16 de agosto",publishedAt:"2026-08-15T09:00:00-03:00",image:"/assets/fotografia-editorial.png",text:"Aulas, saídas fotográficas, depoimentos e as imagens escolhidas pelos participantes.",bodyParagraphs:[],gallery:[],status:"Em breve",videoUrl:""},
  {n:"03",slug:"vozes",tag:"Vozes",title:"Versos e canções do território",date:"Setembro de 2026",publishedAt:"2026-09-19T13:00:00-03:00",image:"/assets/cancao-editorial.png",text:"Finalistas, apresentações, bastidores e os melhores momentos dos encerramentos.",bodyParagraphs:[],gallery:[],status:"Em breve",videoUrl:""},
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

export const featuredVlog: FeaturedVlog = {
  active: true,
  eyebrow: "Formato pensado para vídeo",
  title: "Um vlog dentro\ndo próprio site.",
  description: "O vídeo pode ficar em destaque, acompanhado por galeria, roteiro do dia, depoimentos e links para compartilhar.",
  image: siteSettings.churchHeroImage,
  imageAlt: "Igreja de São Sebastião das Águas Claras",
  instagramUrl: siteSettings.instagramUrl,
  label: "VLOG 01",
  status: "Em breve",
  highlights: ["Vídeo principal", "Galeria de fotos", "Resumo do dia", "Depoimentos"],
};

export const aboutContent: AboutContent = {
  eyebrow: "São Sebastião das Águas Claras",
  title: "Um território que inspira encontros.",
  lead: "Natureza, cultura, hospitalidade e memória se encontram em Macacos, distrito de Nova Lima, Minas Gerais.",
  projectTitle: "O projeto",
  projectParagraphs: [
    "Macacos: Um Tesouro Natural, Cultural e Turístico é uma iniciativa da Associação Turística em Macacos (TurMa), criada para valorizar, preservar e divulgar as riquezas naturais, culturais, históricas e turísticas de São Sebastião das Águas Claras.",
    "O projeto fortalece a conexão entre moradores, visitantes e o território por meio de atividades gratuitas: caminhadas ecoturísticas, workshop e concurso de fotografia, concurso de poesia, festival da canção e apresentações culturais.",
    "Mais do que promover eventos, a iniciativa desperta pertencimento e incentiva a conservação das paisagens, tradições, histórias e memórias que fazem de Macacos um destino único em Minas Gerais.",
  ],
  territoryTitle: "Macacos",
  territoryParagraphs: [
    "São Sebastião das Águas Claras, mais conhecido como Macacos, é um distrito de Nova Lima. A cerca de 20 km de Belo Horizonte, é um lugar onde natureza, cultura e hospitalidade mineira criam experiências inesquecíveis.",
    "Cercado por montanhas, cachoeiras, trilhas e paisagens exuberantes, o distrito se tornou um dos destinos mais encantadores da região metropolitana, com hospedagens, bares e restaurantes.",
  ],
  associationTitle: "TurMa",
  associationParagraphs: [
    "A Associação Turística em Macacos foi fundada em 2018 por empresários, empreendedores e moradores locais. A associação promove o turismo sustentável, fortalece a economia local, preserva o meio ambiente e mantém vivas as tradições da comunidade.",
    "Entre suas iniciativas está este projeto, que reúne ações culturais, ambientais e educativas para destacar a história, a arte, a natureza e as pessoas que fazem de Macacos um destino único.",
    "Dessa visão nasceu também o EcoParque Macacos, projeto estruturante que reúne conservação ambiental, educação, pesquisa, cultura, esporte, lazer e turismo de natureza em áreas da Mata Atlântica e do Cerrado.",
  ],
};

export const defaultSiteContent: SiteContent = {
  settings: siteSettings,
  about: aboutContent,
  experiences,
  agenda: agendaDays,
  diary: diaryChapters,
  featuredVlog,
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Eventos", href: "/eventos" },
  { label: "Agenda", href: "/agenda" },
  { label: "Diário", href: "/diario" },
  { label: "O projeto", href: "/sobre" },
];
