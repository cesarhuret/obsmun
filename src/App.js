import React, { useEffect } from "react";
import './App.css';
import { Routes } from './Routes'
import { BrowserRouter as Router, } from "react-router-dom";
import NavComp from "./Components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css"

function App () {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);

  return (
  <div className='App'>
    <Router> 
      <NavComp/>
      <Routes />
      {/* <FootComp/> */}
    </Router>
  </div>
  );
}
export default App;