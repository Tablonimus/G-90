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
export const obtenerEquipamientos = async () => {
  const { rows } = await pool.query(
    "SELECT * FROM equipamientos ORDER BY id DESC"
  );
  return rows;
};

export const obtenerEquipamientosPorId = async (id) => {
  const query = "SELECT * FROM equipamientos WHERE id = $1";
  const values = [id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const agregarEquipamientos = async (data1, data2) => {
  const consulta =
    "INSERT INTO equipamientos values (DEFAULT, $1, $2) RETURNING *";
  const values = [data1, data2];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};

export const modificarEquipamiento = async (data1, id) => {
  const consulta = "UPDATE viajes SET nombre = $1 WHERE id = $2 RETURNING *";
  const values = [data1, id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};
