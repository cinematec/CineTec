import Janela from "./janela.js";
const molduras = [...document.querySelectorAll("legend")];
const spans = [...document.querySelectorAll("#span")];
const botaoMsg = document.getElementById("botaoMsg");
const config = {
  header_content:"Votação",
  main_content: "Para votar no filme que voce deseja basta acessa o link:",
  type: "confirm"
}
Janela.config(config);
botaoMsg.addEventListener("click", () => {
  Janela.exibir();
  molduras.forEach((moldura) => {
    moldura.style.opacity = 0;
  });
  spans.forEach((span) => {
    span.style.opacity = 0.5;
  });
  molduras.forEach((moldura) => {
    moldura.style.opacity = 1;
  });
  spans.forEach((span) => {
    span.style.opacity = 1;
  });
});