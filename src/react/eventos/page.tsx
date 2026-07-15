"use client";

import { useState } from "react";
import { ExperienceCard, SiteFooter, SiteHeader } from "../components";
import { experiences } from "../site-data";

const filters = [
  { label: "Todos", value: "todos" },
  { label: "Natureza", value: "natureza" },
  { label: "Arte", value: "arte" },
  { label: "Cultura", value: "cultura" },
];

export default function EventosPage() {
  const [filter, setFilter] = useState("todos");
  const visible = filter === "todos" ? experiences : experiences.filter((item) => item.kind === filter);
  return (
    <main>
      <div className="inner-header"><SiteHeader active="/eventos" /></div>
      <section className="page-intro">
        <span className="eyebrow">Agenda 2026</span>
        <div className="page-intro-grid"><h1>Experiências para<br />sentir Macacos.</h1><p>Filtre a programação, compare datas e acesse inscrições e regulamentos sem sair da agenda.</p></div>
        <div className="filter-bar" role="group" aria-label="Filtrar eventos">
          {filters.map((item) => <button key={item.value} className={filter === item.value ? "selected" : ""} onClick={() => setFilter(item.value)}>{item.label}</button>)}
          <span>{visible.length} experiências</span>
        </div>
      </section>
      <section className="section event-list-section">
        <div className="experience-grid">{visible.map((item) => <ExperienceCard key={item.slug} item={item} />)}</div>
      </section>
      <section className="timeline-section">
        <div><span className="eyebrow light">Linha do tempo</span><h2>Agosto e setembro<br />cheios de encontros.</h2></div>
        <div className="timeline">
          <div><b>01 AGO</b><span>Abertura + Marumbé</span></div>
          <div><b>15–16 AGO</b><span>Workshop de fotografia</span></div>
          <div><b>29 AGO</b><span>Mirante do Eustáquio</span></div>
          <div><b>12 SET</b><span>Premiação fotografia</span></div>
          <div><b>19 SET</b><span>Premiação poesia</span></div>
          <div><b>26–27 SET</b><span>Festival da canção</span></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

