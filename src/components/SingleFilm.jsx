import React, { Component } from 'react';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

class SingleFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleFilm: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`);
            let singleFilm = await res.json();
            this.setState({ singleFilm });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return(
            <Col className="p-2" sm="12">
                <Card className="bg-light">
                    <CardBody>
                        <CardTitle
                        className="border border-dark border-top-0 border-left-0 border-right-0
                        font-weight-bold"
                        >Title: {this.state.singleFilm.title}
                        </CardTitle>
                        <CardText><span className="font-weight-bold">Description: </span>{this.state.singleFilm.description}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default SingleFilm;