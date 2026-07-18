# Macacos — Um Tesouro Natural, Cultural e Turístico

Site oficial construído em **Astro + React**, com conteúdo editável no **Sanity Studio** e pronto para publicação automática na **Vercel**.

O projeto não depende do Wix.

## Como o projeto funciona

- **Site público:** páginas e identidade visual em Astro/React.
- **Painel de conteúdo:** textos, imagens, eventos, agenda e notícias no Sanity.
- **Hospedagem:** Vercel, ligada ao GitHub.
- **Atualização:** o servidor busca o conteúdo publicado antes de mostrar cada página, sem troca visível de textos.
- **Segurança:** se o Sanity estiver temporariamente indisponível, o site usa a cópia de segurança incluída no código.

## Comandos do site

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

`npm run preview` abre uma prévia local em modo de desenvolvimento. A versão publicada roda na infraestrutura da Vercel.

## Comandos do painel

```bash
npm run studio:dev
npm run studio:build
npm run studio:deploy
```

O conteúdo inicial já foi importado. Não execute `studio:seed` novamente sem necessidade, pois ele serve apenas para restaurar a base inicial.

## Endereços

- Painel de edição: <https://macacos-conteudo-585esgnn.sanity.studio/>
- Projeto Sanity: `585esgnn`
- Dataset: `production`

## Guias

- [Como editar textos, imagens e eventos](./GUIA-EDITOR-DE-CONTEUDO.md)
- [Como publicar o site na Vercel](./GUIA-PUBLICAR-VERCEL.md)
