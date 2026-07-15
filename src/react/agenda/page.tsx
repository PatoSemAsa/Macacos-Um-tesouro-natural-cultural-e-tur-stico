"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "../components";

const days = [
  { id:"01-ago", date:"01 AGO", label:"Abertura", image:"/assets/caminhadas-editorial.png", title:"Abertura + Cachoeira do Marumbé", place:"Igreja do centrinho", items:[{time:"13h",title:"Cerimônia de abertura",text:"Apresentação do projeto e encontro dos participantes."},{time:"Depois",title:"Caminhada ao Marumbé",text:"Atividade especial com saída após a abertura."}], href:"/caminhadas" },
  { id:"15-ago", date:"15–16 AGO", label:"Fotografia", image:"/assets/fotografia-editorial.png", title:"Workshop de fotografia", place:"Pousada Café Aquarela + pontos turísticos", items:[{time:"Dia 1",title:"Aula teórica",text:"Fundamentos, linguagem e preparação para a prática."},{time:"Dia 2",title:"Saída fotográfica",text:"Registros em diferentes pontos turísticos de Macacos."}], href:"/fotografia" },
  { id:"29-ago", date:"29 AGO", label:"Trilha", image:"/assets/caminhadas-editorial.png", title:"Mirante do Eustáquio", place:"Encontro no Recanto do Suíço", items:[{time:"09h",title:"Concentração",text:"Recepção, conferência e orientações de segurança."},{time:"Em seguida",title:"Caminhada guiada",text:"Percurso até o mirante com acompanhamento."}], href:"/caminhadas" },
  { id:"12-set", date:"12 SET", label:"Fotografia", image:"/assets/fotografia-editorial.png", title:"Exposição e premiação", place:"Recanto do Suíço", items:[{time:"13h",title:"Encerramento da fotografia",text:"Resultado do concurso e celebração dos trabalhos."},{time:"No evento",title:"Trio Folk News",text:"Apresentação cultural de encerramento."}], href:"/fotografia" },
  { id:"19-set", date:"19 SET", label:"Poesia", image:"/assets/poesia-editorial.png", title:"Premiação da poesia", place:"Recanto do Suíço", items:[{time:"13h",title:"Cerimônia de encerramento",text:"Finalistas, votação e premiação das duas categorias."},{time:"No evento",title:"Apresentações culturais",text:"Beatriz Myrrha e Duo Dama-Triz."}], href:"/poesia" },
  { id:"26-set", date:"26 SET", label:"Canção + trilha", image:"/assets/cancao-editorial.png", title:"Um dia com dois encontros", place:"Macacos + Recanto do Suíço", items:[{time:"08h",title:"Cachoeira dos Anjos",text:"Terceira caminhada ecoturística guiada."},{time:"13h",title:"Semifinal da canção",text:"Vinte canções no palco e show de Lumineiro e Banda Dona Zilda."}], href:"/cancao" },
  { id:"27-set", date:"27 SET", label:"Grande final", image:"/assets/cancao-editorial.png", title:"Final do Festival da Canção", place:"Recanto do Suíço", items:[{time:"13h",title:"Dez canções finalistas",text:"Apresentações e definição das três vencedoras."},{time:"No evento",title:"Show de Júlia Rocha",text:"Encerramento da programação do festival."}], href:"/cancao" },
];

export default function AgendaPage() {
  const [selected, setSelected] = useState(days[0].id);
  const day = days.find((item) => item.id === selected) ?? days[0];
  return <main className="agenda-page">
    <div className="inner-header"><SiteHeader active="/agenda" /></div>
    <section className="agenda-intro"><span className="eyebrow">Agenda navegável</span><h1>Escolha uma data.<br /><em>Veja o dia acontecer.</em></h1><p>Uma visão simples do que acontece, onde encontrar o grupo e qual experiência está ligada à data.</p></section>
    <section className="date-rail" aria-label="Escolha uma data">{days.map((item) => <button key={item.id} className={selected === item.id ? "active" : ""} onClick={() => setSelected(item.id)}><b>{item.date}</b><span>{item.label}</span></button>)}</section>
    <section className="agenda-detail">
      <div className="agenda-photo"><img src={day.image} alt="" /><span>{day.date}</span></div>
      <div className="agenda-copy"><span className="eyebrow light">{day.place}</span><h2>{day.title}</h2><div className="agenda-items">{day.items.map((item) => <article key={item.time + item.title}><time>{item.time}</time><div><b>{item.title}</b><p>{item.text}</p></div></article>)}</div><Link className="button acid" href={day.href}>Ver experiência completa ↗</Link></div>
    </section>
    <section className="agenda-note"><span>INOVAÇÃO</span><p>Depois, esta agenda pode liberar <strong>notificações, mapas, mudanças de horário e atualização ao vivo</strong> no próprio dia.</p></section>
    <SiteFooter />
  </main>;
}

