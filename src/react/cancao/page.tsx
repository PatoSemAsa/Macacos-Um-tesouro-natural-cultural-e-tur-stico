import { EventEditorial, Innovation, SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";
import { defaultSiteContent } from "../site-data";

export default function CancaoPage() {
  const { settings, experiences } = useSiteContent();
  const item = experiences.find((experience) => experience.slug === "cancao") ?? defaultSiteContent.experiences[3];
  return <main>
    <div className="overlay-header"><SiteHeader active="/cancao" settings={settings} /></div>
    <EventEditorial item={item} />
    <section className="section small-innovations"><Innovation number="PALCO" title="Semifinalistas e finalistas" text="Os nomes selecionados poderão ser publicados diretamente no painel quando o resultado estiver pronto." /><Innovation number="PLAYER" title="Músicas e vídeos" text="Links autorizados de áudio e vídeo podem ser incluídos na página e no diário do projeto." /></section>
    <SiteFooter settings={settings} />
  </main>;
}
