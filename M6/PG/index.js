import {
  agregarViaje,
  obtenerViajes,
  getDate,
  modificarPresupuesto,
  obtenerViajesPorId,
  eliminarViaje,
} from "./sql/viajes.query.js";

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json()); //Middleware para admitir payload en consultas
app.use(cors()); // Middleware CORS
app.listen(1212, console.log("SERVIDOR ENCENDIDO"));

app.get("/test", async (req, res) => {
  const test = await getDate();
  res.json(test);
});

// --- RUTAS DE VIAJES ---
/* Listar viajes */
app.get("/viajes", async (req, res) => {
  try {
    const viajes = await obtenerViajes();

    res.json({
      status: "OK",
      message: "Viaje listado exitosamente",
      data: viajes,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "ERROR", message: error.message, error: error });
  }
});

/* Listar viajes */
app.get("/viajes/:id", async (req, res) => {
  const id = req.params.id; // const {id} = req.params
  try {
    const viaje = await obtenerViajesPorId(id);

    const response_message = viaje
      ? "Viajes listados exitosamente"
      : "No hay viajes con ese id";

    res.json({
      status: "OK",
      message: response_message,
      data: viaje,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "ERROR", message: error.message, error: error });
  }
});

/* Crear un viaje */
app.post("/viajes", async (req, res) => {
  try {
    const { destino, presupuesto } = req.body;
    const result = await agregarViaje(destino, presupuesto);
    res.status(201).json({
      status: "OK",
      message: "Viaje agregado exitosamente",
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "ERROR", message: error.message, error: error });
  }
});

/* Editar un viaje */
app.put("/viajes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { presupuesto } = req.body;

    const result = await modificarPresupuesto(presupuesto, id);

    res.json({
      status: "OK",
      message: "Presupuesto modificado exitosamente",
      data: result,
    });
  } catch (error) {
    let error_message = error.message;
    res
      .status(400)
      .json({ status: "ERROR", message: error_message, error: error });
  }
});

/* Eliminar un viaje */

app.delete("/viajes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await eliminarViaje(id);
    res.json({
      status: "OK",
      message: "Viaje eliminado exitosamente :(",
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "ERROR", message: error.message, error: error });
  }
});
