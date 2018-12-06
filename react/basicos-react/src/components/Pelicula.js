import React, {Component} from 'react';

class Pelicula extends Component {
    render() {
        let {title, vote_average, release_date, genre_ids, poster_path} = this.props.pelicula;
        return (
            <div>
                <ul>
                    <li>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
                    </li>
                    <li>Titulo: <strong>{title}</strong></li>
                    <li>Categorías: <strong>{genre_ids}</strong></li>
                    <li>Votos IMDB: <strong>{vote_average}</strong></li>
                    <li>Fecha de lanzamiento: <strong>{release_date.split('-')[0]}</strong></li>
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Pelicula;