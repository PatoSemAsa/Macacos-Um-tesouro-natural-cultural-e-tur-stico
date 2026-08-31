// =================================================================
//  AGORA EM MACACOS — carrossel ao vivo da página inicial
//  curtamacacos.com.br · Associação Turística em Macacos (TurMa)
//
//  COMO FUNCIONA
//  O carrossel é uma Apresentação de slides nativa do Wix (#slideshow1):
//  ela passa sozinha e usa as animações do próprio Wix. Este código só
//  preenche os textos e botões de cada slide, e refaz a conta a cada
//  30 segundos.
//
//  Os textos dos slides têm marcadores entre chaves — {{s1dia}},
//  {{s1titulo}}, {{s1contagem}}... Como todos os slides são cópias do
//  primeiro, todos têm os mesmos marcadores; o código ignora o "s1" e
//  usa a POSIÇÃO do slide: o slide 1 recebe a próxima atividade, o
//  slide 2 a seguinte, e assim por diante. O que já aconteceu vai para
//  o fim da fila, com o selo "Já aconteceu" e sem botão de ingresso.
//
//  PARA MUDAR UMA DATA, UM ARTISTA, UM PREÇO OU UM LINK
//  Mexa só na lista EVENTOS abaixo. Nada mais.
//
//  Datas e valores conferidos nos regulamentos assinados, nos
//  formulários de inscrição e nas páginas do Sympla (agosto/2026).
// =================================================================

const RECANTO =
  "Recanto do Suíço — R. Seis de Outubro, 1500 · Macacos, Nova Lima/MG";

const MAPA =
  "https://www.google.com/maps/search/?api=1&query=Recanto+do+Sui%C3%A7o+R.+Seis+de+Outubro+1500+Sao+Sebastiao+das+Aguas+Claras+Nova+Lima+MG";

// ---- os slides do carrossel, na ordem em que foram cadastrados ----
// tipo "evento"    = tem dia marcado, entra na contagem regressiva
// tipo "temporada" = período aberto (as caminhadas), sem contagem
const EVENTOS = [
  {
    tipo: "evento",
    d: "2026-09-12T13:00", f: "2026-09-12T18:00",
    titulo: "Premiação do Concurso de Fotografia",
    palco: "Show do Trio Folk News",
    sub: "As 3 fotografias mais votadas premiadas no palco · entrega dos certificados",
    ingresso: "ENTRADA GRATUITA · retire o ingresso antes, as vagas são limitadas",
    botao: ["Pegar ingresso grátis no Sympla",
      "https://www.sympla.com.br/evento/encerramento-do-concurso-de-fotografia-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3473746"]
  },
  {
    tipo: "evento",
    d: "2026-09-19T13:00", f: "2026-09-19T18:00",
    titulo: "Premiação do Concurso de Poesia",
    palco: "Beatriz Myrrha e Duo Dama-Triz",
    sub: "Os 3 melhores poemas de cada categoria, infantojuvenil e adulto",
    ingresso: "ENTRADA GRATUITA · retire o ingresso antes, as vagas são limitadas",
    botao: ["Pegar ingresso grátis no Sympla",
      "https://www.sympla.com.br/evento/encerramento-do-concurso-de-poesia-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3474005"]
  },
  {
    tipo: "evento",
    d: "2026-09-26T13:00", f: "2026-09-26T19:00",
    titulo: "Semifinal do Festival da Canção",
    palco: "As 20 canções semifinalistas ao vivo",
    sub: "Dessas, 10 seguem para a grande final no dia seguinte",
    ingresso: "INGRESSO R$ 20 · a renda vira cestas básicas para a comunidade",
    botao: ["Comprar ingresso no Sympla",
      "https://www.sympla.com.br/evento/semifinal-do-festival-da-cancao-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3474131"]
  },
  {
    tipo: "evento",
    d: "2026-09-27T13:00", f: "2026-09-27T19:00",
    titulo: "Final do Festival da Canção",
    palco: "As 10 canções finalistas ao vivo",
    sub: "R$ 10 mil em prêmios: R$ 5.000, R$ 3.000 e R$ 2.000",
    ingresso: "INGRESSO R$ 20 · a renda vira cestas básicas para a comunidade",
    botao: ["Comprar ingresso no Sympla",
      "https://www.sympla.com.br/evento/final-do-festival-da-cancao-projeto-macacos-um-tesouro-natural-cultural-e-turistico/3474485"]
  },
  {
    tipo: "temporada",
    f: "2026-10-25T18:00",              // último dia da temporada
    dia: "25", mes: "OUT", semana: "DATAS ATÉ", hora: "8h",
    titulo: "Caminhadas guiadas por Macacos",
    palco: "Marumbé, Mirante do Eustáquio e Cachoeira dos Anjos",
    sub: "Datas previstas até 25 de outubro · você escolhe a sua no formulário",
    ingresso: "GRATUITAS · 20 vagas por data, a partir de 10 anos · inscreva-se até 3 dias antes",
    estadoFixo: "INSCRIÇÕES ABERTAS",
    botao: ["Escolher data e se inscrever", "https://forms.gle/faHXaMziKTemPzna6"]
  }
];

