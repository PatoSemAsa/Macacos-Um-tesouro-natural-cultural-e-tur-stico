import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: vercel(),
  trailingSlash: "always",

  vite: {
    resolve: {
      alias: {
        "next/link": fileURLToPath(new URL("./src/components/Link.tsx", import.meta.url)),
      },
    },
  },

  image: {
    domains: ["cdn.sanity.io"],
  },
});
