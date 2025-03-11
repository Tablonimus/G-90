const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const btnEliminarUltimo = document.querySelector("#eliminarUltimo");
let invitados = [];

btnAgregar.addEventListener("click", () => {
  /* 1 => leer input */
  let nuevo_invitado = invitadoInput.value;

  /* 2 => agregar el valor del input al array */
  invitados.push(nuevo_invitado);
  /* 3 => mostrar el array */
  mostrarInvitados(invitados);

  /* 4 => eliminar el valor del input al agregar */
  invitadoInput.value = "";
});

btnEliminarUltimo.addEventListener("click", () => {
  invitados.pop(); //=> se elimina el elemento del final
  mostrarInvitados(invitados);
});

function mostrarInvitados(array_invitados) {
  let html_template = ""; //

  for (const invitado of array_invitados) {
    let template = `<li class='bg-success'>${invitado}</li>`; //bosquejo => plantilla => mockup => modelo
    html_template += template;   
  }

  listaDeInvitados.innerHTML = html_template;
}

/* Con método forEach */
//   invitados.forEach((invitado) => {
//     let template = `<li>${invitado}</li>`;
//     html_template += template;
//   });
