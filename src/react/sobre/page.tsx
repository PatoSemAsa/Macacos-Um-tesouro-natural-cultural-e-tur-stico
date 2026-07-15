import Link from "next/link";
import { Innovation, SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";

export default function SobrePage() {
  const { settings } = useSiteContent();
  return <main>
    <div className="inner-header"><SiteHeader active="/sobre" settings={settings} /></div>
    <section className="about-hero"><div><span className="eyebrow light">{settings.locationName}</span><h1>Um território que inspira encontros.</h1><p>{settings.heroDescription}</p></div><img src={settings.churchAboutImage} alt="Igreja de São Sebastião das Águas Claras" /></section>
    <section className="section">
      <div className="section-heading split"><div><span className="eyebrow">O propósito</span><h2>Preservar também<br />é compartilhar.</h2></div><p>O projeto cria experiências gratuitas e acessíveis para aproximar moradores, visitantes, artistas e paisagens.</p></div>
      <div className="pillars"><article><b>01</b><h3>Natural</h3><p>Trilhas, cachoeiras e mirantes vividos com orientação e cuidado.</p></article><article><b>02</b><h3>Cultural</h3><p>Poesia, música e fotografia como registro vivo da identidade local.</p></article><article><b>03</b><h3>Turístico</h3><p>Experiências que fortalecem Macacos como destino responsável.</p></article></div>
    </section>
    <section className="location-section"><div><span className="eyebrow light">Onde acontece</span><h2>A cerca de 30 km<br />de Belo Horizonte.</h2><p>{settings.locationName}, {settings.locationRegion}.</p><a className="button blue" href={settings.mapUrl} target="_blank" rel="noreferrer">Abrir no mapa ↗</a></div><div className="map-art"><span>MINAS GERAIS</span><b>Macacos</b><i /></div></section>
    <section className="section small-innovations"><Innovation number="NOVO" title="Mapa de experiências" text="A aba pode reunir trilhas, pontos turísticos e locais dos eventos em um mapa interativo de Macacos." /><Innovation number="NOVO" title="Memória do projeto" text="Depois dos eventos, fotos, poemas e músicas podem formar um acervo digital permanente e pesquisável." /></section>
    <section className="final-cta"><span>Pronto para viver Macacos?</span><h2>Encontre a experiência<br />que combina com você.</h2><Link className="button blue" href="/eventos">Explorar eventos ↗</Link></section>
    <SiteFooter settings={settings} />
  </main>;
}
