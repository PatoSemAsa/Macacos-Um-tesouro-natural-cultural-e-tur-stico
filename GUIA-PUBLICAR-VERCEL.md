# Publicar o site na Vercel — passo a passo

A Vercel publica o site diretamente do GitHub. Depois da primeira configuração, cada atualização enviada ao repositório gera uma nova versão automaticamente.

## Antes de começar

Você precisa apenas de:

- sua conta do GitHub;
- acesso ao repositório do projeto;
- uma conta gratuita na Vercel.

## 1. Criar a conta

1. Abra **https://vercel.com/signup**.
2. Escolha **Continue with GitHub**.
3. Autorize a Vercel a acessar o GitHub.

## 2. Importar o projeto

1. No painel da Vercel, clique em **Add New...**.
2. Clique em **Project**.
3. Procure o repositório **Macacos-Um-tesouro-natural-cultural-e-tur-stico**.
4. Clique em **Import** ao lado dele.

## 3. Conferir a configuração

A Vercel deve reconhecer **Astro** automaticamente. Confira:

- **Framework Preset:** Astro
- **Root Directory:** deixe vazio
- **Build Command:** `npm run build`
- **Output Directory:** deixe no padrão automático da Vercel
- **Install Command:** `npm install`

Não é necessário preencher variáveis para a primeira publicação: o projeto já usa o Sanity `585esgnn` e o dataset `production` como valores padrão.

Clique em **Deploy**.

## 4. Abrir o site

Quando aparecer **Congratulations**, clique na imagem do site ou em **Visit**. A Vercel fornecerá um endereço temporário terminado em `.vercel.app`.

## 5. Conferir a edição pelo Sanity

1. Abra **https://macacos-conteudo-585esgnn.sanity.studio/**.
2. Altere um texto de teste e clique em **Publish**.
3. Atualize o site da Vercel.

O site busca o conteúdo no servidor antes de mostrar a página. Por isso, não é necessário cadastrar o endereço da Vercel no CORS do Sanity e o visitante não vê o texto antigo trocar depois que a página abre.

## 6. Ligar o domínio oficial somente depois

Só faça esta etapa depois de confirmar que a versão da Vercel está perfeita. Até lá, o site antigo continua no ar normalmente.

1. Na Vercel, abra o projeto.
2. Entre em **Settings → Domains**.
3. Adicione `curtamacacos.com.br` e `www.curtamacacos.com.br`.
4. Siga exatamente os registros DNS que a Vercel mostrar.

Alterar o domínio é a única etapa que substitui o site antigo. Importar e testar na Vercel não tira o site atual do ar.

## Atualizações futuras

- **Textos, imagens, agenda e notícias:** edite no Sanity, publique e atualize a página. Não precisa de build.
- **Layout e novas funções:** altere o projeto no GitHub. A Vercel fará o deploy automaticamente.
