//Creando funciones

/**
 * Type : Function declarations
 * @param nombre
 */

//No importa que la funcion sea declarada antes sigue funcionando
saludar('Javier');
saludar('Rodrigo');
saludar('Cristian');
saludar('Daniel');

function saludar(nombre) {
    let div = document.querySelector('#app');
    let lista = document.querySelector('#lista');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    if (lista) {
        li.innerText = nombre;
        lista.appendChild(li);
    } else {
        ul.setAttribute('id', 'lista');
        li.innerText = nombre;
        ul.appendChild(li);
        div.appendChild(ul);
    }
}



/**
 * Type: Function expressions
 * @param nombreCliente
 */
const cliente = function (nombreCliente) {
    console.log(`Mostrando datos del cliente ${nombreCliente}`);
};

//En function expressions siempre hay que llamar
// a la funcion despues de crearla ya que actua como una variable
cliente('mr lee');