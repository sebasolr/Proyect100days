//aqui traigo la funcion desde el modulo
const calculadora = require("./calculadora");
//aqui declaro  el test que quiero evaluar
test("suma", (a,b) => {
    //creo una variable y aplico la funcion que quiero evaluar
    let result = calculadora.sum(a,b);
    // expectativas (la variable) sea igual a (lo que espero)
expect(result).toBe(a + b);
});

test.todo('extract calculadora');