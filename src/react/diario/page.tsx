import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

const chapters = [
  {n:"00",tag:"Preparação",title:"Antes do primeiro passo",date:"Julho de 2026",image:"/assets/igreja-macacos-hero.png",text:"O território, a equipe e os bastidores que preparam o início do projeto."},
  {n:"01",tag:"Abertura",title:"O dia em que tudo começa",date:"1º de agosto",image:"/assets/caminhadas-editorial.png",text:"Cerimônia, encontro na igreja e os primeiros registros da caminhada ao Marumbé."},
  {n:"02",tag:"Olhares",title:"Macacos por novos ângulos",date:"15 e 16 de agosto",image:"/assets/fotografia-editorial.png",text:"Aulas, saídas fotográficas, depoimentos e as imagens escolhidas pelos participantes."},
  {n:"03",tag:"Vozes",title:"Versos e canções do território",date:"Setembro de 2026",image:"/assets/cancao-editorial.png",text:"Finalistas, apresentações, bastidores e os melhores momentos dos encerramentos."},
];

export default function DiarioPage() {
  return <main>
    <div className="inner-header"><SiteHeader active="/diario" /></div>
    <section className="diary-hero"><div><span className="eyebrow light">Diário do projeto</span><h1>O que acontece<br /><em>vira memória.</em></h1><p>Uma aba preparada para receber fotos, vídeos, vlogs, depoimentos e os melhores momentos de cada dia.</p><Link className="button acid" href="#capitulos">Ver capítulos ↓</Link></div><div className="diary-hero-film"><figure><img src="/assets/fotografia-editorial.png" alt="Registro fotográfico" /></figure><figure><img src="/assets/caminhadas-editorial.png" alt="Caminhada na natureza" /></figure><span>REC ● 2026</span></div></section>
    <section className="chapters-section" id="capitulos"><div className="chapters-heading"><span>CAPÍTULOS</span><p>Os cards ficam prontos agora e recebem o conteúdo real depois de cada atividade.</p></div><div className="chapters-list">{chapters.map((chapter) => <article key={chapter.n} className="chapter-card"><div className="chapter-number">{chapter.n}</div><div className="chapter-image"><img src={chapter.image} alt="" /><span>{chapter.date}</span></div><div className="chapter-copy"><small>{chapter.tag}</small><h2>{chapter.title}</h2><p>{chapter.text}</p><span className="soon-label">Em breve</span></div></article>)}</div></section>
    <section className="vlog-module"><div className="vlog-screen"><img src="/assets/igreja-macacos-hero.png" alt="Igreja de São Sebastião das Águas Claras" /><span className="play-button">▶</span><small>VLOG 01 • EM BREVE</small></div><div><span className="eyebrow">Formato pensado para vídeo</span><h2>Um vlog dentro<br />do próprio site.</h2><p>O vídeo pode ficar em destaque, acompanhado por galeria, roteiro do dia, depoimentos e links para compartilhar.</p><ul><li>Vídeo principal</li><li>Galeria de fotos</li><li>Resumo do dia</li><li>Depoimentos</li></ul></div></section>
    <SiteFooter />
  </main>;
}
