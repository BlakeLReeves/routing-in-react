import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import FilmCard from './FilmCard';

class Films extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://ghibliapi.herokuapp.com/films');
            let films = await res.json();
            this.setState({ films });
        } catch (e) {
            console.log(e);
        }
    }

    renderFilms() {
        return this.state.films.map(film => {
            return <FilmCard key={film.id} film={film} />
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>{this.renderFilms()}</Col>
                </Row>
            </Container>
        );
    }
}

export default Films;