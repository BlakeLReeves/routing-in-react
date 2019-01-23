import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import PeopleCard from './PeopleCard';

class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://ghibliapi.herokuapp.com/people');
            let people = await res.json();
            this.setState({ people });
        } catch (e) {
            console.log(e);
        }
    }

    renderPeople() {
        return this.state.people.map(person=> {
            return <PeopleCard key={person.id} person={person} />
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>{this.renderPeople()}</Col>
                </Row>
            </Container>
        );
    }
}

export default People;