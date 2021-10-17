import React, {Component} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

class FootComp extends Component {
  render() {
        return ( 
        <div className="App">
            <Container style={{padding: 30, position: 'relative'}}>
            <Navbar variant='dark' className='justify-content-center'>
                <Nav.Link className='navlink' href={"mailto:obsmun2022@gmail.com"}>Email</Nav.Link>
                <Nav.Link className='navlink' href="https://www.instagram.com/obsmun2022/" target='_blank'>Instagram</Nav.Link>
                <Nav.Link className='navlink' href="https://m.facebook.com/obsmun2022/" target='_blank'>Facebook</Nav.Link>
            </Navbar>
            <p style={{ color: "gray"}}>Address:  Rua Da Cerca, 338, Porto, Portugal</p>
            <p style={{ color: "gray"}}>Photos used in this website are not property of OBSMUN; they are copyrighted by their respective owner</p>
            </Container>
        </div>
        )
    }
}

export default FootComp;