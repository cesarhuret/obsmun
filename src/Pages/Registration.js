import React, {Component} from "react";
import {Col, Container, Nav, Row } from "react-bootstrap";
import './Home.css'

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
        return ( 
        <div className="App">
          <div style={{position: "relative"}}>
            <img style={{maxWidth: '100%', height: 'auto'}} src='obsregistration.png' alt='' />
            <div className="center">
              <h1 className='white' style={{fontSize: '7vh'}}>Registration</h1>
            </div>
          </div>
          <br/>
          <Container style={{textAlign: "center"}} fluid>
            <Row className="align-items-center">
              <Col lg={{span: 6, order: 1}}>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                    <Nav.Link className='navlink' href='https://forms.gle/NcXXGsAE5Z2VVAZ1A' target='_blank' style={{fontSize: '3vh'}}>Register as an Individual Delegate</Nav.Link>
                </div>
              </Col>
              <Col lg={{span: 6, order: 2}}>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                    <Nav.Link className='navlink' href='https://forms.gle/X25YqoNydeNnc5UWA' target='_blank' style={{fontSize: '3vh'}}>Register as a School</Nav.Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        )
    }
}

export default Registration;