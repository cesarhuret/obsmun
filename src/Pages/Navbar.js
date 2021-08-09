import React, {Component} from "react";

class Navbar extends Component {
  render() {
        return ( 
        <div className="App">
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
                <div className="container"><a className="navbar-brand" href="/">OBSMUN</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/obs">Our School</a></li>
                            <li className="nav-item"><a className="nav-link" href="/documents">Documents</a></li>
                            <li className="nav-item"><a className="nav-link" href="/team">Meet The Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="/registration">Registration</a></li>
                            <li className="nav-item"><a className="nav-link" href="/sponsors">Partners &amp; Sponsors</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;