import React, {Component} from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {
    render() {
        return (
            <div>
                <h2>Listado de películas</h2>

                {/*Object.keys(this.props.productos).map(key => (
                    <Producto
                        key={key}
                        producto={this.props.productos[key]}/>
                ))*/}

                {this.props.peliculas.map((pelicula, key) =>(
                    <Pelicula
                        key={key}
                        pelicula={pelicula}/>
                ))}

            </div>
        );
    }
}

export default Peliculas;