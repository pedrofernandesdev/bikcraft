const links = document.querySelectorAll(".header__itens-list a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("isActive");
  }
}

links.forEach(ativarLink);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const questions = document.querySelectorAll(".questions button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("active");
  const ativa = resposta.classList.contains("active");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

questions.forEach(eventosPerguntas);

// Galeria de bicicletas
const galeria = document.querySelectorAll(".bicycle__image img");
const galeriaContainer = document.querySelector(".bicycle__image");

galeria.forEach((img) => {
  img.addEventListener("click", (event) => {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  });
});

// Animações
if (window.SimpleAnime) {
  new SimpleAnime();
}
