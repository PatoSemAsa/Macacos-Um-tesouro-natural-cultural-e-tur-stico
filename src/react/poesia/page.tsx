import { EventEditorial, Innovation, SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";
import { defaultSiteContent } from "../site-data";

export default function PoesiaPage() {
  const { settings, experiences } = useSiteContent();
  const item = experiences.find((experience) => experience.slug === "poesia") ?? defaultSiteContent.experiences[2];
  return <main>
    <div className="overlay-header"><SiteHeader active="/poesia" settings={settings} /></div>
    <EventEditorial item={item} />
    <section className="section small-innovations"><Innovation number="LEITURA" title="Poemas finalistas" text="O painel está preparado para receber links e informações adicionais quando a seleção for divulgada." /><Innovation number="ACESSÍVEL" title="Conteúdo confortável" text="Textos usam contraste e tamanhos responsivos para facilitar a leitura no computador e no celular." /></section>
    <SiteFooter settings={settings} />
  </main>;
}
