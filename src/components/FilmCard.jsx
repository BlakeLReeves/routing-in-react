import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const FilmCard = (props) => {
    return (
        <Col className="p-2" sm="12">
            <Card className="bg-light">
                <CardBody>
                    <CardTitle
                    className="border border-dark border-top-0 border-left-0 border-right-0
                    font-weight-bold"
                    >Title: {props.film.title}
                    </CardTitle>
                    <CardText><span className="font-weight-bold">Description: </span>{props.film.description}</CardText>
                    <CardSubtitle
                    className="border border-dark border-bottom-0 border-left-0 border-right-0"
                    ><Link to={`/singlefilm/${props.film.id}`} className="btn btn-primary mt-2">Get Details</Link>
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
}

export default FilmCard;