import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const LocationCard = (props) => {
    return (
        <Col className="p-2" sm="12">
            <Card className="bg-light">
                <CardBody>
                    <CardTitle 
                    className="border border-dark border-top-0 border-left-0 border-right-0
                    font-weight-bold"
                    >{props.location.name}
                    </CardTitle>
                    <CardText><span className="font-weight-bold">Climate: </span>{props.location.climate}</CardText>
                    <CardText><span className="font-weight-bold">Terrain: </span>{props.location.terrain}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default LocationCard;