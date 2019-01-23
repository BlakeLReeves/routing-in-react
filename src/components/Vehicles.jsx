import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import VehicleCard from './VehicleCard';

class Vehicles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://ghibliapi.herokuapp.com/vehicles');
            let vehicles = await res.json();
            this.setState({ vehicles });
        } catch (e) {
            console.log(e);
        }
    }

    renderVehicles() {
        return this.state.vehicles.map(vehicle=> {
            return <VehicleCard key={vehicle.id} vehicle={vehicle} />
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>{this.renderVehicles()}</Col>
                </Row>
            </Container>
        );
    }
}

export default Vehicles;