import { DetailHero, Innovation, SiteFooter, SiteHeader } from "../components";
import { experiences } from "../site-data";

const item = experiences[0];
const trails = [
  { date: "01 AGO", name: "Cachoeira do Marumbé", time: "13h", level: "Abertura especial", text: "Saída da igreja do centrinho após a cerimônia de abertura." },
  { date: "29 AGO", name: "Mirante do Eustáquio", time: "09h", level: "Vista panorâmica", text: "Ponto de encontro no Recanto do Suíço." },
  { date: "26 SET", name: "Cachoeira dos Anjos", time: "08h", level: "Natureza e água", text: "Ponto de encontro no Recanto do Suíço." },
];

export default function CaminhadasPage() {
  return <main>
    <div className="overlay-header"><SiteHeader active="/caminhadas" /></div>
    <DetailHero item={item} kicker="Caminhadas ecoturísticas"><div className="mini-badges"><span>Gratuito</span><span>10+ anos</span><span>20 vagas por caminhada</span></div></DetailHero>
    <section className="section">
      <div className="section-heading split"><div><span className="eyebrow">Escolha sua trilha</span><h2>Três destinos,<br />três encontros.</h2></div><p>Datas organizadas em cartões rápidos, com ponto de encontro e horário destacados para consulta no celular.</p></div>
      <div className="trail-grid">{trails.map((trail) => <article className="trail-card" key={trail.name}><div className="trail-date">{trail.date}</div><span>{trail.level}</span><h3>{trail.name}</h3><p>{trail.text}</p><b>{trail.time}</b></article>)}</div>
    </section>
    <section className="practical-section">
      <div><span className="eyebrow light">Prepare-se</span><h2>Checklist de trilha.</h2><p>Uma inovação simples que reduz dúvidas antes da atividade.</p></div>
      <ul className="checklist"><li><i>✓</i> Calçado apropriado</li><li><i>✓</i> Garrafa de água</li><li><i>✓</i> Protetor solar</li><li><i>✓</i> Repelente</li><li><i>✓</i> Roupa leve</li><li><i>✓</i> Autorização para menores</li></ul>
    </section>
    <section className="section small-innovations"><Innovation number="NOVO" title="Nível e preparo" text="Cada trilha pode ganhar nível de dificuldade, distância, ganho de elevação e previsão do tempo próximos da data." /><Innovation number="NOVO" title="Mapa do encontro" text="Um botão pode abrir a localização exata e a rota até o ponto de saída no aplicativo de mapas." /></section>
    <SiteFooter />
  </main>;
}

