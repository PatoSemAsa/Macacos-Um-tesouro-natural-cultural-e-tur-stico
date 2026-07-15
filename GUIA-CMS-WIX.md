# Guia do Wix CMS — Projeto Macacos

Este guia transforma os principais textos, datas, imagens e links do site em conteúdo editável pelo painel do Wix. O desenho e a estrutura das páginas continuam protegidos no código.

## O que poderá ser editado

- Título, chamada, descrição e contagem regressiva da página inicial.
- Link e nome do Instagram, textos do rodapé e localização.
- Imagens da igreja na página inicial e na página do projeto.
- As quatro experiências: textos, datas, imagens, cores, formulários e regulamentos.
- Toda a agenda, incluindo horários, locais e atividades.
- Capítulos do diário, fotos, status e links de vídeo.

## Antes de começar

Entre no painel do mesmo projeto Headless usado para publicar o site. Abra **CMS** ou **Gerenciador de Conteúdo**. Não é necessário abrir o editor visual antigo.

Em todas as coleções abaixo, configure a permissão assim:

- Visualizar/ler conteúdo: **Todos**.
- Adicionar, atualizar e excluir: **somente administradores**.

Os nomes em `código` são os **IDs dos campos**. Eles precisam ser copiados exatamente, respeitando letras maiúsculas e minúsculas.

## 1. Coleção SiteSettings

Crie uma coleção chamada **Site Settings** com o ID exato `SiteSettings`. Ela terá somente uma linha.

| Nome visível | ID do campo | Tipo |
|---|---|---|
| Título | `title` | Texto — campo principal que já vem criado |
| Período | `seasonLabel` | Texto |
| Título — começo | `heroTitleStart` | Texto |
| Título — destaque | `heroTitleHighlight` | Texto |
| Título — final | `heroTitleEnd` | Texto |
| Descrição principal | `heroDescription` | Texto |
| Data da contagem | `countdownDate` | Data e hora |
| Rótulo do projeto | `introLabel` | Texto |
| Texto do projeto | `introText` | Texto |
| Link do Instagram | `instagramUrl` | URL |
| Nome do Instagram | `instagramLabel` | Texto |
| Texto do rodapé | `footerDescription` | Texto |
| Nome do local | `locationName` | Texto |
| Cidade e estado | `locationRegion` | Texto |
| Imagem da igreja — capa | `churchHeroImage` | Imagem |
| Endereço alternativo da capa | `churchHeroImageUrl` | Texto |
| Imagem da igreja — sobre | `churchAboutImage` | Imagem |
| Endereço alternativo — sobre | `churchAboutImageUrl` | Texto |
| Link do mapa | `mapUrl` | URL |

Depois, importe `cms/site-settings.csv` e confira se foi criada apenas uma linha.

## 2. Coleção Experiences

Crie uma coleção chamada **Experiences** com o ID exato `Experiences`.

| Nome visível | ID do campo | Tipo |
|---|---|---|
| Título | `title` | Texto — campo principal |
| Identificador | `slug` | Texto |
| Título curto | `shortTitle` | Texto |
| Tipo | `kind` | Texto |
| Período | `period` | Texto |
| Prazo | `deadline` | Texto |
| Chamada pequena | `eyebrow` | Texto |
| Descrição | `description` | Texto |
| Página interna | `pageUrl` | Texto |
| Formulário | `formUrl` | URL |
| Regulamento | `regulationUrl` | URL |
| Cor | `accent` | Texto |
| Número | `number` | Texto |
| Imagem | `image` | Imagem |
| Endereço alternativo da imagem | `imageUrl` | Texto |
| Data curta | `dateShort` | Texto |
| Ordem | `order` | Número |
| Ativo | `active` | Booleano |

Importe `cms/experiences.csv`. Não altere o campo `slug`. No campo `kind`, use somente `natureza`, `arte` ou `cultura`.

## 3. Coleção Agenda

Crie uma coleção chamada **Agenda** com o ID exato `Agenda`.

| Nome visível | ID do campo | Tipo |
|---|---|---|
| Título | `title` | Texto — campo principal |
| Identificador | `idSlug` | Texto |
| Data exibida | `dateLabel` | Texto |
| Categoria | `category` | Texto |
| Imagem | `image` | Imagem |
| Endereço alternativo da imagem | `imageUrl` | Texto |
| Local | `place` | Texto |
| Horário 1 | `time1` | Texto |
| Atividade 1 | `activity1` | Texto |
| Descrição 1 | `description1` | Texto |
| Horário 2 | `time2` | Texto |
| Atividade 2 | `activity2` | Texto |
| Descrição 2 | `description2` | Texto |
| Página da experiência | `experienceLink` | Texto |
| Ordem | `order` | Número |
| Ativo | `active` | Booleano |

Importe `cms/agenda.csv`. Use o campo `order` para mudar a ordem das datas.

## 4. Coleção Diary

Crie uma coleção chamada **Diary** com o ID exato `Diary`.

| Nome visível | ID do campo | Tipo |
|---|---|---|
| Título | `title` | Texto — campo principal |
| Número | `number` | Texto |
| Categoria | `tag` | Texto |
| Data exibida | `dateLabel` | Texto |
| Imagem | `image` | Imagem |
| Endereço alternativo da imagem | `imageUrl` | Texto |
| Descrição | `description` | Texto |
| Status | `status` | Texto |
| Link do vídeo | `videoUrl` | URL |
| Ordem | `order` | Número |
| Ativo | `active` | Booleano |

Importe `cms/diary.csv`. Quando houver um vídeo, cole o link em `videoUrl`; o botão **Assistir capítulo** aparecerá automaticamente.

## Como trocar uma imagem

1. Abra a coleção desejada.
2. Clique na célula do campo `image`, `churchHeroImage` ou `churchAboutImage`.
3. Envie a nova foto para o Gerenciador de Mídia do Wix.
4. Escolha a imagem e salve.

O campo de imagem tem prioridade sobre o campo terminado em `Url`. Os endereços alternativos existem apenas para manter as imagens originais enquanto o CMS é configurado.

## Como publicar uma alteração

1. Salve a alteração na coleção.
2. Se o painel mostrar **Sandbox**, use **Sincronizar com conteúdo online**.
3. Clique em **Publicar** quando o Wix solicitar.
4. Recarregue o endereço do site.

Não é necessário executar `npm`, `git` ou editar código para essas mudanças de conteúdo.

## Se alguma coisa ficar vazia

Confira estes três pontos:

1. O ID da coleção está exatamente como neste guia.
2. A permissão de leitura está definida como **Todos**.
3. O conteúdo foi sincronizado/publicado no ambiente online.

Se uma coleção não puder ser lida, o site usa automaticamente o conteúdo original e não sai do ar.
