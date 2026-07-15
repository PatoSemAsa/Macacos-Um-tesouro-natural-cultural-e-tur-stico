# Macacos — Um Tesouro Natural, Cultural e Turístico

Site oficial desenvolvido em Astro 5, publicado pelo Wix Headless e preparado para edição diária pelo Sanity Studio.

## Comandos

- npm run dev — desenvolvimento local
- npm run build — validar e compilar
- npm run preview — criar uma prévia no Wix
- npm run release — publicar no Wix
- npm run studio:dev — abrir o painel de conteúdo
- npm run studio:build — validar o painel
- npm run studio:deploy — publicar o painel de edição
- npm run studio:seed — importar o conteúdo atual para o painel

## Conteúdo editável

O Sanity Studio é a fonte principal. Ele permite publicar textos, fotos, agenda, eventos e capítulos do diário sem abrir o VS Code. O Wix CMS permanece como compatibilidade temporária e o conteúdo presente no código continua sendo a cópia de segurança.

Siga o passo a passo em [GUIA-EDITOR-DE-CONTEUDO.md](./GUIA-EDITOR-DE-CONTEUDO.md).

## Compatibilidade com o Wix CMS

O site usa Wix CMS com conteúdo de segurança no próprio código. Se uma coleção estiver vazia ou ainda não existir, o site continua funcionando com os textos e imagens originais.

Siga o passo a passo em [GUIA-CMS-WIX.md](./GUIA-CMS-WIX.md). Os arquivos CSV prontos para importação estão na pasta `cms`.
