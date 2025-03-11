const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const invitados = [
  // { id: 431, nombre: "Jhonny Depp" },
  // { id: 124, nombre: "Brad Pitt" },
  // { id: 541, nombre: "Leonardo DiCaprio" },
  // { id: 664, nombre: "Morgan Freeman" },
  // { id: 2342342345, nombre: "Juan" },
];


btnAgregar.addEventListener("click", () => {
  /* Agregamos el invitado al arreglo */
  nuevoInvitado = { id: Date.now(), nombre: invitadoInput.value };

  invitados.push(nuevoInvitado);

  invitadoInput.value = "";

  /* Actualizamos la información en el HTML */
  mostrarLista(invitados);
});

function borrar(id) {
  const index = invitados.findIndex((invitado) => invitado.id == id); //busca el indice en el array según el id
  invitados.splice(index, 1); //a partir de ese indice, borrar el elemento
  /* Actualizamos la información en el HTML */
  mostrarLista(invitados);
}

function mostrarLista(array_invitados) {
  /* Actualizamos la información en el HTML */
  let html = "";
  for (invitado of array_invitados) {
    html += `
      <li>
        <span>${invitado.nombre}</span>   
        <button onclick="borrar(${invitado.id})">❌</button>    
      </li>`;
  }
  listaDeInvitados.innerHTML = html;
}
