import Janela from "https://cdn.jsdelivr.net/gh/theus-iago/prototypes/window_v35.js";

const molduras = [...document.querySelectorAll("legend")];
const spans = [...document.querySelectorAll("#span")];
const botao_votacao = document.getElementById("botao_votacao");
const botao_apresentacao = document.getElementById("botao_apresentacao");

const config01 = {
  header_content:"Quem somos nós?",
  main_content: "Somos uma galera apaixonada por filmes e tecnologia. Nosso grupo espera proporcionar a melhor experiencia cinematográfica para os nossos clientes",
  type: "alert"
}
const config02 = {
  header_content:"Votação",
  main_content: "Deseja participar da votação para o próximo filme?",
  type: "confirm"
}

botao_apresentacao.addEventListener("click", () => {
  Janela.config(config01);
  Janela.exibir();
});
botao_votacao.addEventListener("click", () => {
  Janela.config(config02);
  Janela.exibir();
});
