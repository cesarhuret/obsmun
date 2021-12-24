import React, {Component} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../Pages/Home.css'
import { isDesktop, isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";

class NavComp extends Component {
    mobile = false;
    constructor() {
      super()
      if(isMobile) {
        this.mobile = true
      } else if(isDesktop) {
        this.mobile = false
      }
    }

  render() {
        return ( 
        <div>
            <div className="fixed-top">
                <Navbar bg='none' variant="light" expand="lg" fixed='top' style={{ position: "sticky", top: 0, backgroundColor: 'white', paddingBottom: '0'}}>
                <Container style={{paddingBottom: '0'}}>
                    <Navbar.Brand href="/">
                        <img src='logo192.png' style={{width: 50, height: 'auto'}} alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{fontFamily: 'Poppins', paddingBottom: '0'}}>
                        <Link className='navlink2 bottomBorder' to='/'>Home</Link>
                        <Link className='navlink2 bottomBorder' to='/obs'>Our School</Link>
                        <Link className='navlink2 bottomBorder' to='/obsmun'>The OBSMUN</Link>
                        {/* <Nav.Link href="/documents">Documents</Nav.Link> */}
                        <Link className='navlink2 bottomBorder' to='/team'>The Team</Link>
                        <Link className='navlink2 bottomBorder' to='/registration'>Registration</Link>
                        <NavDropdown className="navlink2 bottomBorder" title="Contacts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.instagram.com/obsmun2022/">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="mailto:obsmun@obs.edu.pt">Email</NavDropdown.Item>
                        </NavDropdown>
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