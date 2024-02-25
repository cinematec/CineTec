class Janela {
  static header_content = "Titulo";
  static main_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid similique fuga rerum excepturi, amet, quibusdam laudantium praesentium iure aspernatur. Doloremque amet pariatur eius dicta accusantium id consequuntur quas sequi rerum.";
  static footer_content = null;
  static color = "#1e1e1e";
  static destino = document.body;
  static area_msg = null;

  static config(config) {
    this.header_content = config.header_content;
    this.main_content = config.main_content;
    this.color = config.color;
    if(config.header_content == undefined) {
      this.header_content = "Titulo";
    }
    if(config.main_content == undefined) {
      this.main_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid similique fuga rerum excepturi, amet, quibusdam laudantium praesentium iure aspernatur. Doloremque amet pariatur eius dicta accusantium id consequuntur quas sequi rerum.";
    }
    if(config.color == undefined) {
      this.color = "#1e1e1e";
    }
  }
  static exibir() {
    this.area_msg = document.createElement("div");
    const style_area =
    "background-color: rgba(0,0,0,0.7);" +
    "height: 100%;" +
    "width: 100%;" +
    "position: absolute;" +
    "top: 0px;" +
    "left: 0px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";

    this.area_msg.setAttribute("style", style_area);
    this.destino.appendChild(this.area_msg);
    this.destino.style.overflowY = "hidden";

    const box_msg = document.createElement("div");
    const style_box_msg =
    "background-color: #fff;" +
    "border-radius: 8px;" +
    "overflow: hidden;" +
    "width: 300px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";
    box_msg.setAttribute("style", style_box_msg);
    this.area_msg.prepend(box_msg);

    const header = document.createElement("div");
    const style_header =
    "background-color:"+this.color+";" +
    "color: #fff;" +
    "border-radius: 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";
    header.innerHTML = this.header_content;
    header.setAttribute("style", style_header);
    box_msg.prepend(header);

    const main = document.createElement("div");
    const style_main =
    "background-color: #fff;" +
    "border-radius: 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: column;";
    main.innerHTML = this.main_content;
    main.setAttribute("style", style_main);
    box_msg.appendChild(main);

    const footer = document.createElement("div");
    const botao_footer = document.createElement("button");
    const style_footer =
    "background-color: #fff;" +
    "color: #fff;" +
    "padding: 5px;" +
    "border-radius: 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: column;";

    const style_botao_footer =
    "background-color:"+this.color+";" +
    "border: none;" +
    "border-radius: 4px;" +
    "color: #fff;" +
    "padding: 5px 0px 5px 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: start;" +
    "text-align: center;" +
    "flex-direction: column;";

    botao_footer.innerHTML = "OK";
    botao_footer.setAttribute("style", style_botao_footer);
    footer.innerHTML = this.footer_content;
    footer.setAttribute("style", style_footer);
    footer.appendChild(botao_footer);
    box_msg.appendChild(footer);
    botao_footer.addEventListener("click", () => {
      this.ocultar();
    });
  }
  static ocultar() {
    this.destino.style.overflowY = "";
    this.destino.removeChild(this.area_msg);
    const molduras = [...document.querySelectorAll("legend")];
    const spans = [...document.querySelectorAll("#span")];
    molduras.forEach((moldura) => {
      moldura.style.opacity = 1;
    });
    spans.forEach((span) => {
      span.style.opacity = 1;
    });
  }
}
export default Janela;