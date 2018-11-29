

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

// console.log(persona['nombre']);
//
// const  mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
// console.log(mostrarCliente);
// //Object constructions

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function () {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
};

//Crear una nueva tarea
const tarea1 = new Tarea('Aprendiendo JS', 'alta');

console.log(tarea1.mostrarInformacionTarea());