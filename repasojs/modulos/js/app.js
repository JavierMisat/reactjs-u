import Tareas from "./tareas.js";
import ComprasPendientes from './compras.js';

const tarea1 = new Tareas('Aprender Javascript', 'Urgente');

tarea1.mostrar();

const pendiente1 = new ComprasPendientes('Jabon', 'urgente', 20);
pendiente1.mostrar();