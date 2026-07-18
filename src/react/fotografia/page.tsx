import { EventEditorial, Innovation, SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";
import { defaultSiteContent, type SiteContent } from "../site-data";

export default function FotografiaPage({ content }: { content?: SiteContent }) {
  const { settings, experiences } = useSiteContent(content);
  const item = experiences.find((experience) => experience.slug === "fotografia") ?? defaultSiteContent.experiences[1];
  return <main>
    <div className="overlay-header"><SiteHeader active="/fotografia" settings={settings} /></div>
    <EventEditorial item={item} />
    <section className="section small-innovations"><Innovation number="GALERIA" title="Exposição digital" text="Quando os trabalhos forem selecionados, fotos e informações poderão ser publicadas no painel sem alterar o código." /><Innovation number="ATUALIZAÇÃO" title="Resultados no mesmo lugar" text="Finalistas, votação, avisos e premiação poderão aparecer nesta página assim que forem publicados." /></section>
    <SiteFooter settings={settings} />
  </main>;
}
