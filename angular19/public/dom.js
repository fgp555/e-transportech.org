document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js cargado");

  setTimeout(() => {
    const btnPrimary = document.querySelector(".btn-primary");

    if (btnPrimary) {
      btnPrimary.addEventListener("click", () => {
        console.log("Button clicked!");
        alert("Button clicked!");
      });
    } else {
      console.warn("No se encontró el botón con clase .btn-primary");
    }
  }, 1000); // Espera un segundo por si Angular aún no ha terminado
});
