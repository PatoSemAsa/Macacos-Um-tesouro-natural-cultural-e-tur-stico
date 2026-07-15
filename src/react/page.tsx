import Link from "next/link";
import { Countdown, ExperienceGrid, SiteFooter, SiteHeader } from "./components";
import { useSiteContent } from "./cms-client";
import { defaultSiteContent } from "./site-data";

export default function Home() {
  const { settings, experiences, agenda, diary } = useSiteContent();
  const walking = experiences.find((item) => item.slug === "caminhadas") ?? defaultSiteContent.experiences[0];
  const photography = experiences.find((item) => item.slug === "fotografia") ?? defaultSiteContent.experiences[1];
  const poetry = experiences.find((item) => item.slug === "poesia") ?? defaultSiteContent.experiences[2];
  const openingDay = agenda[0] ?? defaultSiteContent.agenda[0];
  return (
    <main>
      <section className="atlas-hero">
        <SiteHeader active="/" settings={settings} />
        <div className="topo-lines" aria-hidden="true" />
        <div className="atlas-copy">
          <span className="eyebrow light">{settings.seasonLabel}</span>
          <h1>{settings.heroTitleStart}<br /><em>{settings.heroTitleHighlight}</em><br />{settings.heroTitleEnd}</h1>
          <p>{settings.heroDescription}</p>
          <div className="hero-actions">
            <Link className="button acid" href="/eventos">Escolha sua experiência <span>↗</span></Link>
            <Link className="button glass" href="/agenda">Ver agenda completa</Link>
          </div>
          <Countdown targetDate={settings.countdownDate} />
        </div>

        <div className="atlas-collage" aria-label="Experiências do projeto">
          <Link className="atlas-frame frame-church" href="/sobre">
            <img src={settings.churchHeroImage} alt="Igreja de São Sebastião das Águas Claras" />
            <span>O território</span>
          </Link>
          <Link className="atlas-frame frame-walk" href={walking.href}>
            <img src={walking.image} alt={walking.title} />
            <span>Caminhar</span>
          </Link>
          <Link className="atlas-frame frame-photo" href={photography.href}>
            <img src={photography.image} alt={photography.title} />
            <span>Olhar</span>
          </Link>
          <Link className="atlas-frame frame-art" href={poetry.href}>
            <img src={poetry.image} alt={poetry.title} />
            <span>Criar</span>
          </Link>
          <div className="atlas-seal"><img src="/assets/logo-macacos.png" alt="Macacos — Um Tesouro Natural, Cultural e Turístico" /></div>
        </div>

        <div className="hero-ticker" aria-label="Datas em destaque">
          {agenda.slice(0, 4).map((day, index) => <span key={day.id}>{day.date} <b>{day.label}</b>{index < Math.min(agenda.length, 4) - 1 && <i>◆</i>}</span>)}
        </div>
      </section>

      <section className="manifesto-section">
        <span className="manifesto-index">{settings.introLabel}</span>
        <p>{settings.introText}</p>
        <div className="manifesto-stats"><span><b>{String(experiences.length).padStart(2, "0")}</b> experiências</span><span><b>03</b> meses</span><span><b>01</b> território</span></div>
      </section>

      <section className="section experience-showcase" id="experiencias">
        <div className="section-heading split">
          <div><span className="eyebrow">Seu passaporte 2026</span><h2>Escolha como<br />você quer viver.</h2></div>
          <p>Salve seus favoritos no roteiro pessoal. Cada eixo agora tem uma imagem, uma cor e uma experiência própria.</p>
        </div>
        <ExperienceGrid experiences={experiences} />
      </section>

      <section className="day-program-section">
        <div className="day-program-visual">
          <img src={settings.churchHeroImage} alt="Igreja do centrinho de Macacos" />
          <div className="floating-date"><small>PRIMEIRO CAPÍTULO</small><b>{openingDay.date}</b><span>{openingDay.items[0]?.time}</span></div>
        </div>
        <div className="day-program-copy">
          <span className="eyebrow light">Programação do dia</span>
          <h2>A abertura,<br />passo a passo.</h2>
          <ol className="day-steps">{openingDay.items.map((item) => <li key={item.time + item.title}><time>{item.time}</time><div><b>{item.title}</b><span>{item.text}</span></div></li>)}</ol>
          <Link className="button acid" href="/agenda">Abrir agenda 2026 ↗</Link>
        </div>
      </section>

      <section className="diary-teaser">
        <div className="diary-heading"><span className="eyebrow">Diário vivo</span><h2>O site continua<br />depois do evento.</h2><p>Fotos, vídeos, bastidores e melhores momentos serão organizados em capítulos — um arquivo vivo do projeto.</p><Link className="text-link" href="/diario">Conheça o diário ↗</Link></div>
        <div className="diary-stack">{diary.slice(0, 3).map((chapter, index) => <figure className={["stack-one", "stack-two", "stack-three"][index]} key={chapter.n}><img src={chapter.image} alt={chapter.title} /><figcaption>{chapter.status}<br /><b>{chapter.tag}</b></figcaption></figure>)}</div>
      </section>

      <section className="closing-marquee"><span>Natureza</span><i>◆</i><span>Cultura</span><i>◆</i><span>Memória</span><i>◆</i><span>Turismo</span></section>
      <SiteFooter settings={settings} />
    </main>
  );
}
