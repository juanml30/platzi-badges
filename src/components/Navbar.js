import React from "react";

import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <a className="navbar__brand" href="/">
            <img className="navbar__logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-light">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
