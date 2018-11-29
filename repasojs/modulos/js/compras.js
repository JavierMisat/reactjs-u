import Tareas from "./tareas.js";

export default class ComprasPendientes extends Tareas {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`Y una cantidad de ${this.cantidad}`);
    }
}