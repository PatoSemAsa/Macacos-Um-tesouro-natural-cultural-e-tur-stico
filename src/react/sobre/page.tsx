import Link from "next/link";
import { Innovation, SiteFooter, SiteHeader } from "../components";

export default function SobrePage() {
  return <main>
    <div className="inner-header"><SiteHeader active="/sobre" /></div>
    <section className="about-hero"><div><span className="eyebrow light">São Sebastião das Águas Claras</span><h1>Um território que inspira encontros.</h1><p>Entre agosto e outubro de 2026, arte, natureza, música, poesia e fotografia celebram Macacos e valorizam suas riquezas.</p></div><img src="/assets/igreja-macacos.webp" alt="Igreja de São Sebastião das Águas Claras" /></section>
    <section className="section">
      <div className="section-heading split"><div><span className="eyebrow">O propósito</span><h2>Preservar também<br />é compartilhar.</h2></div><p>O projeto cria experiências gratuitas e acessíveis para aproximar moradores, visitantes, artistas e paisagens.</p></div>
      <div className="pillars"><article><b>01</b><h3>Natural</h3><p>Trilhas, cachoeiras e mirantes vividos com orientação e cuidado.</p></article><article><b>02</b><h3>Cultural</h3><p>Poesia, música e fotografia como registro vivo da identidade local.</p></article><article><b>03</b><h3>Turístico</h3><p>Experiências que fortalecem Macacos como destino responsável.</p></article></div>
    </section>
    <section className="location-section"><div><span className="eyebrow light">Onde acontece</span><h2>A cerca de 30 km<br />de Belo Horizonte.</h2><p>São Sebastião das Águas Claras, distrito de Nova Lima, Minas Gerais.</p><a className="button blue" href="https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Sebasti%C3%A3o+das+%C3%81guas+Claras+Nova+Lima+MG" target="_blank" rel="noreferrer">Abrir no mapa ↗</a></div><div className="map-art"><span>MINAS GERAIS</span><b>Macacos</b><i /></div></section>
    <section className="section small-innovations"><Innovation number="NOVO" title="Mapa de experiências" text="A aba pode reunir trilhas, pontos turísticos e locais dos eventos em um mapa interativo de Macacos." /><Innovation number="NOVO" title="Memória do projeto" text="Depois dos eventos, fotos, poemas e músicas podem formar um acervo digital permanente e pesquisável." /></section>
    <section className="final-cta"><span>Pronto para viver Macacos?</span><h2>Encontre a experiência<br />que combina com você.</h2><Link className="button blue" href="/eventos">Explorar eventos ↗</Link></section>
    <SiteFooter />
  </main>;
}

