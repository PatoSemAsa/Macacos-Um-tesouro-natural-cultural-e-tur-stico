"use client";

import { defaultSiteContent, type SiteContent } from "./site-data";

/**
 * Recebe o conteúdo que o servidor já carregou do Sanity. A cópia local é usada
 * somente se nenhuma informação tiver sido fornecida.
 */
export function useSiteContent(content?: SiteContent) {
  return content ?? defaultSiteContent;
}