// ---- aviso de votação (só enquanto o prazo está de pé) ------------
const VOTACAO = {
  ini: "2026-08-20T00:00",
  fim: "2026-09-12T13:00",
  texto: "Votação das fotografias aberta",
  ultimo: "Último dia para votar nas fotografias",
  amanha: "A votação das fotografias termina amanhã",
  botao: ["Votar agora", "https://tally.so/r/44lkKo"]
};

// ==================================================================
//  daqui para baixo não precisa mexer
// ==================================================================

const MES = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
const MESL = ["janeiro","fevereiro","março","abril","maio","junho",
  "julho","agosto","setembro","outubro","novembro","dezembro"];
const SEM = ["DOMINGO","SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA","SÁBADO"];
const SEML = ["domingo","segunda-feira","terça-feira","quarta-feira",
  "quinta-feira","sexta-feira","sábado"];

// as datas do projeto são sempre no horário de Brasília
function dt(s) { return new Date(s + ":00-03:00"); }

// Dia, mês, hora e dia da semana SEMPRE lidos no fuso de Brasília —
// nunca no relógio de quem abre o site (senão quem acessa de fora do
// Brasil veria 16h em vez de 13h).
const DIA_SEMANA = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function brasilia(d) {
  const f = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Sao_Paulo", year: "numeric", month: "numeric",
    day: "2-digit", hour: "2-digit", minute: "2-digit",
    weekday: "short", hour12: false
  });
  const o = {};
  f.formatToParts(d).forEach(x => { o[x.type] = x.value; });
  return {
    dia: o.day, mes: (+o.month) - 1, ano: +o.year,
    hora: +o.hour, sem: DIA_SEMANA[o.weekday]
  };
}

function numeroDoDia(d) {
  const b = brasilia(d);
  return Math.floor(Date.UTC(b.ano, b.mes, +b.dia) / 86400000);
}

function dias(a, b) { return numeroDoDia(b) - numeroDoDia(a); }

function estado(agora, e) {
  const fim = dt(e.f);
  if (e.tipo === "temporada") {
    if (agora > fim) return { txt: "Temporada encerrada", ja: true };
    return { txt: e.estadoFixo };
  }
  const ini = dt(e.d);
  if (agora >= ini && agora <= fim) return { txt: "ACONTECENDO AGORA" };
  if (agora > fim) return { txt: "Já aconteceu", ja: true };
  const n = dias(agora, ini);
  if (n === 0) return { txt: "É HOJE!" };
  if (n === 1) return { txt: "É AMANHÃ" };
  return { txt: "FALTAM " + n + " DIAS" };
}

// o que está por vir primeiro; o que já passou vai para o fim
function ordena(agora) {
  const l = EVENTOS.map(e => Object.assign({}, e, {
    quando: dt(e.d || e.f),
    st: estado(agora, e)
  }));
  const futuros = l.filter(e => !e.st.ja).sort((a, b) => a.quando - b.quando);
  const passados = l.filter(e => e.st.ja).sort((a, b) => b.quando - a.quando);
  return futuros.concat(passados);
}

// valores de UM evento, já prontos para entrar no slide
function valoresDoEvento(e) {
  if (!e) return null;
  const v = {};
  if (e.tipo === "temporada") {
    v.dia = e.dia; v.mes = e.mes; v.semana = e.semana; v.hora = e.hora;
  } else {
    const b = brasilia(e.quando);
    v.dia = b.dia; v.mes = MES[b.mes]; v.semana = SEM[b.sem]; v.hora = b.hora + "h";
  }
  v.titulo = e.titulo;
  v.palco = e.palco;
  v.sub = e.sub;
  v.local = RECANTO;
  v.ingresso = e.st.ja ? "Já aconteceu — obrigado a quem participou!" : e.ingresso;
  v.contagem = e.st.txt;
  v.botao = e.st.ja ? null : e.botao;
  v.mapa = ["Como chegar", MAPA];
  return v;
}

