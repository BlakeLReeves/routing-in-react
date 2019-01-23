import React from 'react';
import { Jumbotron } from 'reactstrap';
import logo from '../assets/logo.png'

const Home = (props) => {
    return (
        <div>
            <Jumbotron>
                <img className="mx-auto d-block" src={logo} alt="Studio Ghibli" />
                <h1 className="display-3">Welcome:</h1>
                <p className="lead">Click on a button in the navagation bar in order to navigate the site.</p>
            </Jumbotron>
        </div>
    );
};

export default Home;
