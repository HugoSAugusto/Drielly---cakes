window.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.getElementById("carrossel");
  const imagens = Array.from(carrossel.children);

  imagens.forEach(img => {
    const clone = img.cloneNode(true);
    carrossel.appendChild(clone);
  });
});
