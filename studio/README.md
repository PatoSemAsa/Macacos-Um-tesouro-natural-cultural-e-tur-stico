# Painel de conteúdo — Macacos

Este painel permite alterar textos, imagens, agenda, eventos e publicações diárias sem editar o código do site.

## Painel publicado

Abra: **https://macacos-conteudo-585esgnn.sanity.studio/**

O projeto já está configurado com:

- Project ID: `585esgnn`
- Dataset: `production`

## Desenvolvimento local

Na raiz do repositório:

```bash
npm run studio:dev
```

Para validar e republicar o painel:

```bash
npm run studio:build
npm run studio:deploy
```

O conteúdo inicial já foi importado. O comando de seed deve ser usado somente para restaurar a base inicial, pois pode substituir documentos conhecidos.
