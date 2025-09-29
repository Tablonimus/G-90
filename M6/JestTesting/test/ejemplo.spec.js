const sumar = (a, b) => Number(a) + Number(b);

describe("TESTING DE MATEMATICAS", () => {
    
  it("Comprobando el resultado de una sumatoria de 5 + 5", () => {
    const n1 = 5; //Ejemplos para testear
    const n2 = 5; //Ejemplos para testear
    const resultado = sumar(n1, n2); //=> Resultado => 10 ????
    expect(resultado).toBe(10); //=> Función verificadora de JEST
  });

  it("Comprobando el resultado de una sumatoria de 4+9", () => {
    const n1 = 5; //Ejemplos para testear
    const n2 = 4; //Ejemplos para testear
    const resultado = sumar(n1, n2); // resultado => 9 ????
    expect(resultado).toBe(9); //=> Función verificadora de JEST
  });

});




// describe("TITULO", ()=>{
//     it("Test individual 1 ", ()=>{"ejemplo a resolver"})
// })
