const articulosSection = document.querySelector(".articulos");
const noticias = [
  {
    id: 32,
    titulo: "Tendencias del mercado automotriz en Chile",
    subtitulo: "Los SUV siguen dominando las ventas",
    descripcion:
      "El mercado automotriz chileno continúa evolucionando, con una clara preferencia por los vehículos SUV. Analizamos las últimas tendencias y los modelos más populares.",
  },
  {
    id: 33,
    img:"",
    titulo: "Autos eléctricos en Chile: ¿El futuro de la movilidad?",
    subtitulo: "Aumenta la oferta y la demanda de vehículos eléctricos",
    descripcion:
      "La electromovilidad está ganando terreno en Chile. Exploramos el creciente mercado de autos eléctricos, los desafíos y las oportunidades para su masificación.",
  },
  {
    id: 34,
    titulo: "Los autos más vendidos en Chile durante el último trimestre",
    subtitulo: "Ranking de los modelos preferidos por los chilenos",
    descripcion:
      "Revelamos cuáles fueron los autos más vendidos en Chile durante los últimos tres meses, con datos detallados y análisis del mercado.",
  },
  {
    id: 35,
    titulo: "Consejos para comprar un auto nuevo en Chile",
    subtitulo: "Guía completa para tomar la mejor decisión",
    descripcion:
      "Si estás pensando en comprar un auto nuevo, esta guía te ayudará a tomar la mejor decisión, con consejos sobre financiamiento, seguros y modelos recomendados.",
  },
  {
    id: 36,
    titulo: "Autos usados en Chile: ¿Conviene comprarlos ahora?",
    subtitulo: "Precios, disponibilidad y recomendaciones",
    descripcion:
      "El mercado de autos usados en Chile ha experimentado cambios significativos. Analizamos si es un buen momento para comprar un vehículo de segunda mano y qué factores considerar.",
  },
];
let htmlNuevo = "";

for (let noticia of noticias) {
  htmlNuevo += `<article class="articulo">
                   <h4>${noticia.titulo}</h4>
                   <h6>${noticia.subtitulo}</h6>
                   <p>${noticia.descripcion}</p>
                   <a href="/articulo/${noticia.id}">
                       <button>Ver más...</button>
                   </a>
               </article>`;
}
console.log(htmlNuevo);

articulosSection.innerHTML = htmlNuevo;
