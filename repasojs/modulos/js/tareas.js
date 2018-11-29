//Escribir classes
export default class Tareas {
    constructor(nombre = 'Tareas default', prioridad = null) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        const app = document.querySelector('#app');
        const p = document.createElement('p');
        p.innerHTML = `${this.nombre} tiene una prioridad de ${this.prioridad}`;
        app.appendChild(p);
    }
}

export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
};