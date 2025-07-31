document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carrossel-track");

  if (window.innerWidth <= 650 && track) {
    let scrollSpeed = 0.5; // velocidade da rolagem
    let lastScrollLeft = 0;

    function autoScroll() {
      track.scrollLeft += scrollSpeed;

      // Se chegou no final, volta pro começo de forma contínua
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
        track.scrollLeft = 0;
      }

      // Rechamada suave da animação
      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }
});
