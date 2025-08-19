import express from "express"; //importamos express desde node modules
import {
  getProducts,
  getProductById,
} from "./controller/products.controller.js";
import fs from "fs";

const app = express(); // Crear una instancia de express => app =  Express{}

/* MIDDLEWARES */
app.use(express.json());

/* Levantar servidor */
app.listen(
  1212,
  console.log(`El servidor se ha levantado correctamente en el puerto ${1212}`)
); // Levanto el server

/* RUTAS APP*/
app.get("/productos", getProducts); // getProducts(param1, param2)

app.post("/productos", (req, res) => {
  try {
    const producto = req.body;

    const productos = JSON.parse(fs.readFileSync("data/productos.json"));

    productos.push(producto);
    fs.writeFileSync("data/productos.json", JSON.stringify(productos));

    res.json({ message: "Producto agregado con éxito!", items: productos });
  } catch (error) {
    console.log(error);
    res.send("Error al agregar el producto");
  }
});

/* by id */
app.get("/productos/:id", getProductById); // getProducts(param1, param2)

/* RUTAS TEST*/
app.get("/test", (req, res) => {
  /* http://localhost:1212/home */
  res.send("Bienvenido a mi servidor express! 🍟🍔");
});
