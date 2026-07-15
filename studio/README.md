# Painel de conteúdo — Macacos

Este painel permite alterar textos, imagens, agenda, eventos e publicações diárias sem editar o código do site.

## Primeira ativação

1. Crie um projeto gratuito em https://www.sanity.io/manage.
2. Copie `.env.example` para `.env.local` e preencha o `projectId` do seu projeto.
3. Na raiz do repositório, copie também `.env.example` para `.env.local` e use o mesmo `projectId`.
4. Entre na sua conta com `npx sanity login` dentro da pasta `studio`.
5. Execute `npm run seed` nesta pasta para levar o conteúdo atual ao painel.
6. Execute `npm run dev` para abrir o editor local.
7. Execute `npm run deploy` para publicar o painel em um endereço próprio do Sanity.

As imagens locais são mantidas como segurança na primeira importação. Depois, abra cada conteúdo no painel e envie as imagens originais pelo campo de upload.
