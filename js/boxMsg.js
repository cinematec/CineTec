import Janela from "./janela.js";
const molduras = [...document.querySelectorAll("legend")];
const spans = [...document.querySelectorAll("#span")];
const botao_votacao = document.getElementById("botao_votacao");
const config = {
  header_content:"Votação",
  main_content: "Para votar no filme que voce deseja basta acessar o link:",
  type: "alert"
}
Janela.config(config);
botao_votacao.addEventListener("click", () => {
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