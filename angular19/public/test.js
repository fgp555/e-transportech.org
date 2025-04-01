console.log("script.js cargado");

const btnPrimary = document.querySelector(".btn-primary");

if (btnPrimary) {
  btnPrimary.addEventListener("click", () => {
    console.log("Button clicked!");
    alert("Button clicked!");
  });
} else {
  console.warn("No se encontró el botón con clase .btn-primary");
}
