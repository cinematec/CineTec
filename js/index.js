var body = document.querySelector("body");
async function async() {
  try {
    const resultado = await promise();
    console.log(resultado);
  }catch (erro) {
    console.error(erro);
  }
}
function promise() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const sucesso = false;
      if(sucesso) {
        resolve("Sucesso!");
      }else {
        reject("Erro!");
      }
    },5000);
  });
}
async();