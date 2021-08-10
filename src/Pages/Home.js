import React, {Component} from "react";
import { Container } from "react-bootstrap";
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
          <CardComp></CardComp>
        </div>
        )
    }
}

export default Home;