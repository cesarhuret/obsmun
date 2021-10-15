import React, {Component} from "react";
import {Col, Container, Nav, Row } from "react-bootstrap";
import './Home.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { BrowserView, MobileView } from 'react-device-detect';
class Registration extends Component {

  render() {
        return ( 
        <div className="App">
          <MobileView>
            <div style={{position: "relative"}}>
              <img style={{maxWidth: '100%', height: 'auto'}} src='registration.jpg' alt='' />
              <div className="center">
                <h1 className='black' style={{fontSize: '7vh'}}>Registration</h1>
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
          </MobileView>
          <BrowserView>
            <div className='backgroundImage' style={{ backgroundImage: 'url("https://obsmun.org/registration.JPG")'}}/>
            <Parallax pages={1.7} style={{top: '0', left: '0'}}>
            <ParallaxLayer offset={0} speed={0.5}>
              <div className="center">
                <h1 className='black' style={{fontSize: '7vh'}}>Registration</h1>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <Container style={{textAlign: "center"}} fluid>
                <Row className="align-items-center">
                  <Col lg={{span: 6, order: 1}}>
                    <div className="rounded shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                        <Nav.Link className='navlink' href='https://forms.gle/NcXXGsAE5Z2VVAZ1A' target='_blank' style={{fontSize: '3vh'}}>Register as an Individual Delegate</Nav.Link>
                    </div>
                  </Col>
                  <Col lg={{span: 6, order: 2}}>
                    <div className="rounded shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                        <Nav.Link className='navlink' href='https://forms.gle/X25YqoNydeNnc5UWA' target='_blank' style={{fontSize: '3vh'}}>Register as a School</Nav.Link>
                    </div>
                  </Col>
                </Row>
              </Container>
              </ParallaxLayer>
            </Parallax>
          </BrowserView>
        </div>
        )
    }
}

export default Registration;