import React, {Component} from "react";
import {Navbar, Container} from 'react-bootstrap'

class FootComp extends Component {
  render() {
        return ( 
        <div className="App">
            <div className="fixed-bottom">  
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Copyright&nbsp;© OBSMUN 2021</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        </div>
        )
    }
}

export default FootComp;