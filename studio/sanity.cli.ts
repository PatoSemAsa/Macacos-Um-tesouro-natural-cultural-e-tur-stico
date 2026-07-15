import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

if (!projectId) {
  throw new Error("Preencha SANITY_STUDIO_PROJECT_ID no arquivo studio/.env.local antes de iniciar o painel.");
}

export default defineCliConfig({ api: { projectId, dataset } });
