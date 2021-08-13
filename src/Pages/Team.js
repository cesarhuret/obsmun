import React, {Component} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardComp from "../Components/Card";
import './Home.css'

class Team extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
        return ( 
        <div className="App">
          <div>
            <img src='garden.png'></img>
            <div className="center">
              <h1 style={{fontSize: '7vh'}}>The Team</h1>
            </div>
          </div>
          <br/>
          <h2 style={{color: "white"}}>Executive Team</h2>
          <div style={{alignItems: "center", display: "flex"}}>
            <CardComp></CardComp>
          </div>
        </div>
        )
    }
}

export default Team;