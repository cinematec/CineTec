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
    "height: 100%;" +
    "width: 100%;" +
    "position: absolute;" +
    "top: 0px;" +
    "left: 0px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";
    
    area_msg.setAttribute("style",style_area);
    this.destino.prepend(area_msg);
    this.destino.style.overflowY = "hidden";
    
    const box_msg = document.createElement("div");
    const style_box_msg = 
    "background-color: #fff;" +
    "border-radius: 6px;" +
    "width: 300px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";
    box_msg.setAttribute("style", style_box_msg);
    area_msg.prepend(box_msg);
    
    const header = document.createElement("header");
    const style_header = 
    "background-color:"+this.color+";" +
    "border-radius: 0px;" +
    "width: 100%;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-direction: column;";
    header.innerHTML = this.header_content;
    header.setAttribute("style", style_header);
    box_msg.prepend(header);
  }
  static ocultar() {
    this.destino.remove(area_msg);
  }
}
export default Janela;