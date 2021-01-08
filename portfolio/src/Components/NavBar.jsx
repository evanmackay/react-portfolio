import React from 'react';
import { Navbar, Nav, NavDropdown, Col, Container } from 'react-bootstrap';

function NavBar() {
    return(
        <Container fluid>
            <Col fluid>
                <Navbar bg="light" expand="lg" id="navbar">
                    <Navbar.Brand href="/">Evan Mackay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <NavDropdown title="Social Media" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://github.com/evanmackay">Github</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/evan-mackay-a20792a0/">LinkedIn</NavDropdown.Item>
                                <NavDropdown.Item href="https://twitter.com/evan_mackay">Twitter</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Container>

    )
}

export default NavBar
