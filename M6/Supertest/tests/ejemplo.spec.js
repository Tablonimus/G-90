const request = require("supertest"); //=> importar la libreria supertest
const server = require("../index"); //=> server es app

describe("Operaciones CRUD", () => {
  /* GET */
  xit("Obteniendo un 200", async () => {
    const response = await request(server).get("/productos").send(); //=> Aqui se usa supertest
    const status = response.statusCode;
    expect(status).toBe(200);
  });

  xit("Obteniendo un array de productos", async () => {
    const { body } = await request(server).get("/productos").send();
    const producto = body; //=>  { "id": 1, "nombre": "Guantes de boxeo" }
    expect(producto).toBeInstanceOf(Array);
  });

  xit("Verificar que un array de productos no venga vacío", async () => {
    const { body } = await request(server).get("/productos").send();
    const productos = body; //=> [ { "id": 1, "nombre": "Guantes de boxeo" }]
    expect(productos.length).toBeGreaterThan(0);
  });

  xit("Obteniendo un producto", async () => {
    const { body } = await request(server).get("/productos/1").send();
    const producto = body; //=>  { "id": 1, "nombre": "Guantes de boxeo" }
    expect(producto).toBeInstanceOf(Object);
  });

  /* POST */
  it("Enviando un nuevo producto", async () => {
    // const id_random = Math.floor(Math.random() * 999);
    // const producto = { id: id_random, nombre: "Nuevo producto " + id_random };
    const producto = { id: 14, nombre: "Nuevo producto" };
    const { body } = await request(server).post("/productos").send(producto); //=> En .send enviamos como paremtro el body de la petición
    const productos = body; //=> productos es un array
    expect(productos).toContainEqual(producto); //=> espero que en el array de productos se contenga el producto que acabo de crear.
  });
});
