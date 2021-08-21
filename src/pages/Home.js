import React from "react";
import fondo from "../images/descargadas/fondoCortado.jpg";
import btnImg from "../images/descargadas/boton3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
    render() {
        return (
            <div className="container mt-4 d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center">
                    <img
                        className="img-fluid"
                        src={fondo}
                        alt=""
                        style={{ maxHeight: "80vh" }}
                    />
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-regular fa-hamsa" />
                </div>
                {/* <div className="neon">
                    <Link className="btn btn-img p-0" to="./badges/new">
                        <img
                            className="img-fluid"
                            src={btnImg}
                            alt="Boton para ingresar"
                        />
                    </Link>
                </div> */}
                <div className="mt-4">
                    <a className="btn btn-here " href="./badges/new">
                        START HERE!
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
