let juegos = ["Zelda", "Mario", "Metroid", " Destiny", " Mario"];
console.log("Largo es", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push("Primus");
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift("Jumanji");
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log(nuevaLongitud, juegos);

let posicion = 1;

let juegosBorrados = juegos.splice(posicion, 2);
console.log(juegosBorrados, juegos);

let metroidIndex = juegos.indexOf("Metroid"); //CaseSensitive
console.log(metroidIndex);
