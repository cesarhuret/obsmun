import React, {Component} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { isDesktop, isMobile } from 'react-device-detect';
class Home extends Component {
  
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
            <div className='backgroundImage' style={{ backgroundImage: 'url("https://i.imgur.com/dqAtAv6.png")'}}>
                <Container style={{textAlign: "left", paddingBottom: '4%'}}>
                  { this.mobile ?
                    <>
                      <Row style={{paddingTop: '30%', textAlign: "center"}}>
                        <div data-aos="fade-up">
                          <h1 className='white' style={{fontSize: '5vh', paddingTop: '7%'}}>Oporto British School</h1>
                          <h2 className='white' style={{fontSize: '3vh', paddingTop: '5%'}}>Model United Nations</h2>
                          <h3 className='white' style={{fontSize: '4vh', paddingTop: '5%'}}>3rd to 5th February 2022</h3>
                        </div>
                      </Row>
                      <Row style={{paddingTop: '10%', paddingBottom: '22%', opacity: '0.7', paddingLeft: '45%'}} data-aos="fade-up">
                        <div className='bounce'>
                          <img src="arrow-circle-down.png" onClick={() => {document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}}/>
                        </div>
                      </Row>
                    </>
                    : <>
                      <Row style={{paddingTop: '30%'}}>
                        <div data-aos="fade-up">
                          <h1 className='white' style={{fontSize: '5vw'}}>Oporto British School</h1>
                          <h2 className='white' style={{fontSize: '3vw'}}>Model United Nations</h2>
                          <h3 className='white' style={{fontSize: '2vw'}}>3rd to 5th February 2022</h3>
                        </div>
                      </Row>
                      <Row style={{paddingTop: '10%', paddingBottom: '22%', opacity: '0.7'}} data-aos="fade-up">
                        <div className='bounce'>
                          <img src="arrow-circle-down.png" onClick={() => {document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}}/>
                        </div>
                      </Row>
                    </>
                  }
                  <Row id="details" className="align-items-center">
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                    { this.mobile ?
                            <div className="rounded shadow-lg p-3" data-aos="fade-up" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                              <h1>Oporto British School</h1>
                              <p>The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.</p>
                              <Button href="/obs">More Info</Button>
                            </div>
                      : <div className="rounded shadow-lg p-5" data-aos="fade-right" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                          <h1>Oporto British School</h1>
                          <p>The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.</p>
                          <Button href="/obs">More Info</Button>
                        </div>
                    }
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                      <div className="p-5">
                        { this.mobile ? <img data-aos="fade-up" className="rounded img-fluid shadow-lg" src="obscampus.jpg" alt=''/>
                          : <img data-aos="fade-left" className="rounded img-fluid shadow-lg" src="obscampus.jpg" alt=''/>
                        }
                      </div>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 1}}>
                      <div className="p-5" data-aos="fade-right"><img className="rounded img-fluid shadow-lg" src="munwaterbottle.png" alt=''/></div>
                    </Col>
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}}>
                    <div className="p-2">
                    { this.mobile ?
                          <div className="rounded shadow-lg p-5" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}} data-aos="fade-left">
                            <h1>2022 OBSMUN Conference</h1>
                            <p>We are glad to present the OBSMUN 2022 Conference. We hope this will provide you with the opportunity to improve your public speaking skills, whilst meeting new people and making new connections. See you there!</p>
                            <Button href="/obsmun">More Info</Button>
                          </div>
                      :   <div className="rounded shadow-lg p-3" style={{borderStyle: "none", backgroundColor: 'rgba(255, 255, 255, 0.9)'}} data-aos="fade-right">
                            <h1>2022 OBSMUN Conference</h1>
                            <p>We are glad to present the OBSMUN 2022 Conference. We hope this will provide you with the opportunity to improve your public speaking skills, whilst meeting new people and making new connections. See you there!</p>
                            <Button href="/obsmun">More Info</Button>
                          </div>
                    }
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
            </div>
        </div>
        )
    }
}

export default Home;