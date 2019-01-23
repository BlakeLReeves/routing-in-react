import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const VehicleCard = (props) => {
    return (
        <Col className="p-2" sm="12">
            <Card className="bg-light">
                <CardBody>
                    <CardTitle 
                    className="border border-dark border-top-0 border-left-0 border-right-0
                    font-weight-bold"
                    >{props.vehicle.name}
                    </CardTitle>
                    <CardText><span className="font-weight-bold">Description: </span>{props.vehicle.description}</CardText>
                    <CardText><span className="font-weight-bold">Vehicle Class: </span>{props.vehicle.vehicle_class}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default VehicleCard;