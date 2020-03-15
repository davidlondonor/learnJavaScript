function saludar(nombre) {
    // console.log(arguments);
    // console.log("Hola " + nombre);
    return 10;
    //La función se ejecuta hasta el return, más alla no pasa nada
    console.log("Soy un codigo que esta despues del return");
}

const saludar2 = function(nombre) {
    //Conoce como función anónima
    console.log("Hola " + nombre);
};

//lamba function
const saludarFlecha = () => {
    console.log("Hola Flecha");
};

const saludarFlecha2 = nombre => {
    console.log("Hola " + nombre);
};

const retornoDeSaludar = saludar("David", 40, true, "Medellín");
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// saludar2("Andrés");
// saludarFlecha();
// saludarFlecha2("Judith");

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// };

//Se puede resumir asi:
const sumar3 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

// Una función flecha sin llaves:
// getAleatorio2

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
