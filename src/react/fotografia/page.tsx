import { DetailHero, Innovation, SiteFooter, SiteHeader } from "../components";
import { experiences } from "../site-data";

const item = experiences[1];
export default function FotografiaPage() {
  return <main>
    <div className="overlay-header"><SiteHeader active="/fotografia" /></div>
    <DetailHero item={item} kicker="Workshop + concurso"><div className="mini-badges"><span>60 vagas</span><span>18+ anos</span><span>Smartphone ou câmera</span></div></DetailHero>
    <section className="section">
      <div className="section-heading split"><div><span className="eyebrow">Sua jornada</span><h2>Aprenda, registre<br />e concorra.</h2></div><p>O participante vive um fim de semana completo de formação e transforma um olhar sobre Macacos em obra finalista.</p></div>
      <div className="journey-grid"><article><b>01</b><span>Formação</span><h3>20 horas de curso</h3><p>Aulas teóricas e práticas com Flávio Souza Cruz.</p></article><article><b>02</b><span>Experiência</span><h3>Saídas fotográficas</h3><p>Transporte, guia, alimentação e camiseta incluídos.</p></article><article><b>03</b><span>Concurso</span><h3>Selecione sua foto</h3><p>As 60 imagens seguem para exposição e votação popular.</p></article></div>
    </section>
    <section className="awards-section"><div><span className="eyebrow light">Premiações</span><h2>Seu olhar pode<br />ir mais longe.</h2></div><div className="awards-list"><span><b>1º</b>Câmera Canon EOS 4000D</span><span><b>2º</b>Tablet Redmi Pad 2</span><span><b>3º</b>Samsung Galaxy A26 5G</span></div></section>
    <section className="section small-innovations"><Innovation number="NOVO" title="Galeria de votação" text="Quando a exposição começar, esta aba pode virar uma galeria pública com busca, favoritos e votação simples." /><Innovation number="NOVO" title="Guia visual" text="Antes do workshop, os participantes podem receber dicas de enquadramento e um roteiro de pontos fotográficos." /></section>
    <SiteFooter />
  </main>;
}

