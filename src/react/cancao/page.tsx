import { DetailHero, Innovation, SiteFooter, SiteHeader } from "../components";
import { experiences } from "../site-data";

const item = experiences[3];
export default function CancaoPage() {
  return <main>
    <div className="overlay-header"><SiteHeader active="/cancao" /></div>
    <DetailHero item={item} kicker="Festival da canção"><div className="mini-badges"><span>18+ anos</span><span>Canção inédita</span><span>Todo o Brasil</span></div></DetailHero>
    <section className="section">
      <div className="section-heading split"><div><span className="eyebrow">Da inscrição ao palco</span><h2>Uma trajetória<br />em três atos.</h2></div><p>Vinte canções chegam à semifinal. Dez seguem para a final e três recebem a premiação.</p></div>
      <div className="journey-grid"><article><b>20</b><span>Selecionadas</span><h3>Semifinal</h3><p>26 de setembro, às 13h, com show de Lumineiro e Banda Dona Zilda.</p></article><article><b>10</b><span>Finalistas</span><h3>Grande final</h3><p>27 de setembro, às 13h, com show de Júlia Rocha.</p></article><article><b>03</b><span>Premiadas</span><h3>Novos talentos</h3><p>Reconhecimento para canções autorais de todo o país.</p></article></div>
    </section>
    <section className="awards-section"><div><span className="eyebrow light">R$ 10 mil</span><h2>Premiação<br />em dinheiro.</h2></div><div className="awards-list"><span><b>1º</b>R$ 5.000</span><span><b>2º</b>R$ 3.000</span><span><b>3º</b>R$ 2.000</span></div></section>
    <section className="section small-innovations"><Innovation number="NOVO" title="Player dos finalistas" text="Após a seleção, esta aba pode reunir pequenos trechos autorizados das músicas em um player elegante." /><Innovation number="NOVO" title="Checklist de envio" text="Letra, áudio, rider e autorizações aparecem em uma lista que evita inscrições incompletas." /></section>
    <SiteFooter />
  </main>;
}