// valores que ficam fora do carrossel (faixa "ao vivo", aviso de votação)
function valoresGerais(agora) {
  const lista = ordena(agora);
  const faltam = lista.filter(e => !e.st.ja).length;
  const h = brasilia(agora);
  const v = {
    hoje: SEML[h.sem] + ", " + (+h.dia) + " de " + MESL[h.mes] + " de " + h.ano,
    quantos: faltam === 0 ? "o projeto já encerrou as atividades"
      : (faltam === 1 ? "1 atividade pela frente" : faltam + " atividades pela frente")
  };
  const vi = dt(VOTACAO.ini), vf = dt(VOTACAO.fim);
  if (agora >= vi && agora <= vf) {
    const n = dias(agora, vf);
    v.votacao = n <= 0 ? VOTACAO.ultimo : (n === 1 ? VOTACAO.amanha : VOTACAO.texto);
    v.votacaobotao = VOTACAO.botao;
  } else {
    v.votacao = null;
    v.votacaobotao = null;
  }
  return v;
}

// ---- ligação com os elementos do editor --------------------------
// registro: { id, modelo, slide }  (slide = -1 quando está fora do carrossel)
const registrados = [];

function temMarcador(t) { return /\{\{[a-z0-9]+\}\}/i.test(t || ""); }

// "{{s1dia}}" e "{{dia}}" viram a mesma chave: "dia"
function chaveDe(marcador) {
  return marcador.replace(/[{}]/g, "").replace(/^s\d+/i, "").toLowerCase();
}

function registrar(el, indiceDoSlide) {
  const tipo = el.type;
  try {
    if (tipo === "$w.Text" && temMarcador(el.text)) {
      registrados.push({ id: el.id, modelo: el.text, slide: indiceDoSlide, botao: false });
    } else if (tipo === "$w.Button" && temMarcador(el.label)) {
      registrados.push({ id: el.id, modelo: el.label, slide: indiceDoSlide, botao: true });
    }
  } catch (err) { /* elemento sem texto/label */ }

  const filhos = el.children;
  if (filhos && filhos.length) {
    filhos.forEach(c => registrar(c, indiceDoSlide));
  }
}

function preenche(modelo, v) {
  return modelo.replace(/\{\{[a-z0-9]+\}\}/gi, m => {
    const val = v ? v[chaveDe(m)] : undefined;
    if (val === undefined || val === null) return "";
    return val;
  }).trim();
}

function aplicar() {
  const agora = new Date();
  const lista = ordena(agora);
  const geral = valoresGerais(agora);
  const porSlide = lista.map(valoresDoEvento);

  registrados.forEach(r => {
    let el;
    try { el = $w("#" + r.id); } catch (err) { return; }
    const v = r.slide >= 0 ? porSlide[r.slide] : geral;

    if (r.botao) {
      const chave = chaveDe((r.modelo.match(/\{\{[a-z0-9]+\}\}/i) || [""])[0]);
      const val = v ? v[chave] : null;
      if (!val) { el.collapse(); return; }
      el.label = val[0];
      el.link = val[1];
      el.target = "_blank";
      el.expand();
    } else {
      const texto = preenche(r.modelo, v);
      if (!texto) { el.collapse(); return; }
      el.text = texto;
      el.expand();
    }
  });
}

$w.onReady(function () {
  // 1) os slides do carrossel, na ordem em que aparecem
  try {
    const ss = $w("#slideshow1");
    ss.slides.forEach((slide, i) => registrar(slide, i));
  } catch (err) {
    console.log("Agora em Macacos: não achei o #slideshow1 —", err.message);
  }

  // 2) textos e botões fora do carrossel ({{hoje}}, {{votacao}}...)
  const dentro = {};
  registrados.forEach(r => { dentro[r.id] = true; });
  $w("Text").forEach(el => {
    try {
      if (!dentro[el.id] && temMarcador(el.text)) {
        registrados.push({ id: el.id, modelo: el.text, slide: -1, botao: false });
      }
    } catch (err) { /* ignora */ }
  });
  $w("Button").forEach(el => {
    try {
      if (!dentro[el.id] && temMarcador(el.label)) {
        registrados.push({ id: el.id, modelo: el.label, slide: -1, botao: true });
      }
    } catch (err) { /* ignora */ }
  });

  aplicar();
  setInterval(aplicar, 30000);
});
