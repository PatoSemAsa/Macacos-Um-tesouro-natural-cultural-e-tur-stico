"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";
import { defaultSiteContent, type SiteContent } from "../site-data";

export default function AgendaPage({ content }: { content?: SiteContent }) {
  const { settings, agenda: days } = useSiteContent(content);
  const [selected, setSelected] = useState("");
  const day = days.find((item) => item.id === selected) ?? days[0] ?? defaultSiteContent.agenda[0];
  const selectedId = day.id;
  return <main className="agenda-page">
    <div className="inner-header"><SiteHeader active="/agenda" settings={settings} /></div>
    <section className="agenda-intro"><span className="eyebrow">Agenda navegável</span><h1>Escolha uma data.<br /><em>Veja o dia acontecer.</em></h1><p>Uma visão simples do que acontece, onde encontrar o grupo e qual experiência está ligada à data.</p></section>
    <section className="date-rail" aria-label="Escolha uma data">{days.map((item) => <button key={item.id} className={selectedId === item.id ? "active" : ""} onClick={() => setSelected(item.id)}><b>{item.date}</b><span>{item.label}</span></button>)}</section>
    <section className="agenda-detail">
      <div className="agenda-photo"><img src={day.image} alt="" /><span>{day.date}</span></div>
      <div className="agenda-copy"><span className="eyebrow light">{day.place}</span><h2>{day.title}</h2><div className="agenda-items">{day.items.map((item) => <article key={item.time + item.title}><time>{item.time}</time><div><b>{item.title}</b><p>{item.text}</p></div></article>)}</div><Link className="button acid" href={day.href}>Ver experiência completa ↗</Link></div>
    </section>
    <section className="agenda-note"><span>INOVAÇÃO</span><p>Depois, esta agenda pode liberar <strong>notificações, mapas, mudanças de horário e atualização ao vivo</strong> no próprio dia.</p></section>
    <SiteFooter settings={settings} />
  </main>;
}
