import React, {Component} from "react";
import {Navbar, Container} from 'react-bootstrap'

class FootComp extends Component {
  render() {
        return ( 
        <div className="App">
            <Navbar expand="lg">
                <br/>
                <Container style={{float: "left"}}>
                    <Navbar.Brand className='mx-auto' style={{color: 'white'}}>Copyright&nbsp;© OBSMUN 2021</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
        )
    }
}

export default FootComp;