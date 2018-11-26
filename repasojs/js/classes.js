//Escribir classes
class Tarea{
    constructor(nombre = 'Tarea default', prioridad = null) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        const app = document.querySelector('#app');
        const p = document.createElement('p');
        p.innerHTML = `${this.nombre} tiene una prioridad de ${this.prioridad}`;
        app.appendChild(p);
    }
}


//Crear objetos
let tarea1 = new Tarea('Estudiar', 'Alta');
let tarea2 = new Tarea('Aprender Javascript', 'Alta');
let tarea3 = new Tarea('Terminar pagina', 'Alta');
let tarea4 = new Tarea('ALmorzar', 'Alta');

tarea1.mostrar();
tarea2.mostrar();
tarea3.mostrar();
tarea4.mostrar();
