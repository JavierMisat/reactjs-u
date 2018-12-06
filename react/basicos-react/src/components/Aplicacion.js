import React, {Component} from 'react';
import Header from "./Header";
import Peliculas from "./Peliculas";
import Footer from "../Footer";
import Pelicula from "./Pelicula";

class Aplicacion extends Component {

    /**
     * @description Hay dos formas de trabajar con el state una es con el constructor
     * y otra que quita el constructor
     */

        // constructor(props) {
        //     super(props);
        //     this.state = {
        //         productos: [
        //             {nombre: 'Libro', precio: 3000},
        //             {nombre: 'Maleta', precio: 2000},
        //             {nombre: 'Disco', precio: 800},
        //             {nombre: 'WalkMan', precio: 5000},
        //         ]
        //     };
        // }

        // state = {
        //     productos: [
        //         {nombre: 'Libro', precio: 3000},
        //         {nombre: 'Maleta', precio: 2000},
        //         {nombre: 'Disco', precio: 800},
        //         {nombre: 'WalkMan', precio: 5000},
        //     ]
        // };

    state = {
        peliculas: []
    };

    componentDidMount() {
        this.consultaAPI()
            .then(res => res.resPeliculas.results)
            .then(res => {
                this.setState(
                    {
                        peliculas: res
                    }
                );
            });
    }

    async consultaAPI() {
        const urlApi = `https://api.themoviedb.org/3/movie/top_rated?&api_key=e237402b86941fee4a4fbc87710062ff&language=es-CO&page=1`;
        //Se hace el request con el API FETCH
        const consultaApi = await fetch
        (urlApi);
        const resPeliculas = await consultaApi.json();
        return {
            resPeliculas
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    titulo='Nuestra Tienda Virtual'/>
                <Peliculas
                peliculas={this.state.peliculas}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Aplicacion;