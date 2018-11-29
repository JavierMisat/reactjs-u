// Spread Operator ...

let lenguaje = ['Javascript', 'Php', 'Python', 'Java'];
let frameworks = ['React', 'Laravel', 'Django', 'Spring'];

//Sin usar spread
let [ultimo] = [...lenguaje].reverse();

//Con spread
// let [ultimoSpread]


console.log(ultimo);
console.log(lenguaje);

//Unir los arreglos en uno solo metodo ES5
//let combinado = lenguaje.concat(frameworks);

/**
 * @description Nueva forma de combinar arreglos ademas
 * que crea una copia del arreglo original
 * @type {string[]}
 */
let combinado = [...lenguaje, ...frameworks];
//console.log(combinado);

function suma(a, b, c){
    console.log(a+b+c);
}

const numeros = [1,2,3];
suma(...numeros);