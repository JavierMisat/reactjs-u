/**
 * @description Object Literal
 * @type {string}
 */
let persona = {
    nombre: 'Javier',
    profesion: 'Developer',
    edad: 500,
    getDatos: () =>{
        return `Nombre: ${persona.nombre} - Profesion: ${persona.profesion}`;
    }
};

console.log(persona['nombre']);

//Object constructions

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Crear una nueva tarea
const tarea1 = new Tarea('Aprendiendo JS', 'alta');
const tarea2 = new Tarea('Aprendiendo NODE', 'alta');

console.log(tarea1, tarea2);