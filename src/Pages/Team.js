import React, {Component} from "react";
import {Card, Col, Container, Row} from 'react-bootstrap'
import './Home.css'
import { isDesktop, isMobile } from 'react-device-detect';

class Team extends Component {

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
        { this.mobile ? 
          <>
            <div style={{position: "relative"}}>
              <img style={{maxWidth: '100%', height: 'auto'}} src='obsinside.jpg' alt=''/>
              <div className="center">
                <h1 className='white' style={{fontSize: '7vh'}}>The Team</h1>
              </div>
            </div>
            <br/>
            <Container style={{textAlign: "left", paddingBlock: '10%', paddingInline: '10%'}} fluid>
                  <Row className='justify-content-center'>
                      <Col xs={{span: 12, order: 1}} lg={{span: 2, order: 1}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark" style={{border: 'none'}}>
                              <Card.Img variant="top" src="pedro.jpg" />
                              <Card.Body>
                                  <Card.Title style={{color: "white"}}>Pedro Pinho</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Logistics</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chief of Staff</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 2}} lg={{span: 2, order: 2}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="jp.jpg" />
                              <Card.Body>
                                  <Card.Title className='white'>Joao Pedro Bastos</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Public Relations</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 4}} lg={{span: 2, order: 4}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark"  style={{border: 'none'}}>
                              <Card.Img variant="top" src="lara.jpg" />
                              <Card.Body>
                                  <Card.Title>Lara Machado</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Communications</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Conference Services Liaison</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 5}} lg={{span: 2, order: 5}} style={{paddingBottom: 30}}>
                          <Card text='white' bg="dark"  style={{border: 'none'}}>
                              <Card.Img variant="top" src="miguel.jpg" />
                              <Card.Body>
                                  <Card.Title>Miguel Castro</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Finance</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 6}} lg={{span: 2, order: 6}}>
                          <Card text='white' bg="dark"  style={{border: 'none'}}>
                              <Card.Img variant="top" src="joao.jpg" />
                              <Card.Body>
                                  <Card.Title>Joao Araujo</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Training</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Secretary General</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                  </Row>
              </Container>
          </>
            :
          <>
          <div className='backgroundImageFull' style={{ backgroundImage: 'url("https://i.imgur.com/fLbkrHm.jpg")'}}>
            <Container style={{textAlign: "center", paddingLeft: '5%', paddingRight: '5%'}} fluid>
                <Row style={{paddingTop: '10%', paddingLeft: '10%'}}>
                    <div data-aos="fade-up">
                        <h1 style={{fontSize: '7vh'}}>The Team</h1>
                    </div>
                </Row>
                <Row className='justify-content-center' style={{paddingTop: '10%'}}>
                      <Col xs={{span: 12, order: 1}} lg={{span: 2, order: 1}} style={{paddingBottom: 30}} data-aos="fade-down">
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="pedro.jpg" />
                              <Card.Body>
                                  <Card.Title style={{color: "white"}}>Pedro Pinho</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Logistics</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chief of Staff</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 2}} lg={{span: 2, order: 2}} style={{paddingBottom: 30}} data-aos="fade-down">
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="jp.jpg" />
                              <Card.Body>
                                  <Card.Title className='white'>Joao Pedro Bastos</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Public Relations</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 4}} lg={{span: 2, order: 4}} style={{paddingBottom: 30}} data-aos="fade-down">
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="lara.jpg" />
                              <Card.Body>
                                  <Card.Title>Lara Machado</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Communications</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Conference Services Liaison</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 5}} lg={{span: 2, order: 5}} style={{paddingBottom: 30}} data-aos="fade-down">
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="miguel.jpg" />
                              <Card.Body>
                                  <Card.Title>Miguel Castro</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Finance</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Chair of Committee</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={{span: 12, order: 6}} lg={{span: 2, order: 6}} data-aos="fade-down">
                          <Card text='white' bg="dark" className='cardhover' style={{border: 'none'}}>
                              <Card.Img variant="top" src="joao.jpg" />
                              <Card.Body>
                                  <Card.Title>Joao Araujo</Card.Title>
                                  <Card.Subtitle className="mb-2">Head of Training</Card.Subtitle>
                                  <Card.Subtitle className="mb-2 text-muted">Secretary General</Card.Subtitle>
                              </Card.Body>
                          </Card>
                      </Col>
                  </Row>
              </Container>
              </div>
          </>
        }
        </div>
        )
    }
}

export default Team;