/**
 * @description Parametros por default en las funciones
 * forma function declaration
 * @param nombre
 * @param actividad
 */
function actividad(nombre = 'Walter White', actividad = 'Quimico') {
    console.log(`La persona ${nombre}, está realizando la actividad de ${actividad}`);
}

const actividad2 = function(nombre = 'Walter White', actividad = 'Quimico'){
    console.log(`La persona ${nombre}, está realizando la actividad de ${actividad}`);

};

actividad2('Javier', 'Programar');
actividad2('Javier', 'Hacaer drogas');
