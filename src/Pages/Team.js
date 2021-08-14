import React, {Component} from "react";
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
          <div style={{position: "relative"}}>
            <img style={{maxWidth: '100%', height: 'auto'}} src='garden.jpg' alt=''/>
            <div className="center">
              <h1 className='white' style={{fontSize: '7vh'}}>The Team</h1>
            </div>
          </div>
          <br/>
          <CardComp></CardComp>
          
        </div>
        )
    }
}

export default Team;