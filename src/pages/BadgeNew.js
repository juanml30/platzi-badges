import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-conf.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Juan"
                lastName="Moreno"
                jobTitle="Front End Developer"
                twitter="juan_ml_30"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
