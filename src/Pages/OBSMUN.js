import React, {Component} from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { BrowserView, MobileView } from 'react-device-detect';

class OBSMUN extends Component {

  render() {
        return ( 
        <div className="App">
          <MobileView>
            <div style={{position: "relative"}}>
              <img style={{maxWidth: '100%', height: 'auto'}} src='exobsmun.png' alt=''/>
              <div className="center">
                <h1 className='white' style={{fontSize: '7vh'}}>The OBSMUN</h1>
              </div>
            </div>
            <br/>
            <Container style={{textAlign: "left"}} fluid>
              <Row className="align-items-center">
                <Col xs={{span: 12, order: 2}} lg={{span: 8, order: 1}}>
                  <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                      <h1>What is the OBSMUN?</h1>
                      <p>During the OBSMUN 2022 conference, delegates will have the distinct opportunity to develop their knowledge and also, skills alongside enthusiastic delegates from around the globe! In the majority of OBSMUN’s committees, a clause-by-clause procedure shall have ensued; delegates may prepare draft clauses and deliberate upon them during committee sessions. Thereafter, voting on their adoption and formulating a final resolution with the inclusion of numerous clauses.</p>
                  </div>
                </Col>
                <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 2}}>
                  <div className="p-2 cardhover"><img className="rounded img-fluid shadow-lg" src="obsmuncouncil.png" alt=''/></div>
                </Col>
              </Row>
              <Row className="align-items-center">
                  <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 1}}>
                      <div className="p-2 cardhover"><img className="rounded img-fluid shadow-lg" src="natixis.png" alt=''/></div>
                  </Col>
                  <Col xs={{span: 12, order: 2}} lg={{span: 8, order: 2}}>
                      <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                          <h1>When and Where?</h1>
                          <p>It is with immense pleasure that we can announce OBSMUN 2022 will take place from the 3rd to the 5th of February 2022! We’re hoping we will be able to provide you with the best Mun experience possible at our lovely city in Portugal.</p>
                          <p>The event will take place in the international division of the French Investment Bank Natixis at Porto. This location will be able to provide you with the best delegate experience possible and we are sure you will enjoy its central location. Nearby you can find one of Porto’s most prominent streets “Rua Santa Catarina”, which will lead you to directly to some of the most beautiful landmarks.</p>
                      </div>
                  </Col>
              </Row>
            </Container>
            <Col style={{padding: '1%'}}>
                      <iframe  className="shadow-lg rounded" title='iframe' style={{ overflow: "hidden", background:'none', width:'80vh', height:'40vh', maxWidth: '90%', border: 'none'}} src="https://maps.google.com/maps?q=Natixis,%20Rua%20de%20Santos%20Pousada%20220,%204000-478%20Porto&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </Col>
          </MobileView>
          <BrowserView>
            <div className='backgroundImage' style={{ backgroundImage: 'url("https://obsmun.org/exobsmun.png")'}}/>
            <Parallax pages={3.7} style={{top: '0', left: '0'}}>
              <ParallaxLayer offset={0} speed={0.5}>
                <div className="center">
                  <h1 className='white' style={{fontSize: '7vh'}}>The OBSMUN</h1>
                </div>
              </ParallaxLayer>
                <Container style={{textAlign: "left"}} fluid>
                <ParallaxLayer offset={1} speed={0.2}>
                  <Row className="align-items-center">
                    <Col xs={{span: 12, order: 2}} lg={{span: 8, order: 1}}>
                      <div className="rounded shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
                          <h1>What is the OBSMUN?</h1>
                          <p>During the OBSMUN 2022 conference, delegates will have the distinct opportunity to develop their knowledge and also, skills alongside enthusiastic delegates from around the globe! In the majority of OBSMUN’s committees, a clause-by-clause procedure shall have ensued; delegates may prepare draft clauses and deliberate upon them during committee sessions. Thereafter, voting on their adoption and formulating a final resolution with the inclusion of numerous clauses.</p>
                      </div>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 2}}>
                      <div className="p-2 cardhover"><img className="rounded img-fluid shadow-lg" src="obsmuncouncil.png" alt=''/></div>
                    </Col>
                  </Row>
                  </ParallaxLayer>
                  <ParallaxLayer offset={2} speed={0.2}>
                    <Row className="align-items-center">
                        <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 1}}>
                            <div className="p-2 cardhover"><img className="rounded img-fluid shadow-lg" src="natixis.png" alt=''/></div>
                        </Col>
                        <Col xs={{span: 12, order: 2}} lg={{span: 8, order: 2}}>
                            <div className="rounded shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
                                <h1>When and Where?</h1>
                                <p>It is with immense pleasure that we can announce OBSMUN 2022 will take place from the 3rd to the 5th of February 2022! We’re hoping we will be able to provide you with the best Mun experience possible at our lovely city in Portugal.</p>
                                <p>The event will take place in the international division of the French Investment Bank Natixis at Porto. This location will be able to provide you with the best delegate experience possible and we are sure you will enjoy its central location. Nearby you can find one of Porto’s most prominent streets “Rua Santa Catarina”, which will lead you to directly to some of the most beautiful landmarks.</p>
                            </div>
                        </Col>
                    </Row>
                  </ParallaxLayer>
                </Container>
                <ParallaxLayer offset={3} speed={0.2}>
                  <Col style={{padding: '1%'}}>
                      <iframe  className="shadow-lg rounded" title='iframe' style={{ overflow: "hidden", background:'none', width:'80vh', height:'40vh', maxWidth: '90%', border: 'none'}} src="https://maps.google.com/maps?q=Natixis,%20Rua%20de%20Santos%20Pousada%20220,%204000-478%20Porto&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                  </Col>
                </ParallaxLayer>
            </Parallax>
          </BrowserView>
        </div>
        )
    }
}

export default OBSMUN;