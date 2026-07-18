import { rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../.vercel/output/", import.meta.url));

// A integração da Vercel espera criar esta pasta do zero a cada build.
rmSync(outputDirectory, { recursive: true, force: true });
