import React, {Component} from "react";
import {Navbar, Nav, Container } from 'react-bootstrap'
import '../Pages/Home.css'

class NavComp extends Component {
  render() {
        return ( 
        <div className="App">
            <div className="fixed-top">
                <Navbar bg='none' variant="dark" expand="lg" fixed='top' style={{ position: "sticky", top: 0, backgroundColor: 'rgba(12, 47, 84, 0.7)'}}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src='logo192.png' style={{width: 50, height: 'auto'}} alt='' />
                    </Navbar.Brand>
                        <Nav.Link className='navlink2' href={"mailto:obsmun2022@gmail.com"}>
                            <img src='/email.png' style={{height: '2em', opacity: '0.5'}}/>
                        </Nav.Link>
                        <Nav.Link className='navlink2' href="https://www.instagram.com/obsmun2022/">
                            <img src='/instagram.png' style={{height: '1.7em', opacity: '0.5'}}/>
                        </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='navlink2' href="/">Home</Nav.Link>
                        <Nav.Link className='navlink2' href="/obs">Our School</Nav.Link>
                        <Nav.Link className='navlink2' href="/obsmun">The OBSMUN</Nav.Link>
                        {/* <Nav.Link href="/documents">Documents</Nav.Link> */}
                        <Nav.Link className='navlink2' href="/team">The Team</Nav.Link>
                        <Nav.Link className='navlink2' href="/registration">Registration</Nav.Link>
                        {/* <Nav.Link href="/sponsors">Partners and Sponsors</Nav.Link> */}
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