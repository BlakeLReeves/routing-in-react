import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import LocationCard from './LocationCard';

class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://ghibliapi.herokuapp.com/locations');
            let locations = await res.json();
            this.setState({ locations });
        } catch (e) {
            console.log(e);
        }
    }

    renderLocations() {
        return this.state.locations.map(location=> {
            return <LocationCard key={location.id} location={location} />
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>{this.renderLocations()}</Col>
                </Row>
            </Container>
        );
    }
}

export default Locations;