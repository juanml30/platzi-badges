import React from "react";
import img404 from "../images/404.svg";

function NotFound() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img
                className="img-fluid"
                src={img404}
                alt=""
                style={{ maxHeight: "90vh" }}
            />
        </div>
    );
}

export default NotFound;
