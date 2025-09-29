import express from "express";
import {
  obtenerMedicamentos,
  obtenerMedicamentosPorFiltros,
} from "./services/queries/medicamentos.js";
import { obtenerPersonal } from "./services/queries/personal.js";

const BASE_URL = "http://localhost:1212";

const app = express();
app.listen(1212, console.log("Server ON"));

/* MEDICAMENTOS */
app.get("/medicamentos", async (req, res) => {
  try {
    const { limit, order_by, page } = req.query;

    const filters = { limit: Number(limit), order_by, page: Number(page) };

    const medicamentos = await obtenerMedicamentos(filters);
    const response = {
      data: medicamentos,
      page: Number(page),
      results: medicamentos.length,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error, message: error.message, status: "ERROR" });
  }
});

app.get("/medicamentos/filtros", async (req, res) => {
  try {
    const queryStrings = req.query;
    const medicamentos = await obtenerMedicamentosPorFiltros(queryStrings); //precio_max, stock_min
    res.json({ results: medicamentos.length, data: medicamentos });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error, message: error.message, status: "ERROR" });
  }
});

/* PERSONAL */
app.get("/personal", async (req, res) => {
  try {
    const { limit, order_by } = req.query;

    const filters = { limit, order_by };
    const personal = await obtenerPersonal(filters);

    res.json(personal);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error, message: error.message, status: "ERROR" });
  }
});
