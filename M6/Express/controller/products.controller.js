import fs from "fs";

export const getProducts = (req, res) => {
  try {
    console.log(req.query);

    let { orden } = req.query; // "asc" o "desc"

    const productos = JSON.parse(fs.readFileSync("data/productos.json"));

    // productos.sort((a, b) => {
    //   if (orden === "asc") {
    //     return a.nombre.localeCompare(b.nombre); // orden alfabético ascendente
    //   } else {
    //     return b.nombre.localeCompare(a.nombre); // orden alfabético descendente
    //   }
    // });

    res.json({ status: "OK", items: productos });
  } catch (error) {
    console.log(error);
    res.json({ status: "ERROR", message: "Error al obtener los productos" });
  }
};

export const getProductById = (req, res) => {
  try {
    console.log(req.params);

    let { id } = req.params; // {id:1}
    const productos = JSON.parse(fs.readFileSync("data/productos.json"));

    let product = productos.find((p) => p.id == id);

    // productos.sort((a, b) => {
    //   if (orden === "asc") {
    //     return a.nombre.localeCompare(b.nombre); // orden alfabético ascendente
    //   } else {
    //     return b.nombre.localeCompare(a.nombre); // orden alfabético descendente
    //   }
    // });

    res.json({ status: "OK", items: product });
  } catch (error) {
    console.log(error);
    res.json({ status: "ERROR", message: "Error al obtener los productos" });
  }
};
