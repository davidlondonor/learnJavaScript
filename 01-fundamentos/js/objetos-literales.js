let personajes = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.49
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "10880, 902265",
        ubicacion: "Malibu, California"
    },
    "ultima-pelicula": "Infinite War"
};

console.log(personajes);
console.log("Nombre es ", personajes.nombre);
console.log("Nombre", personajes["nombre"]);
console.log("Edad", personajes.edad);
console.log("Coors", personajes.coords.lat);

console.log("Número de Trajes", personajes.trajes.length);
console.log("ultimo Trajes", personajes.trajes[personajes.trajes.length - 1]);

const x = "vivo";
console.log("Vivo", personajes[x]);

console.log("Ultima Pelicula", personajes["ultima-pelicula"]);

// Mar Detalle

delete personajes.edad;
console.log(personajes);

personajes.casado = true;

const entriesPares = Object.entries(personajes);
console.log(entriesPares);

Object.freeze(personajes);

personajes.dinero = 100000000000;
personajes.casado = false;
personajes.dinero.ubicacion = "Costa Rica";
console.log(personajes);

const propiedades = object.getOwnPropertyNames(personajes);

const valores = object.values(personajes);
console.log({ propiedades, valores });
