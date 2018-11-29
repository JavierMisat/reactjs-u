/**
 * @description Arrow funtions, se usa el operador => en vez de function
 * si es solo una linea se pueden omitir corchetes y  si es un solo argumentos tambien
 * parentesis
 * @param destino
 * @returns {string}
 */
let viajando = (destino) =>  `Viajando a la ciudad de : ${destino}`;

let viaje;
viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona');

console.log(viaje);