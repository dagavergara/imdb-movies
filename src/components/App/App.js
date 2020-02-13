import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from "../elements/NotFound/NotFound"
import Movie from "../Movie/Movie"
import Footer from '../elements/Footer/Footer';

const App = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/movie/:movieId" component={Movie} exact/>
                    <Route component={NotFound}/>    
                </Switch>
                <Footer/>   
            </React.Fragment>        
        </BrowserRouter>
    )
}

export default App;