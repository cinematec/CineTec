import Janela from "./janela.js";

const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  alert('teste')
  Janela.exibir();
});