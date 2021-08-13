import React, {Component} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

class FootComp extends Component {
  render() {
        return ( 
        <div className="App">
            <Container>
            <Navbar variant='dark'>
                <Nav.Link href={"mailto:obsmun@obs.edu.pt"}>obsmun@obs.edu.pt</Nav.Link>
                <Navbar.Text>Address:  Rua Da Cerca, 338, Porto, Portugal</Navbar.Text>
                <Nav.Link href="https://www.instagram.com/obsmun2022/" target='_blank'>Instagram</Nav.Link>
                {/* <Nav.Link>Twitter</Nav.Link> */}
            </Navbar>
            <p style={{ color: "gray"}}>Photos used in this website are not property of OBSMUN; they are copyrighted by their respective owner</p>
            </Container>
        </div>
        )
    }
}

export default FootComp;