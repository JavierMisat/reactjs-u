/**
 * Metodos o funciones en objeto
 */

const persona = {
    nombre: 'Javier',
    trabajo: 'Developer',
    edad: 26,
    musicaFavorita: ['vallenato', 'rock', 'pop', 'salsa'],
    empleado: false,
    mostrarInfo: function () {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}
        le gusta la musica ${this.musicaFavorita.toString()}`);
    }
};

persona.mostrarInfo(); 