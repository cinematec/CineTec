import Janela from "./janela.js";
const molduras = [...document.querySelectorAll("legend")];
const spans = [...document.querySelectorAll("#span")];
const botaoMsg = document.getElementById("botaoMsg");
botaoMsg.addEventListener("click", () => {
  molduras.forEach((moldura) => {
    moldura.style.opacity = 0;
  });
  spans.forEach((span) => {
    span.style.opacity = 0.5;
  });
  Janela.exibir();
});