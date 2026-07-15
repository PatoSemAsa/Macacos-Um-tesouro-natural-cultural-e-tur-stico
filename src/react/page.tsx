import Link from "next/link";
import { Countdown, ExperienceGrid, SiteFooter, SiteHeader } from "./components";

export default function Home() {
  return (
    <main>
      <section className="atlas-hero">
        <SiteHeader active="/" />
        <div className="topo-lines" aria-hidden="true" />
        <div className="atlas-copy">
          <span className="eyebrow light">Agosto — outubro • 2026</span>
          <h1>Um território.<br /><em>Quatro jeitos</em><br />de sentir.</h1>
          <p>Caminhe, fotografe, escreva e cante. Macacos vira encontro entre natureza, memória e criação.</p>
          <div className="hero-actions">
            <Link className="button acid" href="/eventos">Escolha sua experiência <span>↗</span></Link>
            <Link className="button glass" href="/agenda">Ver agenda completa</Link>
          </div>
          <Countdown />
        </div>

        <div className="atlas-collage" aria-label="Experiências do projeto">
          <Link className="atlas-frame frame-church" href="/sobre">
            <img src="/assets/igreja-macacos-hero.png" alt="Igreja de São Sebastião das Águas Claras" />
            <span>O território</span>
          </Link>
          <Link className="atlas-frame frame-walk" href="/caminhadas">
            <img src="/assets/caminhadas-editorial.png" alt="Trilha em meio à natureza" />
            <span>Caminhar</span>
          </Link>
          <Link className="atlas-frame frame-photo" href="/fotografia">
            <img src="/assets/fotografia-editorial.png" alt="Experiência de fotografia" />
            <span>Olhar</span>
          </Link>
          <Link className="atlas-frame frame-art" href="/poesia">
            <img src="/assets/poesia-editorial.png" alt="Caderno e natureza" />
            <span>Criar</span>
          </Link>
          <div className="atlas-seal"><img src="/assets/logo-macacos.png" alt="Macacos — Um Tesouro Natural, Cultural e Turístico" /></div>
        </div>

        <div className="hero-ticker" aria-label="Datas em destaque">
          <span>01 AGO <b>Abertura + Marumbé</b></span><i>◆</i>
          <span>15 AGO <b>Fotografia</b></span><i>◆</i>
          <span>19 SET <b>Poesia</b></span><i>◆</i>
          <span>26 SET <b>Canção</b></span>
        </div>
      </section>

      <section className="manifesto-section">
        <span className="manifesto-index">01 / O PROJETO</span>
        <p>Não é só uma programação. É um convite para <strong>ver Macacos com outros olhos</strong> e guardar cada encontro como parte da memória do lugar.</p>
        <div className="manifesto-stats"><span><b>04</b> experiências</span><span><b>03</b> meses</span><span><b>01</b> território</span></div>
      </section>

      <section className="section experience-showcase" id="experiencias">
        <div className="section-heading split">
          <div><span className="eyebrow">Seu passaporte 2026</span><h2>Escolha como<br />você quer viver.</h2></div>
          <p>Salve seus favoritos no roteiro pessoal. Cada eixo agora tem uma imagem, uma cor e uma experiência própria.</p>
        </div>
        <ExperienceGrid />
      </section>

      <section className="day-program-section">
        <div className="day-program-visual">
          <img src="/assets/igreja-macacos-hero.png" alt="Igreja do centrinho de Macacos" />
          <div className="floating-date"><small>PRIMEIRO CAPÍTULO</small><b>01.08</b><span>sábado • 13h</span></div>
        </div>
        <div className="day-program-copy">
          <span className="eyebrow light">Programação do dia</span>
          <h2>A abertura,<br />passo a passo.</h2>
          <ol className="day-steps">
            <li><time>13h</time><div><b>Encontro no centrinho</b><span>Recepção e cerimônia em frente à igreja.</span></div></li>
            <li><time>Depois</time><div><b>Orientações da atividade</b><span>Preparação do grupo para a primeira trilha.</span></div></li>
            <li><time>Em seguida</time><div><b>Partida para o Marumbé</b><span>Primeira caminhada ecoturística.</span></div></li>
          </ol>
          <Link className="button acid" href="/agenda">Abrir agenda 2026 ↗</Link>
        </div>
      </section>

      <section className="diary-teaser">
        <div className="diary-heading"><span className="eyebrow">Diário vivo</span><h2>O site continua<br />depois do evento.</h2><p>Fotos, vídeos, bastidores e melhores momentos serão organizados em capítulos — um arquivo vivo do projeto.</p><Link className="text-link" href="/diario">Conheça o diário ↗</Link></div>
        <div className="diary-stack">
          <figure className="stack-one"><img src="/assets/caminhadas-editorial.png" alt="Natureza e caminhada" /><figcaption>Capítulo 01<br /><b>Abertura</b></figcaption></figure>
          <figure className="stack-two"><img src="/assets/fotografia-editorial.png" alt="Registro fotográfico" /><figcaption>Em breve<br /><b>Bastidores</b></figcaption></figure>
          <figure className="stack-three"><img src="/assets/cancao-editorial.png" alt="Festival da canção" /><figcaption>Em breve<br /><b>Melhores momentos</b></figcaption></figure>
        </div>
      </section>

      <section className="closing-marquee"><span>Natureza</span><i>◆</i><span>Cultura</span><i>◆</i><span>Memória</span><i>◆</i><span>Turismo</span></section>
      <SiteFooter />
    </main>
  );
}
