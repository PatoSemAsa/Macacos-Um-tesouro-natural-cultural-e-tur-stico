import { defineConfig } from "sanity";
import { structureTool, type StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

if (!projectId) {
  throw new Error("Preencha SANITY_STUDIO_PROJECT_ID no arquivo studio/.env.local antes de iniciar o painel.");
}

const structure = (S: StructureBuilder) => S.list().title("Conteúdo do site").items([
  S.listItem().title("Configurações do site").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
  S.listItem().title("Sobre o projeto").child(S.document().schemaType("aboutPage").documentId("aboutPage")),
  S.divider(),
  S.documentTypeListItem("experience").title("Experiências e eventos"),
  S.documentTypeListItem("agendaEntry").title("Agenda"),
  S.documentTypeListItem("diaryPost").title("Diário e notícias"),
]);

export default defineConfig({
  name: "macacos",
  title: "Macacos — Painel de conteúdo",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
