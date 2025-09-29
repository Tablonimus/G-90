import { pool } from "../../config/sql_connection.js";
import format from "pg-format";

export const obtenerMedicamentos = async ({
  order_by = "id_ASC",
  limit = 5,
  page = 1,
}) => {
  const [campo, direccion] = order_by.split("_");
  const offset = limit * (page - 1);

  let consulta = "SELECT * FROM medicamentos ORDER BY %s %s LIMIT %s OFFSET %s";
  const consulta_format = format(consulta, campo, direccion, limit, offset);

  const { rows: medicamentos } = await pool.query(consulta_format);

  return medicamentos;
};

export const obtenerMedicamentosPorFiltros = async ({
  stock_max,
  stock_min,
  precio_max,
  precio_min,
}) => {
  let filtros = [];
  if (stock_max) filtros.push(`stock <= ${stock_max}`);
  if (stock_min) filtros.push(`stock >= ${stock_min}`);

  if (precio_max) filtros.push(`precio <= ${precio_max}`);
  if (precio_min) filtros.push(`precio >= ${precio_min}`);

  let consulta = "SELECT * FROM medicamentos";
  if (filtros.length > 0) {
    filtros = filtros.join(" AND ");
    consulta += ` WHERE ${filtros}`;
  }
  const { rows: medicamentos } = await pool.query(consulta);
  return medicamentos;
};
