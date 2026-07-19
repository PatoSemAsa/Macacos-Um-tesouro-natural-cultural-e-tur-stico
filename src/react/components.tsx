"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { experiences as defaultExperiences, navItems, siteSettings, type Experience, type SiteSettings } from "./site-data";

export function SiteHeader({ active = "", settings = siteSettings }: { active?: string; settings?: SiteSettings }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Macacos — página inicial">
        <img src="/assets/logo-macacos.png" alt="Macacos — Um Tesouro Natural, Cultural e Turístico" />
      </Link>
      <nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">
        {navItems.map((item) => (
          <Link key={item.href} className={active === item.href ? "active" : ""} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="instagram-link" href={settings.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Instagram ${settings.instagramLabel}`}>
        <span>{settings.instagramLabel}</span><b>↗</b>
      </a>
      <button className="menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </header>
  );
}

export function SiteFooter({ settings = siteSettings }: { settings?: SiteSettings }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <img className="footer-project-logo" src="/assets/logo-macacos.png" alt="Macacos — Um Tesouro Natural, Cultural e Turístico" />
          <p>{settings.footerDescription}</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/eventos">Todos os eventos</Link>
          <Link href="/agenda">Agenda 2026</Link>
          <Link href="/diario">Diário do projeto</Link>
          <Link href="/sobre">Sobre o projeto</Link>
          <a href={settings.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className="footer-contact">
          <strong>Informações</strong>
          <p>{settings.locationName}<br />{settings.locationRegion}</p>
          <a href={settings.instagramUrl} target="_blank" rel="noreferrer">Envie uma mensagem ↗</a>
        </div>
      </div>
      <div className="support-row">
        <div className="support-group realization">
          <span>Realização</span>
          <div className="logo-card"><img src="/assets/logo-turma.png" alt="TurMa — Associação Turística de Macacos" /></div>
        </div>
        <div className="support-group">
          <span>Apoio</span>
          <div className="support-logos">
            <div className="logo-card light"><img src="/assets/logo-semente.png" alt="Semente" /></div>
            <div className="logo-card white"><img src="/assets/logo-mpmg.jpg" alt="Ministério Público do Estado de Minas Gerais" /></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><span>Projeto Macacos © 2026</span><span>Um tesouro natural, cultural e turístico</span></div>
    </footer>
  );
}

export function Countdown({ targetDate = siteSettings.countdownDate }: { targetDate?: string }) {
  const parsedTarget = new Date(targetDate).getTime();
  const target = Number.isFinite(parsedTarget) ? parsedTarget : new Date(siteSettings.countdownDate).getTime();
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 });
  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({ days: Math.floor(diff / 86400000), hours: Math.floor((diff / 3600000) % 24), minutes: Math.floor((diff / 60000) % 60) });
    };
    update();
    const id = window.setInterval(update, 60000);
    return () => window.clearInterval(id);
  }, [target]);
  return (
    <div className="countdown" aria-label="Contagem regressiva para a abertura">
      <span><b>{String(time.days).padStart(2, "0")}</b> dias</span>
      <i />
      <span><b>{String(time.hours).padStart(2, "0")}</b> horas</span>
      <i />
      <span><b>{String(time.minutes).padStart(2, "0")}</b> min</span>
    </div>
  );
}

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="experience-card" style={{ "--accent": item.accent } as React.CSSProperties}>
      <Link className="card-image" href={item.href} aria-label={`Abrir ${item.title}`}>
        <img src={item.image} alt="" />
        <span className="card-date">{item.dateShort}</span>
        <b>{item.number}</b>
      </Link>
      <div className="card-body">
        <div className="card-top"><span>{item.eyebrow}</span><PassportButton slug={item.slug} /></div>
        <h3>{item.title}</h3><p>{item.description}</p>
        <div className="card-meta"><span>{item.period}</span><span>{item.deadline}</span></div>
        <Link className="card-link" href={item.href}>Ver evento <span>↗</span></Link>
      </div>
    </article>
  );
}

export function PassportButton({ slug }: { slug: string }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const current = JSON.parse(window.localStorage.getItem("macacos-passaporte") || "[]") as string[];
    setSaved(current.includes(slug));
  }, [slug]);
  const toggle = () => {
    const current = JSON.parse(window.localStorage.getItem("macacos-passaporte") || "[]") as string[];
    const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
    window.localStorage.setItem("macacos-passaporte", JSON.stringify(next));
    setSaved(next.includes(slug));
  };
  return <button className={saved ? "passport-button saved" : "passport-button"} onClick={toggle} aria-pressed={saved} aria-label={saved ? "Remover do meu roteiro" : "Salvar no meu roteiro"}>{saved ? "✓ Salvo" : "+ Roteiro"}</button>;
}

export function ExperienceGrid({ limit, experiences = defaultExperiences }: { limit?: number; experiences?: Experience[] }) {
  return <div className="experience-grid">{experiences.slice(0, limit ?? experiences.length).map((item) => <ExperienceCard key={item.slug} item={item} />)}</div>;
}

export function DetailHero({ item, kicker, children }: { item: Experience; kicker: string; children?: React.ReactNode }) {
  return (
    <section className="detail-hero" style={{ "--accent": item.accent } as React.CSSProperties}>
      <img className="detail-hero-image" src={item.image} alt="" />
      <div className="detail-hero-bg" />
      <div className="detail-hero-content">
        <span className="eyebrow">{kicker}</span>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="detail-actions">
          {item.form && <a className="button primary" href={item.form} target="_blank" rel="noreferrer">Inscreva-se agora <span>↗</span></a>}
          {item.regulation && <a className="button ghost" href={item.regulation} target="_blank" rel="noreferrer">Ler regulamento</a>}
        </div>
        {children}
      </div>
      <div className="detail-stats"><span><small>Período</small>{item.period}</span><span><small>Prazo</small>{item.deadline}</span></div>
    </section>
  );
}

export function EventEditorial({ item }: { item: Experience }) {
  return (
    <>
      <DetailHero item={item} kicker={item.kicker}>
        {!!item.badges.length && <div className="mini-badges">{item.badges.map((badge) => <span key={badge}>{badge}</span>)}</div>}
      </DetailHero>

      <section className="section event-overview">
        <div className="section-heading split">
          <div><span className="eyebrow">{item.overviewEyebrow}</span><h2>{item.overviewTitle}</h2></div>
          <p>{item.overviewText}</p>
        </div>
        <div className="editorial-copy">
          <div>{item.bodyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          {!!item.facts.length && <ul className="editable-facts">{item.facts.map((fact) => <li key={fact}><i>✓</i><span>{fact}</span></li>)}</ul>}
        </div>
      </section>

      {item.posterImage && <section className="official-poster-section" style={{ "--accent": item.accent } as React.CSSProperties}>
        <div className="official-poster-copy">
          <span className="eyebrow">Material oficial</span>
          <h2>As informações principais<br />em um só lugar.</h2>
          <p>Este é o cartaz divulgado no projeto original. Você pode substituí-lo a qualquer momento pelo painel de conteúdo.</p>
          <div className="official-poster-actions">
            {item.form && <a className="button blue" href={item.form} target="_blank" rel="noreferrer">Fazer inscrição ↗</a>}
            {item.regulation && <a className="text-link" href={item.regulation} target="_blank" rel="noreferrer">Abrir regulamento ↗</a>}
          </div>
        </div>
        <figure><img src={item.posterImage} alt={`Cartaz oficial — ${item.title}`} loading="lazy" /></figure>
      </section>}

      {!!item.featureCards.length && <section className="section event-features">
        <div className={`editorial-card-grid cards-${Math.min(item.featureCards.length, 4)}`}>
          {item.featureCards.map((card) => <article key={`${card.label}-${card.title}`}>
            <b>{card.value}</b><span>{card.label}</span><h3>{card.title}</h3><p>{card.text}</p>
          </article>)}
        </div>
      </section>}

      {!!item.schedule.length && <section className="event-schedule-section" style={{ "--accent": item.accent } as React.CSSProperties}>
        <div><span className="eyebrow light">Agenda completa</span><h2>Do primeiro prazo<br />ao encontro final.</h2></div>
        <div className="event-schedule-list">{item.schedule.map((entry) => <article key={`${entry.date}-${entry.title}`}>
          <time>{entry.date}</time><div><small>{entry.time} • {entry.place}</small><h3>{entry.title}</h3><p>{entry.description}</p></div>
        </article>)}</div>
      </section>}

      {!!item.prizes.length && <section className="awards-section">
        <div><span className="eyebrow light">Premiações</span><h2>Reconhecimento<br />para os destaques.</h2></div>
        <div className="awards-list">{item.prizes.map((prize) => <span key={`${prize.place}-${prize.reward}`}><b>{prize.place}</b>{prize.reward}</span>)}</div>
      </section>}

      {!!item.extraLinks.length && <section className="section event-extra-links">
        <span className="eyebrow">Links úteis</span>
        <div>{item.extraLinks.map((link) => <a className="button blue" href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>)}</div>
      </section>}
    </>
  );
}

export function Innovation({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className="innovation"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>;
}
