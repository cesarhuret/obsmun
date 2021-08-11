import React, {Component} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardComp from "../Components/Card";
import './Home.css'

class Home extends Component {

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
              <h1 style={{fontSize: '5vw'}}>Oporto British School</h1>
              <h1 style={{fontSize: '3vw'}}>Model United Nations</h1>
              <h3 style={{fontSize: '1.5vw'}}>February 2022</h3>
            </div>
          </div>
          <br/>
          <Container style={{textAlign: "left", color: "white"}}>
            <Row>
              <Col>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                  <h1>Oporto British School</h1>
                  <p>The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.</p>
                  <Button href="/obs">More Info</Button>
                </div>
              </Col>
              <Col>
                <div className="p-5"><img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="p-5"><img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/></div>
              </Col>
              <Col>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                  <h1>2022 OBSMUN Conference</h1>
                  <p>We are glad to present the OBSMUN 2022 Conference. We hope this will provide you with the opportunity to improve your public speaking skills, whilst meeting new people and making new connections. See you there!</p>
                  <Button href="/obs">More Info</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                  <h1>Documentation</h1>
                  <p>Please find attached a collection of documents containing all the important information about our conference and your role in it.</p>
                  <Button href="/obs">More Info</Button>
                </div>
              </Col>
              <Col>
                <div className="p-5"><img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="p-5"><img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/></div>
              </Col>
              <Col>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                  <h1>Register</h1>
                  <p>Interested in joining the 2022 OBSMUN?<br/>Register before the xth of X-uary of 2022!</p>
                  <Button href="/obs">More Info</Button>
                </div>
              </Col>
            </Row>
          </Container>
          <Container style={{color: "white"}}>
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
          </Container>
          {/* <CardComp></CardComp> */}
        </div>
        )
    }
}

export default Home;