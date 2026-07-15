import { EventEditorial, Innovation, SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";
import { defaultSiteContent } from "../site-data";

export default function CaminhadasPage() {
  const { settings, experiences } = useSiteContent();
  const item = experiences.find((experience) => experience.slug === "caminhadas") ?? defaultSiteContent.experiences[0];
  return <main>
    <div className="overlay-header"><SiteHeader active="/caminhadas" settings={settings} /></div>
    <EventEditorial item={item} />
    <section className="section small-innovations"><Innovation number="DICA" title="Prepare-se para a trilha" text="Use calçado apropriado, leve água, protetor solar, repelente e confira as orientações enviadas antes da atividade." /><Innovation number="MAPA" title="Encontre o grupo" text="Os locais e horários de encontro ficam organizados na agenda e podem ser atualizados pelo painel de conteúdo." /></section>
    <SiteFooter settings={settings} />
  </main>;
}
