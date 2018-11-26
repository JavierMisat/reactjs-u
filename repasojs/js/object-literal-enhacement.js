//Object Literal Enhancement
const banda = 'Metallica';
const genero = 'Rock';
const canciones = ['Master of the puppets', 'Seek & Destroy', 'One'];

//Forma anterior
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// };

// console.log(metallica);

//Forma nueva y mejorada de crear objetos
const metallica = {banda, genero, canciones};

console.log(metallica);