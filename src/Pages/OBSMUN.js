import React, {Component} from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Home.css'

class OBSMUN extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
        return ( 
        <div className="App">
          <div>
            <img src='exobsmun.png'></img>
            <div className="center">
              <h1 style={{fontSize: '7vh'}}>The OBSMUN</h1>
            </div>
          </div>
          <br/>
          <Container style={{textAlign: "left", color: "white"}} fluid>
            <Row className="align-items-center">
              <Col lg={{span: 8, order: 1}}>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                    <h1>What is the OBSMUN?</h1>
                    <p>Random text I have generated to fill space in this location. We shall determine this later, but for now I’m just putting this so you guys can see about the size of the things we need to write. More random text, because let’s face it, we’ll probably need to write more. But anyways… what does more text mean except a filler in our website as a way for us to seem more credible. How have we a society evolved to trust more what we perceive as pretty than what we perceive as useful. Anyways, how have your holidays been so far? Fun, interesting? Ok anyways, I’d better stop: this is more or less the correct amount of text.</p>
                </div>
              </Col>
              <Col lg={{span: 4, order: 2}}>
                <div className="p-2"><img className="rounded img-fluid shadow-lg" src="obsmuncouncil.png"/></div>
              </Col>
            </Row>
            <Row className="align-items-center">
                <Col lg={{span: 4, order: 1}}>
                    <div className="p-2"><img className="rounded img-fluid shadow-lg" src="natixis.png"/></div>
                </Col>
                <Col lg={{span: 8, order: 2}}>
                    <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                        <h1>When and Where?</h1>
                        <p>Random text I have generated to fill space in this location. We shall determine this later, but for now I’m just putting this so you guys can see about the size of the things we need to write. More random text, because let’s face it, we’ll probably need to write more.</p>
                        <p>Random text I have generated to fill space in this location. We shall determine this later, but for now I’m just putting this so you guys can see about the size of the things we need to write.</p>
                    </div>
                </Col>
            </Row>
          </Container>
          <Col style={{padding: '1%'}}>
                    <iframe  className="shadow-lg rounded" style={{ overflow: "hidden", background:'none', width:'80vh', height:'40vh'}} src="https://maps.google.com/maps?q=Natixis,%20Rua%20de%20Santos%20Pousada%20220,%204000-478%20Porto&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                </Col>
        </div>
        )
    }
}

export default OBSMUN;