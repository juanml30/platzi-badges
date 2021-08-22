import React from "react";
import fondo from "../images/descargadas/fondoCortado.jpg";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="container mt-4 d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center">
                    <Link to="./badges/new">
                        <img
                            className="img-fluid"
                            src={fondo}
                            alt=""
                            style={{ maxHeight: "80vh" }}
                        />
                    </Link>
                </div>
                <div className="mt-4">
                    <Link className="btn btn-here " to="./badges/new">
                        START HERE!
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
