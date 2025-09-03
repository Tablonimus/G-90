import { Pool } from "pg"; //Importamos del paquete Pg lo que necesitemos

/* INSTANCIA DE CONEXIÓN A DB */
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
  port: 5433, //Especificamos el puerto de conexión
}); //Instancio una  conexión con mi Base de Datos

/* FUNCIONES */
export const getDate = async () => {
  const consulta = "SELECT NOW()";
  const result = await pool.query(consulta);

  console.log("Total de resultados: ", result.rowCount);
  console.log("Resultados: ", result.rows); // En la propiedad rows del resultado de la consulta, obtendemos los valores de la tabla
  return result.rows[0].now;
};

export const obtenerViajes = async () => {
  const { rows, rowCount } = await pool.query(
    "SELECT * FROM viajes ORDER BY id DESC"
  );
  console.log("Total de resultados: ", rowCount);
  console.log("Filas: ", rows);
  return rows;
};

export const obtenerViajesPorId = async (id) => {
  const query = "SELECT * FROM viajes WHERE id = $1";
  const values = [id];

  const { rows } = await pool.query(query, values);

  return rows[0] || null;
};

export const agregarViaje = async (destino, presupuesto) => {
  const consulta =
    "INSERT INTO viajes values (DEFAULT,  $1,    $2) RETURNING *";

  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);

  return result.rows[0];
};

export const modificarPresupuesto = async (presupuesto, id) => {
  const consulta =
    "UPDATE viajes SET presupuesto = $1 WHERE id = $2 RETURNING *";
  const values = [presupuesto, id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};

export const eliminarViaje = async (id) => {
  const consulta = "DELETE FROM viajes WHERE id = $1 RETURNING *";
  const values = [id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};
