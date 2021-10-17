import React, {Component} from "react";
import {Col, Container, Nav, Row } from "react-bootstrap";
import './Home.css'
import { isMobile, isDesktop } from 'react-device-detect';
class Registration extends Component {

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
        <div className="App">
            <div className='backgroundImageFull' style={{ backgroundImage: 'url("https://obsmun.org/registration.JPG")'}}>
              <Container style={{textAlign: "center", paddingLeft: '5%', paddingRight: '5%'}} fluid>
                <Row style={{paddingTop: '15%', paddingLeft: '10%'}}>
                    <div data-aos="fade-up">
                        <h1 className='white' style={{fontSize: '7vh'}}>Register</h1>
                    </div>
                </Row>
                <Row className="align-items-center" style={{paddingTop: '5%'}}>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 1}} style={{paddingBottom: '10px'}} data-aos="fade-down">
                      <div className="shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(5, 5, 5, 0.9)', borderRadius: '1rem'}}>
                          <Nav.Link className="navlink" href='https://forms.gle/NcXXGsAE5Z2VVAZ1A' target='_blank' style={{fontSize: '3vh'}}>Register as an Individual Delegate</Nav.Link>
                      </div>
                    </Col>
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}} data-aos="fade-up">
                      <div className="shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(5, 5, 5, 0.9)', borderRadius: '1rem'}}>
                          <Nav.Link className="navlink" href='https://forms.gle/X25YqoNydeNnc5UWA' target='_blank' style={{fontSize: '3vh'}}>Register as a School</Nav.Link>
                      </div>
                    </Col>
                </Row>
              </Container>
            </div>
        </div>
        )
    }
}

export default Registration;