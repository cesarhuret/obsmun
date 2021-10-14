import React, {Component} from "react";
import {Card, Col, Container, Row} from 'react-bootstrap'
import './Home.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { BrowserView, MobileView } from 'react-device-detect';

class Team extends Component {

  render() {
        return ( 
        <div className="App">
          <MobileView>
            <div style={{position: "relative"}}>
              <img style={{maxWidth: '100%', height: 'auto'}} src='obsinside.jpg' alt=''/>
              <div className="center">
                <h1 className='white' style={{fontSize: '7vh'}}>The Team</h1>
              </div>
            </div>
            <br/>
            <Container style={{textAlign: "left", paddingLeft: '5%', paddingRight: '5%'}} fluid>
                  <Row className='justify-content-center'>
                      <Col xs={{span: 12, order: 1}} lg={{span: 2, order: 1}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="pedro.png" />
                              <Card.Body>
                                  <Card.Title style={{color: "white"}}>Pedro Pinho</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Logistics</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chief of Staff</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 2}} lg={{span: 2, order: 2}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="jp.png" />
                              <Card.Body>
                                  <Card.Title className='white'>Joao Pedro Bastos</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Public Relations</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 4}} lg={{span: 2, order: 4}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="lara.png" />
                              <Card.Body>
                                  <Card.Title>Lara Machado</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Communications</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Conference Services Liaison</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 5}} lg={{span: 2, order: 5}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="miguel.png" />
                              <Card.Body>
                                  <Card.Title>Miguel Castro</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Finance</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 2}} lg={{span: 2, order: 6}}>
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="joao.png" />
                              <Card.Body>
                                  <Card.Title>Joao Araujo</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Training</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Secretary General</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                  </Row>
              </Container>
          </MobileView>
          <BrowserView>
          <div className='backgroundImage' style={{ backgroundImage: 'url("https://obsmun.org/obsinside.jpg")'}}/>
          <Parallax pages={2} style={{top: '0', left: '0'}}>
            <ParallaxLayer offset={0} speed={1}>
              <div className="center">
                <h1 className='white' style={{fontSize: '7vh'}}>The Team</h1>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.2} speed={0.5}>
              <Container style={{textAlign: "left", paddingLeft: '5%', paddingRight: '5%'}} fluid>
                    <Row className='justify-content-center'>
                        <Col xs={{span: 12, order: 1}} lg={{span: 2, order: 1}} style={{paddingBottom: 30}}>
                            <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                                <Card.Img variant="top" src="pedro.png" />
                                <Card.Body>
                                    <Card.Title style={{color: "white"}}>Pedro Pinho</Card.Title>
                                    <Card.Subtitle className="mb-2">Head of Logistics</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Chief of Staff</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{span: 12, order: 2}} lg={{span: 2, order: 2}} style={{paddingBottom: 30}}>
                            <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                                <Card.Img variant="top" src="jp.png" />
                                <Card.Body>
                                    <Card.Title className='white'>Joao Pedro Bastos</Card.Title>
                                    <Card.Subtitle className="mb-2">Head of Public Relations</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{span: 12, order: 4}} lg={{span: 2, order: 4}} style={{paddingBottom: 30}}>
                            <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                                <Card.Img variant="top" src="lara.png" />
                                <Card.Body>
                                    <Card.Title>Lara Machado</Card.Title>
                                    <Card.Subtitle className="mb-2">Head of Communications</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Conference Services Liaison</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{span: 12, order: 5}} lg={{span: 2, order: 5}} style={{paddingBottom: 30}}>
                            <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                                <Card.Img variant="top" src="miguel.png" />
                                <Card.Body>
                                    <Card.Title>Miguel Castro</Card.Title>
                                    <Card.Subtitle className="mb-2">Head of Finance</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{span: 12, order: 2}} lg={{span: 2, order: 6}}>
                            <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                                <Card.Img variant="top" src="joao.png" />
                                <Card.Body>
                                    <Card.Title>Joao Araujo</Card.Title>
                                    <Card.Subtitle className="mb-2">Head of Training</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Secretary General</Card.Subtitle>
                                </Card.Body>
                            </Card>
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

export default Team;