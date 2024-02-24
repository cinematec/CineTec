class Janela {
  static header_content = "Titulo";
  static main_content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid similique fuga rerum excepturi, amet, quibusdam laudantium praesentium iure aspernatur. Doloremque amet pariatur eius dicta accusantium id consequuntur quas sequi rerum.";
  static footer_content = "&copyIago";
  static color = "#939393";
  static destino = document.body;
  
 /* config(config) {
    
  } */
  static exibir() {
    const area_msg = document.createElement("div");
    const style_area = 
    "background-color: rgba(0,0,0,0.7);" +
    "height: 100vh;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";
    
    area_msg.setAttribute("style",style_area);
    this.destino.appendChild(area_msg);
    
    const header = document.createElement("header");
    header
  }
  static ocultar() {
    
  }
}
export default Janela;