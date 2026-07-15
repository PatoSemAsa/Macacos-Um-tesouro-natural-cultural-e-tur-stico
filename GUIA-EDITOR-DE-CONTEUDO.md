# Guia do painel de conteúdo

O site foi dividido em duas partes:

- **Site público:** continua no Wix Headless, com o mesmo visual criado em Astro/React.
- **Painel de conteúdo:** fica no Sanity Studio e serve para trocar textos, imagens, agenda, eventos e notícias.

O conteúdo é buscado quando a pessoa abre o site. Por isso, uma publicação no painel aparece sem precisar alterar arquivos ou executar um novo build.

## 1. Criar o projeto gratuito

1. Entre em https://www.sanity.io/manage.
2. Faça login usando sua conta do Google ou GitHub.
3. Clique em **Create project**.
4. Use o nome **Macacos — Conteúdo do site**.
5. Mantenha o dataset com o nome **production** e escolha a opção pública.
6. Copie o **Project ID** exibido nas configurações do projeto.

O Project ID identifica o banco de conteúdo, mas não é uma senha.

## 2. Colocar o Project ID no projeto

Na pasta principal `site-macacos-wix-astro`, crie um arquivo chamado `.env.local` com:

```env
PUBLIC_SANITY_PROJECT_ID=COLE_AQUI_O_PROJECT_ID
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-07-15
```

Na pasta `studio`, crie outro arquivo chamado `.env.local` com:

```env
SANITY_STUDIO_PROJECT_ID=COLE_AQUI_O_PROJECT_ID
SANITY_STUDIO_DATASET=production
```

Não envie esses arquivos ao GitHub. Eles já estão protegidos pelo `.gitignore`.

## 3. Instalar e entrar no painel

Abra o terminal do VS Code na pasta principal e execute, um comando de cada vez:

```powershell
npm.cmd install --legacy-peer-deps
npm.cmd --prefix studio install
cd studio
npx.cmd sanity login
npm.cmd run seed
npm.cmd run dev
```

O navegador abrirá o painel local. Na primeira execução, `seed` copia todo o conteúdo já preparado para o novo editor.

## 4. Publicar o painel de edição

Ainda dentro da pasta `studio`, execute:

```powershell
npm.cmd run deploy
```

Escolha um endereço disponível, por exemplo `macacos-conteudo`. Depois disso, o painel poderá ser aberto de qualquer computador autorizado.

## 5. Liberar o site para ler o conteúdo

No gerenciamento do projeto Sanity:

1. Abra **API**.
2. Entre em **CORS origins**.
3. Adicione `http://localhost:4321` para os testes locais.
4. Adicione o domínio do site publicado no Wix.
5. Quando `curtamacacos.com.br` estiver ligado à nova versão, adicione também `https://www.curtamacacos.com.br`.
6. Não marque a opção de credenciais; o site apenas lê conteúdo público.

## 6. Publicar uma notícia ou registro diário

1. Abra o painel.
2. Clique em **Diário e notícias**.
3. Clique no botão de criar novo item.
4. Preencha título, data, resumo e texto.
5. Envie a foto de capa e, se quiser, uma galeria ou link de vídeo.
6. Mantenha **Mostrar no site** ativado.
7. Clique em **Publish / Publicar**.

## 7. Alterar um evento

1. Abra **Experiências e eventos**.
2. Escolha Caminhadas, Fotografia, Poesia ou Canção.
3. Use as abas **Identificação**, **Cartão e capa**, **Conteúdo completo** e **Inscrição e links**.
4. Em **Cartão e capa**, você pode trocar separadamente a imagem editorial e o cartaz oficial.
5. Em **Inscrição e links**, você pode atualizar formulário, regulamento, anexos e ingressos.
6. Faça a alteração e publique.

## 8. Trocar as imagens antigas

Abra o item desejado e envie a imagem original no campo de upload. O campo “URL alternativa” existe somente para manter as imagens atuais funcionando durante a migração e pode ser deixado como está.

Os quatro cartazes recuperados do site anterior já estão incluídos e otimizados. Ao enviar uma nova versão no campo **Cartaz oficial**, ela substitui a atual sem alterar o restante da página.

## Segurança e recuperação

- A logo oficial “Macacos” permanece fixa no cabeçalho.
- TurMa continua em **Realização** e Semente + MPMG continuam em **Apoio**.
- “Curta Macacos” só aparece no endereço e no nome do Instagram.
- Se o painel ficar temporariamente indisponível, o site exibe automaticamente a cópia de segurança incluída no código.
- Mudanças de layout continuam sendo feitas no VS Code e podem ser solicitadas ao Codex.
