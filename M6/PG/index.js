import { agregarViaje, obtenerViajes, getDate } from "./sql/viajes.query.js";

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
app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes();
  res.json({
    status: "OK",
    message: "Viajes listados exitosamente",
    items: viajes,
  });
});

app.post("/viajes", async (req, res) => {
  const { destino, presupuesto } = req.body;

  const response = await agregarViaje(destino, presupuesto);

  res.json({ status: "OK", message: "Viaje agregado exitosamente" });
});
