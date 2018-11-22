/**
 * Template strings
 */

const nombre = 'javier';
const trabajo = 'Desarrollador Full Stack';


//Concatenar strings javascript ES5
console.log('Nombre: ' + nombre + ' Profesion: ' + trabajo);

//Concatenar strings javascript ES6
console.log(`Nombre: ${nombre}  Profesion: ${trabajo}`);


/**
 * Concatenar multiples lineas con
 * templates literals
 * @type {Element}
 */
const contenedorApp = document.querySelector('#app');
//Version ES6
let html = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Profesion: ${trabajo}</li>
    </ul>`;

contenedorApp.innerHTML = html;