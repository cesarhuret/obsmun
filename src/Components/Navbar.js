import React, {Component} from "react";
import {Navbar, Nav, Container } from 'react-bootstrap'
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
                        <Nav.Link className='navlink2' href={"mailto:obsmun2022@gmail.com"}>
                            <img src='/email.png' style={{height: '2em', opacity: '0.5'}}/>
                        </Nav.Link>
                        <Nav.Link className='navlink2' href="https://www.instagram.com/obsmun2022/" target='_blank'>
                            <img src='/instagram.png' style={{height: '1.7em', opacity: '0.5'}}/>
                        </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{fontFamily: 'Poppins', paddingBottom: '0'}}>
                        <Link className='navlink2 bottomBorder' to='/'>Home</Link>
                        <Link className='navlink2 bottomBorder' to='/obs'>Our School</Link>
                        <Link className='navlink2 bottomBorder' to='/obsmun'>The OBSMUN</Link>
                        {/* <Nav.Link href="/documents">Documents</Nav.Link> */}
                        <Link className='navlink2 bottomBorder' to='/team'>The Team</Link>
                        <Link className='navlink2 bottomBorder' to='/registration'>Registration</Link>
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