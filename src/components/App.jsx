import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navb from './Navb';
import Home from './Home';
import Foot from './Foot';
import Films from './Films';
import People from './People';
import Locations from './Locations';
import Vehicles from './Vehicles';
import SingleFilm from './SingleFilm';

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navb />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/singlefilm/:id" component={SingleFilm} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/locations" component={Locations} />
                        <Route exact path="/vehicles" component={Vehicles} />
                    </Switch>
                    <Foot />
                </>
            </Router>
        );
    }
}

export default App;