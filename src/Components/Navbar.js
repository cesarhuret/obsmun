import React, {Component} from "react";
import {Navbar, Nav, Container } from 'react-bootstrap'
import '../Pages/Home.css'

class NavComp extends Component {
  render() {
        return ( 
        <div className="App">
            <div className="fixed-top">
                <Navbar bg='none' variant="dark" expand="lg" fixed='top' style={{ position: "sticky", top: 0, background: 'linear-gradient(rgba(12, 47, 104, 1), rgba(12, 47, 84, 1))'}}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src='logo192.png' style={{width: 50, height: 'auto'}} alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='navlink' href="/">Home</Nav.Link>
                        <Nav.Link className='navlink' href="/obs">Our School</Nav.Link>
                        <Nav.Link className='navlink' href="/obsmun">The OBSMUN</Nav.Link>
                        {/* <Nav.Link href="/documents">Documents</Nav.Link> */}
                        <Nav.Link className='navlink' href="/team">Meet The Team</Nav.Link>
                        <Nav.Link className='navlink' href="/registration">Registration</Nav.Link>
                        {/* <Nav.Link href="/sponsors">Partners and Sponsors</Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            <div >
                <Navbar bg='none' variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src='logo192.png' style={{width: 50, height: 'auto'}} alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
                </Navbar>
            </div>
        </div>
        )
    }
}

export default NavComp;