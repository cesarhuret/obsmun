import React, { Component } from "react";
import './App.css';
import { Routes } from './Routes'
import { BrowserRouter as Router, } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
class App extends Component {

  render() {
        return (
          <div className='App'>
            <Router>
                <Navbar
                  variant='dark'
                  className='navbar'
                  style={{ position: "absolute", top: 0, width: "100vw" , display:"flex"}}
                >
                  <Navbar.Brand>OBSMUN</Navbar.Brand>

                  <Nav className='navbar-nav ms-auto' id="navbarResponsive">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/obs">Our School</Nav.Link>
                    <Nav.Link href="/documents">Documents</Nav.Link>
                    <Nav.Link href="/team">Meet The Team</Nav.Link>
                    <Nav.Link href="/registration">Registration</Nav.Link>
                    <Nav.Link href="/sponsors">Partners and Sponsors</Nav.Link>
                  </Nav>

                </Navbar>
                <Routes />
            </Router>
          </div>
        );
  }
}
export default App;