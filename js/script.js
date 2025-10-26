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

function ativarProduto(parametro){
  const element = document.getElementById(parametro)
  if(element){
    element.checked = true;
  }
}

parametros.forEach(ativarProduto)