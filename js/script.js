const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTexto = document.getElementById("modalTexto");
const fechar = document.querySelector(".fechar");

const descricoes = {
  pequeno: `<div class="card-descricao"><h3>Bolo Pequeno</h3><p>Ideal para até 6 pessoas.<br> Sabor personalizado. R$50,00</p><a href="pages/escolhas.html?tamanho=pequeno" class="btn-personalizar">Personalizar Pedido</a></div>`,
  medio: `<div class="card-descricao"><h3>Bolo Médio</h3><p>Serve até 10 pessoas.<br> Decoração simples ou temática. R$80,00</p><a href="pages/escolhas.html?tamanho=medio" class="btn-personalizar">Personalizar Pedido</a></div>`,
  grande: `<div class="card-descricao"><h3>Bolo Grande</h3><p>Perfeito para festas!<br> Serve até 20 pessoas.<br> R$120,00</p><a href="pages/escolhas.html?tamanho=grande" class="btn-personalizar">Personalizar Pedido</a></div>`,
  cupcake: `<div class="card-descricao"><h3>Cupcakes</h3><p>Deliciosos e decorados. R$6,00 (unid) ou R$65,00 (12 unidades)</p> <a href="pages/escolhas.html?tamanho=cupcake" class="btn-personalizar">Personalizar Pedido</a></div>`,
};

cards.forEach(card => {
  card.addEventListener("click", () => {
    const produto = card.getAttribute("data-produto");
    modalTexto.innerHTML = descricoes[produto];
    modal.style.display = "flex";
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



// Detectar se a seção ".bio" está visível na tela
function animarBioAoScroll() {
  const bio = document.querySelector('.bio');
  const top = bio.getBoundingClientRect().top;
  const alturaVisivel = window.innerHeight;

  if (top < alturaVisivel - 100) {
    bio.classList.add('ativa');
    window.removeEventListener('scroll', animarBioAoScroll); // só anima 1x
  }
}

window.addEventListener('scroll', animarBioAoScroll);
window.addEventListener('load', animarBioAoScroll); // caso já esteja visível ao carregar