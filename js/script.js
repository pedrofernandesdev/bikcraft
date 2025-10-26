const links = document.querySelectorAll(".header__itens-list a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("isActive");
  }
}

links.forEach(ativarLink);
