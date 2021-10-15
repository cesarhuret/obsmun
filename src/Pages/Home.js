import React, {Component} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { BrowserView, MobileView } from 'react-device-detect';

class Home extends Component {

  render() {
        return ( 
        <div className="App">
          <MobileView>
          <div style={{position: "relative"}}>
            <img style={{maxWidth: '100%', height: 'auto'}} src='https://i.imgur.com/dqAtAv6.png' alt=''/>
            <div className="homecenter">
              <h1 className='white' style={{fontSize: '5vw'}}>Oporto British School</h1>
              <h2 className='white' style={{fontSize: '3vw'}}>Model United Nations</h2>
              <h3 className='white' style={{fontSize: '2vw'}}>3rd to 5th February 2022</h3>
            </div>
          </div>
          <br/>
          <Container style={{textAlign: "left"}} >
            <Row className="align-items-center">
              <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                  <h1>Oporto British School</h1>
                  <p>The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.</p>
                  <Button href="/obs">More Info</Button>
                </div>
              </Col>
              <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                <div className="p-5"><img className="rounded img-fluid shadow-lg" src="obscampus.jpg" alt=''/></div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 1}}>
                <div className="p-5"><img className="rounded img-fluid shadow-lg" src="munwaterbottle.png" alt=''/></div>
              </Col>
              <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}}>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                  <h1>2022 OBSMUN Conference</h1>
                  <p>We are glad to present the OBSMUN 2022 Conference. We hope this will provide you with the opportunity to improve your public speaking skills, whilst meeting new people and making new connections. See you there!</p>
                  <Button href="/obsmun">More Info</Button>
                </div>
              </Col>
            </Row>
          </Container>
          {/* <Container>
            <h2>Our Partners</h2>
            <br/>
            <Row>
              <Col>
                <img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/>
              </Col>
              <Col>
                <img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/>
              </Col>
              <Col>
                <img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/>
              </Col>
            </Row>
          </Container> */}
          {/* <CardComp></CardComp> */}
          </MobileView>
          <BrowserView>
          <div className='backgroundImage' style={{ backgroundImage: 'url("https://i.imgur.com/dqAtAv6.png")'}}/>
            <Parallax pages={1.9} style={{top: '0', left: '0'}}>
              <ParallaxLayer offset={0} speed={0.5}>
                  <div className="homecenter">
                    <h1 className='white' style={{fontSize: '5vw'}}>Oporto British School</h1>
                    <h2 className='white' style={{fontSize: '3vw'}}>Model United Nations</h2>
                    <h3 className='white' style={{fontSize: '2vw'}}>3rd to 5th February 2022</h3>
                  </div>
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.4}>
                <Container style={{textAlign: "left"}}>
                  <Row className="align-items-center">
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                      <div className="rounded shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                        <h1>Oporto British School</h1>
                        <p>The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.</p>
                        <Button href="/obs">More Info</Button>
                      </div>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                      <div className="p-5"><img className="rounded img-fluid shadow-lg" src="obscampus.jpg" alt=''/></div>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 1}}>
                      <div className="p-5"><img className="rounded img-fluid shadow-lg" src="munwaterbottle.png" alt=''/></div>
                    </Col>
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}}>
                      <div className="rounded shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                        <h1>2022 OBSMUN Conference</h1>
                        <p>We are glad to present the OBSMUN 2022 Conference. We hope this will provide you with the opportunity to improve your public speaking skills, whilst meeting new people and making new connections. See you there!</p>
                        <Button href="/obsmun">More Info</Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </ParallaxLayer>
            </Parallax>
            {/* <Container>
              <h2>Our Partners</h2>
              <br/>
              <Row>
                <Col>
                  <img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/>
                </Col>
                <Col>
                  <img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/>
                </Col>
                <Col>
                  <img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/>
                </Col>
              </Row>
            </Container> */}
            {/* <CardComp></CardComp> */}
          </BrowserView>
        </div>
        )
    }
}

export default Home;