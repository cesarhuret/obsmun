import React, {Component} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

class NavComp extends Component {
  render() {
        return ( 
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">OBSMUN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/obs">Our School</Nav.Link>
                    <Nav.Link href="/documents">Documents</Nav.Link>
                    <Nav.Link href="/team">Meet The Team</Nav.Link>
                    <Nav.Link href="/registration">Registration</Nav.Link>
                    <Nav.Link href="/sponsors">Partners and Sponsors</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        )
    }
}

export default NavComp;