import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class Navb extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Studio Ghibli</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/"><button className="btn btn-primary">Go Home</button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/films"><button className="btn btn-primary ml-1">View Films</button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/people"><button className="btn btn-primary ml-1">View People</button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/locations"><button className="btn btn-primary ml-1">View Locations</button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/vehicles"><button className="btn btn-primary ml-1">View Vehicles</button></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navb;