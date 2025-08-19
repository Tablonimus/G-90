const Perro = {
  nombre: "Juan",
  ladra: function () {
    console.log("Guau, me llamo " + this.nombre);
  },
  morder: function () {
    console.log("Guau!!! te mordí.");
  },
};

function saludoInicial() {
  console.log("Hola, bienvenido a mi programa!!!");
}

function despedida() {
  console.log("Adios, Gracias por usar mi programa!!!");
}

module.exports = { Perro, saludoInicial, despedida };
