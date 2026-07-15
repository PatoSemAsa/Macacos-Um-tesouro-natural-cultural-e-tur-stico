import { DetailHero, Innovation, SiteFooter, SiteHeader } from "../components";
import { experiences } from "../site-data";

const item = experiences[2];
export default function PoesiaPage() {
  return <main>
    <div className="overlay-header"><SiteHeader active="/poesia" /></div>
    <DetailHero item={item} kicker="Concurso nacional"><div className="mini-badges"><span>11+ anos</span><span>Duas categorias</span><span>20 poemas finalistas</span></div></DetailHero>
    <section className="section">
      <div className="section-heading split"><div><span className="eyebrow">Duas categorias</span><h2>Toda geração<br />tem uma voz.</h2></div><p>Um poema inédito, em prosa ou verso, sobre o tesouro natural, cultural e turístico de Macacos.</p></div>
      <div className="category-grid"><article><span>Categoria I</span><h3>Infantojuvenil</h3><strong>11 a 17 anos</strong><p>Participação com autorização assinada pelo responsável legal.</p></article><article><span>Categoria II</span><h3>Adulto</h3><strong>18 anos ou mais</strong><p>Aberto a participantes residentes em qualquer região do Brasil.</p></article></div>
    </section>
    <section className="awards-section"><div><span className="eyebrow light">Por categoria</span><h2>Reconhecimento<br />em dobro.</h2></div><div className="awards-list"><span><b>1º</b>Notebook 2 em 1</span><span><b>2º</b>Tablet Redmi Pad 2</span><span><b>3º</b>Samsung Galaxy A26</span></div></section>
    <section className="section small-innovations"><Innovation number="NOVO" title="Leitura acessível" text="Os poemas finalistas podem ganhar modo de leitura, ajuste de fonte e versão em áudio dentro da própria página." /><Innovation number="NOVO" title="Votação transparente" text="Uma galeria pode mostrar categoria, regras e contagem regressiva sem expor dados pessoais dos autores." /></section>
    <SiteFooter />
  </main>;
}

