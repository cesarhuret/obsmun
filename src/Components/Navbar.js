import React, {Component} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

class NavComp extends Component {
  render() {
        return ( 
        <div className="App">
            <div className="fixed-top">
                <Navbar bg='none' variant="dark" expand="lg" fixed='top' style={{ position: "sticky", top: 0, background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))'}}>
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
        </div>
        )
    }
}

export default NavComp;