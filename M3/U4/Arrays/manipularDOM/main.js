let lista = document.getElementById("lista");

const compras = ["zapatillas", "talco", "peras", "vino", "chelas"];
let html = "";

for (let element of compras) {
  // html = html + `<li>${element}</li>`;
  html += `<li>${element}</li>`;
}

lista.innerHTML = html;
