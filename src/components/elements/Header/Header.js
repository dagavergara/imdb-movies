import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to="/">
                    <img className="rmdb-logo" src="./images/film.png" alt="logo"/>
                </Link>
                <img className="rmdb-tmdb-title" src="./images/Cinema-PNG.png" alt="logo"/>
                <img className="rmdb-tmdb-logo" src="./images/the_movie_db.png" alt="logo"/>
            </div>            
        </div>
    )
}

export default Header;