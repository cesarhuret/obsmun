import React, {Component} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardComp from "../Components/Card";
import './Home.css'

class School extends Component {

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
              <h1 style={{fontSize: '5vh'}}>Our School</h1>
            </div>
          </div>
          <br/>
          <Container style={{textAlign: "left", color: "white"}} fluid>
            <Row>
              <Col xs={8}>
                <div className="rounded shadow-lg p-5" style={{borderStyle: "none"}}>
                    <p>The Oporto British School is the oldest British school in continental Europe. It dates back to 1894, and since then OBS has devoted itself to help students excel. </p>
                    <p>Known for its warm welcome, small class-sizes and very friendly environment, the OBS takes pride in being a unified community, a family. The OBS also takes its culture of respect, manners and academic rigour to the utmost of importance in order for every student to lead a successful academic career in a safe environment. </p>
                    <p>The OBS motto is "To strive for success and to serve"; every student, parent and staff member embodies this motto in order to enhance the sense of community the school has, in addition to making it more thoughtful and reflective.</p>
                </div>
              </Col>
              <Col>
                <div className="p-2"><img className="rounded img-fluid shadow-lg" src="https://i.imgur.com/dqAtAv6.png"/></div>
              </Col>
            </Row>
          </Container>
          <div className='rounded shadow-lg' style={{minWidth: '100%', color: "white", textAlign: "center"}}>
            <img className="img-fluid shadow-lg" style={{paddingTop: '2vh'}} src="https://i.imgur.com/dqAtAv6.png"/>
            <div style={{ padding: '2%'}}>
              <div style={{padding: '2vh'}}>
                  <h1>Our Vision</h1>
                  <h5 style={{fontWeight: 300}}>Oporto British School aims to be an inspirational institution of thinking and learning, promoting excellence from all our pupils, and developing the compassionate, responsible leaders of the future.</h5>
              </div>
              <div style={{padding: '2vh'}}>
                  <h1>Our Mission</h1>
                  <h5 style={{fontWeight: 300, textAlign: 'left'}}>To do everything we can to motivate each and every child here, and work to ensure they do the best they possibly can in their academic work and other areas of their lives. In doing this, we combine tradition with forward-thinking educational practice, providing a dynamic, high-quality and internationally-minded experience to develop creative, compassionate and inquiring life-long learners and leaders.</h5>
              </div>
              <h4>See more at <Link style={{textDecoration: 'none'}} to={{ pathname: "https://www.obs.edu.pt/en/"}} target="_blank">OBS</Link></h4>
            </div>
          </div>
        </div>
        )
    }
}

export default School;