import { pool } from "../../config/sql_connection.js";
import format from "pg-format";

export const obtenerPersonal = async ({ limit = 5, order_by = "id_ASC" }) => {
  const [campo, orden] = order_by.split("_");

  let consulta = "SELECT * FROM personal ORDER BY %s %s LIMIT %s";  

  let consulta_format = format(consulta, campo, orden, limit);

  const { rows: personal } = await pool.query(consulta_format);

  return personal;
};
