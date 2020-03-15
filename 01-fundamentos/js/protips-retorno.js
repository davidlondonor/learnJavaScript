// function crearPersona(nombre, apellido) {
//     return { nombre, apellido };
// }

// La misma función en modo Flecha

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("David", "Londoño");
console.log(persona);

function imprimeArgumento() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
    10,
    true,
    false,
    "david",
    "hola"
);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona("David", "Londoño");
console.log({ nuevoApellido });

const tony = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    trajes: ["Mark I", "Mark V", "Hulkbuster"]
};

// const imprimrPropiedades = personaje => {
//     console.log("nombre", personaje.nombre);
//     console.log("codeName", personaje.codeName);
//     console.log("vivo", personaje.vivo);
//     console.log("edad", personaje.edad);
//     console.log("trajes", personaje.trajes);
// };

const imprimrPropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
};

imprimrPropiedades(tony);
