"use client";

import { useState } from "react";
import { ExperienceCard, SiteFooter, SiteHeader } from "../components";
import { useSiteContent } from "../cms-client";
import type { SiteContent } from "../site-data";

const filters = [
  { label: "Todos", value: "todos" },
  { label: "Natureza", value: "natureza" },
  { label: "Arte", value: "arte" },
  { label: "Cultura", value: "cultura" },
];

export default function EventosPage({ content }: { content?: SiteContent }) {
  const { settings, experiences, agenda } = useSiteContent(content);
  const [filter, setFilter] = useState("todos");
  const visible = filter === "todos" ? experiences : experiences.filter((item) => item.kind === filter);
  return (
    <main>
      <div className="inner-header"><SiteHeader active="/eventos" settings={settings} /></div>
      <section className="page-intro">
        <span className="eyebrow">Agenda 2026</span>
        <div className="page-intro-grid"><h1>Eventos para<br />sentir Macacos.</h1><p>Filtre a programação, compare datas e acesse inscrições e regulamentos sem sair da agenda.</p></div>
        <div className="filter-bar" role="group" aria-label="Filtrar eventos">
          {filters.map((item) => <button key={item.value} className={filter === item.value ? "selected" : ""} onClick={() => setFilter(item.value)}>{item.label}</button>)}
          <span>{visible.length} eventos</span>
        </div>
      </section>
      <section className="section event-list-section">
        <div className="experience-grid">{visible.map((item) => <ExperienceCard key={item.slug} item={item} />)}</div>
      </section>
      <section className="timeline-section">
        <div><span className="eyebrow light">Linha do tempo</span><h2>Agosto e setembro<br />cheios de encontros.</h2></div>
        <div className="timeline">{agenda.slice(0, 6).map((day) => <div key={day.id}><b>{day.date}</b><span>{day.title}</span></div>)}</div>
      </section>
      <SiteFooter settings={settings} />
    </main>
  );
}
