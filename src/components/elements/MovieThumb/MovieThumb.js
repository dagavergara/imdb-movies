import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return(
        <div className="rmdb-moviethumb">
            <img alt="imagen de pelicula" src={props.image}/>
        </div>
    )
}

export default MovieThumb;