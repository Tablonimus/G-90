// let auto = {
//   marca: "JAC",
//   modelo: "S4",
//   año: 2018,
//   km: 60304,
// };

// console.log(auto.marca);
// console.log(auto["marca"]);

const articulo = {
  id: 31,
  titulo: "Autos nuevos en Chile",
  subtitulo: "El mercado de autos se normaliza",
  descripcion:
    "No es novedad que los precios de los autos usados se han disparado debido a la falta en stock de autos nuevos, sin embargo puede que esto esté llegando a su fin…",
};

const articulosSection = document.querySelector(".articulos");
articulosSection.innerHTML = `<article class="articulo">
                    <h4>${articulo.titulo}</h4>
                    <h6>${articulo.subtitulo}</h6>
                    <p>${articulo.descripcion}</p>
                    <a href="/articulo/${articulo.id}">
                        <button>Ver más...</button>
                    </a>
                </article>`;
