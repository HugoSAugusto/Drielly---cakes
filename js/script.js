const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTexto = document.getElementById("modalTexto");
const fechar = document.querySelector(".fechar");

const descricoes = {
  pequeno: `<div class="card-descricao"><h3>Bolo Pequeno</h3><p>Ideal para até 6 pessoas.<br> Sabor personalizado. R$50,00</p>`,
  medio: `<div class="card-descricao"><h3>Bolo Médio</h3><p>Serve até 10 pessoas.<br> Decoração simples ou temática. R$80,00</p></div>`,
  grande: `<div class="card-descricao"><h3>Bolo Grande</h3><p>Perfeito para festas!<br> Serve até 20 pessoas.<br> R$120,00</p></div>`,
  cupcake: `<div class="card-descricao"><h3>Cupcakes</h3><p>Deliciosos e decorados. R$6,00 (unid) ou R$65,00 (12 unidades)</p></div>`,
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
