import React, { Component } from "react";
import './App.css';
import { Routes } from './Routes'
import { BrowserRouter as Router, } from "react-router-dom";
import NavComp from "./Components/Navbar";
class App extends Component {

  render() {
        return (
          <div className='App'>
            <Router> 
                <NavComp></NavComp>
                <Routes />
                {/* <FootComp/> */}
            </Router>
          </div>
        );
  }
}
export default App;