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
          <div>
            <img src='https://i.imgur.com/dqAtAv6.png'></img>
            <div className="center">
              <h1 style={{fontSize: '7vh'}}>Registration</h1>
            </div>
          </div>
          <br/>
          <Container style={{textAlign: "center", color: "white"}} fluid>
            <Row>
              <Col>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                    <Nav.Link href='https://forms.gle/NcXXGsAE5Z2VVAZ1A' target='_blank' style={{fontSize: '2vw'}}>Register as an Individual Delegate</Nav.Link>
                </div>
              </Col>
              <Col>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                    <Nav.Link href='https://forms.gle/X25YqoNydeNnc5UWA' target='_blank' style={{fontSize: '2vw'}}>Register as a School</Nav.Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        )
    }
}

export default Registration;