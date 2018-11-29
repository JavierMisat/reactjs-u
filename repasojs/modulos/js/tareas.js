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

class ComprasPendientes extends Tareas {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`Y una cantidad de ${this.cantidad}`);
    }
}

export const crearTarea = (tarea, urgencia) =>{
  return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
};

// //Crear objetos
// let tarea1 = new Tareas('Estudiar', 'Alta');
// let tarea2 = new Tareas('Aprender Javascript', 'Alta');
// let tarea3 = new Tareas('Terminar pagina', 'Alta');
// let tarea4 = new Tareas('ALmorzar', 'Alta');
//
// tarea1.mostrar();
// tarea2.mostrar();
// tarea3.mostrar();
// tarea4.mostrar();
//
// //Compras
// export  let compra1 = new ComprasPendientes('Jabon', 'Urgente', 10);
// compra1.mostrar();

