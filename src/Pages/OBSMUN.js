import React, {Component} from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { isDesktop, isMobile } from 'react-device-detect';

class OBSMUN extends Component {

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
        <div>
          { this.mobile ?
          <>
            <div style={{position: "relative"}}>
              <img style={{maxWidth: '100%', height: 'auto', paddingTop: '5rem'}} src='exobsmun.png' alt=''/>
              <div className="center">
                <h1 className='white' style={{fontSize: '7vh'}}>The OBSMUN</h1>
              </div>
            </div>
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
            </Container>
          </>
          : <>
            <div className='backgroundImage' style={{ backgroundImage: 'url("https://obsmun.org/exobsmun.png")', height: '100vh'}}>
              <Container style={{textAlign: "left", paddingLeft: '5%', paddingRight: '5%'}} fluid>
                <Row style={{paddingTop: '15%', paddingLeft: '10%'}} data-aos="fade-down">
                    <div data-aos="fade-up">
                        <h1 className='white' style={{fontSize: '7vh'}}>The OBSMUN</h1>
                    </div>
                </Row>
                <Row className="align-items-center" style={{paddingTop: '5%'}}>
                    <Col xs={{span: 12, order: 2}} lg={{span: 8, order: 1}} style={{paddingBottom: '10px'}} data-aos="fade-down">
                      <div className="rounded  p-5" style={{borderStyle: "none", color: 'white'}} data-aos="fade-up">
                          <h1>What is the OBSMUN?</h1>
                          <p>During the OBSMUN 2022 conference, delegates will have the distinct opportunity to develop their knowledge and also, skills alongside enthusiastic delegates from around the globe! In the majority of OBSMUN’s committees, a clause-by-clause procedure shall have ensued; delegates may prepare draft clauses and deliberate upon them during committee sessions. Thereafter, voting on their adoption and formulating a final resolution with the inclusion of numerous clauses.</p>
                      </div>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 2}} data-aos="fade-up">
                      <div className="cardhover"><img className="rounded img-fluid shadow-lg" src="obsmuncouncil.png" alt='' data-aos="fade-down"/></div>
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

export default OBSMUN;