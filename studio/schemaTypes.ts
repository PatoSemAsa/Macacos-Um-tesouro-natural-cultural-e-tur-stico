import { defineArrayMember, defineField, defineType } from "sanity";

const contentCard = defineType({
  name: "contentCard",
  title: "Cartão de destaque",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Número ou data em destaque", type: "string" }),
    defineField({ name: "label", title: "Etiqueta", type: "string" }),
    defineField({ name: "title", title: "Título", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "text", title: "Descrição", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "label" } },
});

const scheduleEntry = defineType({
  name: "scheduleEntry",
  title: "Etapa do cronograma",
  type: "object",
  fields: [
    defineField({ name: "date", title: "Data ou período", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Título", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "place", title: "Local", type: "string" }),
    defineField({ name: "time", title: "Horário ou observação curta", type: "string" }),
    defineField({ name: "description", title: "Descrição", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "date" } },
});

const prize = defineType({
  name: "prize",
  title: "Prêmio",
  type: "object",
  fields: [
    defineField({ name: "place", title: "Colocação", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "reward", title: "Premiação", type: "string", validation: (Rule) => Rule.required() }),
  ],
  preview: { select: { title: "reward", subtitle: "place" } },
});

const contentLink = defineType({
  name: "contentLink",
  title: "Link útil",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Texto do botão", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "url", title: "Endereço", type: "url", validation: (Rule) => Rule.required().uri({ scheme: ["http", "https"] }) }),
  ],
  preview: { select: { title: "label", subtitle: "url" } },
});

const agendaActivity = defineType({
  name: "agendaActivity",
  title: "Atividade do dia",
  type: "object",
  fields: [
    defineField({ name: "time", title: "Horário", type: "string" }),
    defineField({ name: "title", title: "Atividade", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "text", title: "Descrição", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "time" } },
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Configurações do site",
  type: "document",
  groups: [
    { name: "home", title: "Página inicial", default: true },
    { name: "contact", title: "Contato e rodapé" },
    { name: "images", title: "Imagens principais" },
  ],
  fields: [
    defineField({ name: "seasonLabel", title: "Temporada", type: "string", group: "home" }),
    defineField({ name: "heroTitleStart", title: "Título — primeira linha", type: "string", group: "home" }),
    defineField({ name: "heroTitleHighlight", title: "Título — trecho colorido", type: "string", group: "home" }),
    defineField({ name: "heroTitleEnd", title: "Título — última linha", type: "string", group: "home" }),
    defineField({ name: "heroDescription", title: "Texto principal", type: "text", rows: 3, group: "home" }),
    defineField({ name: "countdownDate", title: "Data da contagem regressiva", type: "datetime", group: "home" }),
    defineField({ name: "introLabel", title: "Etiqueta da apresentação", type: "string", group: "home" }),
    defineField({ name: "introText", title: "Texto de apresentação", type: "text", rows: 4, group: "home" }),
    defineField({ name: "instagramUrl", title: "Link do Instagram", type: "url", group: "contact" }),
    defineField({ name: "instagramLabel", title: "Nome exibido do Instagram", type: "string", group: "contact" }),
    defineField({ name: "footerDescription", title: "Descrição do rodapé", type: "text", rows: 3, group: "contact" }),
    defineField({ name: "locationName", title: "Nome do local", type: "string", group: "contact" }),
    defineField({ name: "locationRegion", title: "Cidade e estado", type: "string", group: "contact" }),
    defineField({ name: "mapUrl", title: "Link do mapa", type: "url", group: "contact" }),
    defineField({ name: "churchHeroImage", title: "Imagem da igreja — início", type: "image", options: { hotspot: true }, group: "images" }),
    defineField({ name: "churchHeroImageUrl", title: "URL alternativa da imagem inicial", type: "string", description: "Use apenas durante a migração.", group: "images" }),
    defineField({ name: "churchAboutImage", title: "Imagem da igreja — sobre", type: "image", options: { hotspot: true }, group: "images" }),
    defineField({ name: "churchAboutImageUrl", title: "URL alternativa da imagem sobre", type: "string", description: "Use apenas durante a migração.", group: "images" }),
  ],
  preview: { prepare: () => ({ title: "Configurações gerais", subtitle: "Página inicial, contato e imagens" }) },
});

const aboutPage = defineType({
  name: "aboutPage",
  title: "Sobre o projeto",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Etiqueta", type: "string" }),
    defineField({ name: "title", title: "Título principal", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "lead", title: "Apresentação", type: "text", rows: 3 }),
    defineField({ name: "projectTitle", title: "Título — O projeto", type: "string" }),
    defineField({ name: "projectParagraphs", title: "Textos — O projeto", type: "array", of: [defineArrayMember({ type: "text", rows: 4 })] }),
    defineField({ name: "territoryTitle", title: "Título — Macacos", type: "string" }),
    defineField({ name: "territoryParagraphs", title: "Textos — Macacos", type: "array", of: [defineArrayMember({ type: "text", rows: 4 })] }),
    defineField({ name: "associationTitle", title: "Título — TurMa", type: "string" }),
    defineField({ name: "associationParagraphs", title: "Textos — TurMa", type: "array", of: [defineArrayMember({ type: "text", rows: 4 })] }),
  ],
  preview: { prepare: () => ({ title: "Sobre o projeto", subtitle: "Projeto, território e TurMa" }) },
});

const experience = defineType({
  name: "experience",
  title: "Evento",
  type: "document",
  groups: [
    { name: "identity", title: "Identificação", default: true },
    { name: "card", title: "Cartão e capa" },
    { name: "content", title: "Conteúdo completo" },
    { name: "links", title: "Inscrição e links" },
  ],
  fields: [
    defineField({ name: "title", title: "Nome completo", type: "string", validation: (Rule) => Rule.required(), group: "identity" }),
    defineField({ name: "slug", title: "Identificador", type: "slug", options: { source: "title", maxLength: 80 }, validation: (Rule) => Rule.required(), group: "identity" }),
    defineField({ name: "shortTitle", title: "Nome curto", type: "string", group: "identity" }),
    defineField({ name: "kind", title: "Categoria", type: "string", options: { list: [{ title: "Natureza", value: "natureza" }, { title: "Arte", value: "arte" }, { title: "Cultura", value: "cultura" }], layout: "radio" }, group: "identity" }),
    defineField({ name: "active", title: "Mostrar no site", type: "boolean", initialValue: true, group: "identity" }),
    defineField({ name: "order", title: "Ordem", type: "number", initialValue: 1, group: "identity" }),
    defineField({ name: "coverImage", title: "Imagem de capa", type: "image", options: { hotspot: true }, group: "card" }),
    defineField({ name: "imageUrl", title: "URL alternativa da imagem", type: "string", description: "Use apenas durante a migração.", group: "card" }),
    defineField({ name: "posterImage", title: "Cartaz oficial", type: "image", options: { hotspot: true }, description: "Material oficial exibido dentro da página do evento.", group: "card" }),
    defineField({ name: "posterImageUrl", title: "URL alternativa do cartaz", type: "string", description: "Use apenas durante a migração.", group: "card" }),
    defineField({ name: "period", title: "Período", type: "string", group: "card" }),
    defineField({ name: "deadline", title: "Prazo", type: "string", group: "card" }),
    defineField({ name: "eyebrow", title: "Etiqueta do cartão", type: "string", group: "card" }),
    defineField({ name: "description", title: "Resumo", type: "text", rows: 3, group: "card" }),
    defineField({ name: "accent", title: "Cor do evento (hexadecimal)", type: "string", description: "Exemplo: #9dc7a5", validation: (Rule) => Rule.regex(/^#[0-9a-fA-F]{6}$/, { name: "cor hexadecimal" }).warning("Use o formato #RRGGBB"), group: "card" }),
    defineField({ name: "number", title: "Número do cartão", type: "string", group: "card" }),
    defineField({ name: "dateShort", title: "Data curta", type: "string", group: "card" }),
    defineField({ name: "kicker", title: "Etiqueta da página", type: "string", group: "content" }),
    defineField({ name: "badges", title: "Informações rápidas", type: "array", of: [defineArrayMember({ type: "string" })], group: "content" }),
    defineField({ name: "overviewEyebrow", title: "Etiqueta da apresentação", type: "string", group: "content" }),
    defineField({ name: "overviewTitle", title: "Título da apresentação", type: "string", group: "content" }),
    defineField({ name: "overviewText", title: "Resumo da apresentação", type: "text", rows: 3, group: "content" }),
    defineField({ name: "bodyParagraphs", title: "Textos completos", type: "array", of: [defineArrayMember({ type: "text", rows: 5 })], group: "content" }),
    defineField({ name: "facts", title: "Regras e informações importantes", type: "array", of: [defineArrayMember({ type: "string" })], group: "content" }),
    defineField({ name: "featureCards", title: "Cartões de destaque", type: "array", of: [defineArrayMember({ type: "contentCard" })], group: "content" }),
    defineField({ name: "schedule", title: "Cronograma completo", type: "array", of: [defineArrayMember({ type: "scheduleEntry" })], group: "content" }),
    defineField({ name: "prizes", title: "Premiações", type: "array", of: [defineArrayMember({ type: "prize" })], group: "content" }),
    defineField({ name: "pageUrl", title: "Endereço interno da página", type: "string", description: "Exemplo: /fotografia", group: "links" }),
    defineField({ name: "formUrl", title: "Link de inscrição", type: "url", group: "links" }),
    defineField({ name: "regulationUrl", title: "Link do regulamento", type: "url", group: "links" }),
    defineField({ name: "extraLinks", title: "Outros links e ingressos", type: "array", of: [defineArrayMember({ type: "contentLink" })], group: "links" }),
  ],
  preview: { select: { title: "title", subtitle: "period", media: "coverImage" } },
});

const agendaEntry = defineType({
  name: "agendaEntry",
  title: "Item da agenda",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título do dia", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Identificador", type: "slug", options: { source: "title", maxLength: 80 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "dateLabel", title: "Data exibida", type: "string", description: "Exemplo: 15–16 AGO", validation: (Rule) => Rule.required() }),
    defineField({ name: "category", title: "Etiqueta", type: "string" }),
    defineField({ name: "place", title: "Local", type: "string" }),
    defineField({ name: "coverImage", title: "Imagem", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageUrl", title: "URL alternativa da imagem", type: "string", description: "Use apenas durante a migração." }),
    defineField({ name: "activities", title: "Atividades e horários", type: "array", of: [defineArrayMember({ type: "agendaActivity" })], validation: (Rule) => Rule.min(1) }),
    defineField({ name: "experience", title: "Evento relacionado", type: "reference", to: [{ type: "experience" }] }),
    defineField({ name: "experienceLink", title: "Link alternativo", type: "string", description: "Exemplo: /caminhadas" }),
    defineField({ name: "active", title: "Mostrar no site", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Ordem", type: "number", initialValue: 1 }),
  ],
  preview: { select: { title: "title", subtitle: "dateLabel", media: "coverImage" } },
});

const diaryPost = defineType({
  name: "diaryPost",
  title: "Capítulo do diário",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Endereço", type: "slug", options: { source: "title", maxLength: 80 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "number", title: "Número do capítulo", type: "string", description: "Exemplo: 04" }),
    defineField({ name: "tag", title: "Categoria", type: "string", description: "Exemplo: Bastidores" }),
    defineField({ name: "dateLabel", title: "Data exibida", type: "string" }),
    defineField({ name: "publishedAt", title: "Data de publicação", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({ name: "coverImage", title: "Foto de capa", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageUrl", title: "URL alternativa da imagem", type: "string", description: "Use apenas durante a migração." }),
    defineField({ name: "description", title: "Resumo", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: "bodyParagraphs", title: "Texto completo", type: "array", of: [defineArrayMember({ type: "text", rows: 5 })] }),
    defineField({ name: "gallery", title: "Galeria de fotos", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })], options: { layout: "grid" } }),
    defineField({ name: "videoUrl", title: "Link do vídeo", type: "url" }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["Em breve", "Publicado", "Atualizado"] }, initialValue: "Publicado" }),
    defineField({ name: "active", title: "Mostrar no site", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Ordem", type: "number", initialValue: 1 }),
  ],
  preview: { select: { title: "title", subtitle: "dateLabel", media: "coverImage" } },
});

const featuredVlog = defineType({
  name: "featuredVlog",
  title: "Vlog em destaque",
  type: "document",
  initialValue: {
    active: true,
    eyebrow: "Formato pensado para vídeo",
    title: "Um vlog dentro\ndo próprio site.",
    description: "O vídeo pode ficar em destaque, acompanhado por galeria, roteiro do dia, depoimentos e links para compartilhar.",
    imageAlt: "Igreja de São Sebastião das Águas Claras",
    label: "VLOG 01",
    status: "Em breve",
    highlights: ["Vídeo principal", "Galeria de fotos", "Resumo do dia", "Depoimentos"],
  },
  groups: [
    { name: "content", title: "Textos", default: true },
    { name: "media", title: "Imagem e Instagram" },
  ],
  fields: [
    defineField({ name: "active", title: "Mostrar esta seção no site", type: "boolean", initialValue: true, group: "content" }),
    defineField({ name: "eyebrow", title: "Etiqueta acima do título", type: "string", group: "content" }),
    defineField({ name: "title", title: "Título", type: "text", rows: 2, validation: (Rule) => Rule.required(), group: "content", description: "Você pode apertar Enter para quebrar o título em duas linhas." }),
    defineField({ name: "description", title: "Texto de apresentação", type: "text", rows: 4, group: "content" }),
    defineField({ name: "label", title: "Identificação sobre a imagem", type: "string", description: "Exemplo: VLOG 01", group: "content" }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["Em breve", "Publicado", "Atualizado"] }, initialValue: "Em breve", group: "content" }),
    defineField({ name: "highlights", title: "Itens abaixo do texto", type: "array", of: [defineArrayMember({ type: "string" })], validation: (Rule) => Rule.max(4), group: "content" }),
    defineField({ name: "coverImage", title: "Imagem clicável do vlog", type: "image", options: { hotspot: true }, group: "media" }),
    defineField({ name: "imageAlt", title: "Descrição da imagem", type: "string", description: "Explique brevemente o que aparece na imagem para acessibilidade.", group: "media" }),
    defineField({ name: "instagramUrl", title: "Link do Instagram", type: "url", validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }), description: "Ao clicar na imagem ou no botão de play, este endereço será aberto. Pode ser um post, Reel ou perfil. Se ficar vazio, será usado o Instagram das configurações gerais.", group: "media" }),
    defineField({ name: "imageUrl", title: "URL alternativa da imagem", type: "string", hidden: true }),
  ],
  preview: { select: { title: "title", subtitle: "status", media: "coverImage" } },
});

export const schemaTypes = [contentCard, scheduleEntry, prize, contentLink, agendaActivity, siteSettings, aboutPage, experience, agendaEntry, diaryPost, featuredVlog];
