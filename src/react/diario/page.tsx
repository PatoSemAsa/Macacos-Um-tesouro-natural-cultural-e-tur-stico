import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";
import { defaultSiteContent, type SiteContent } from "../site-data";

export default function DiarioPage({ content }: { content?: SiteContent }) {
  const { settings, diary: chapters, featuredVlog } = useSiteContent(content);
  const firstChapter = chapters[0] ?? defaultSiteContent.diary[0];
  const secondChapter = chapters[1] ?? defaultSiteContent.diary[1];
  return <main>
    <div className="inner-header"><SiteHeader active="/diario" settings={settings} /></div>
    <section className="diary-hero"><div><span className="eyebrow light">Diário do projeto</span><h1>O que acontece<br /><em>vira memória.</em></h1><p>Uma aba preparada para receber fotos, vídeos, vlogs, depoimentos e os melhores momentos de cada dia.</p><Link className="button acid" href="#capitulos">Ver capítulos ↓</Link></div><div className="diary-hero-film"><figure><img src={firstChapter.image} alt={firstChapter.title} /></figure><figure><img src={secondChapter.image} alt={secondChapter.title} /></figure><span>REC ● 2026</span></div></section>
    <section className="chapters-section" id="capitulos"><div className="chapters-heading"><span>CAPÍTULOS</span><p>Novos textos, fotos, galerias e vídeos podem ser publicados pelo painel de conteúdo, sem mexer no código.</p></div><div className="chapters-list">{chapters.map((chapter) => <article key={chapter.slug || chapter.n} className="chapter-card"><div className="chapter-number">{chapter.n}</div><div className="chapter-image"><img src={chapter.image} alt="" /><span>{chapter.date}</span></div><div className="chapter-copy"><small>{chapter.tag}</small><h2>{chapter.title}</h2><p>{chapter.text}</p>{chapter.bodyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{!!chapter.gallery.length && <div className="chapter-gallery">{chapter.gallery.slice(0, 4).map((image) => <img src={image} alt="" key={image} />)}</div>}{chapter.videoUrl ? <a className="soon-label" href={chapter.videoUrl} target="_blank" rel="noreferrer">Assistir capítulo ↗</a> : <span className="soon-label">{chapter.status}</span>}</div></article>)}</div></section>
    {featuredVlog.active && <section className="vlog-module"><a className="vlog-screen" href={featuredVlog.instagramUrl || settings.instagramUrl} target="_blank" rel="noreferrer" aria-label="Abrir o vlog no Instagram"><img src={featuredVlog.image} alt={featuredVlog.imageAlt} /><span className="play-button" aria-hidden="true">▶</span><small>{featuredVlog.label} • {featuredVlog.status.toUpperCase()}</small></a><div><span className="eyebrow">{featuredVlog.eyebrow}</span><h2>{featuredVlog.title}</h2><p>{featuredVlog.description}</p><ul>{featuredVlog.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></section>}
    <SiteFooter settings={settings} />
  </main>;
}
