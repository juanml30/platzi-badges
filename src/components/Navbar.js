import React from "react";

import "./styles/Navbar.css";
import logo from "../images/descargadas/logo1.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="container-fluid">
                    <Link className="navbar__brand" to="/">
                        <img
                            className="navbar__brand-logo "
                            src={logo}
                            alt="Logo"
                        />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-light">Conf</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
