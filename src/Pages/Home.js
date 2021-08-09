import React, {Component} from "react";
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
          <form className="UI">
            <h1 style={{color: "gray", fontSize: 50}}>Create POAP Event</h1>
          </form>
        </div>
        )
    }
}

export default Home;