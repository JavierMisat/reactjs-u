//Areglos y .map

const carrito = ['Producto 1','Producto 2','Producto 3',];

const appContenedor = document.querySelector('#app');
const ul = document.createElement('ul');

/**
 * El map hace las veces de foreach con la diferencia
 * que conserva el arreglo original y devuelve un nuevo arreglo
 */
carrito.map(producto =>{
    let li = document.createElement('li');
    li.innerText = producto;
    ul.appendChild(li);
});
appContenedor.appendChild(ul);


/**
 * Object keys
 */

const persona = {
    nombre: 'javier',
    profesion: 'Developer',
    edad: 50
};

const {nombre} = persona;

console.log(nombre);

/**
 * Object Keys devuelve las llavesde un objeto
 * para comprobar que una llave existe es importante
 */
console.log(Object.keys(persona));
