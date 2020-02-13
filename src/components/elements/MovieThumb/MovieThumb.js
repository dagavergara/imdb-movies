import React from 'react';
import {Link} from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return(
        <div className="rmdb-moviethumb">
            {props.clickable ?
                <div>
                    <Link to={{ pathname: `/movie/${props.movieId}`, movieName:`${props.movieSpanish}`}}>
                        <img alt="imagen de pelicula" src={props.image} />
                    </Link>
                        <h4 className="rmdb-movie-name">{props.movieSpanish}</h4>                    
                </div>
                :
                <div>
                    <img alt="imagen de pelicula" src={props.image}/>                    
                </div>               
            }             
        </div>
    )
}

export default MovieThumb;