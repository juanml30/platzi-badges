import React from "react";
import "./styles/Badge.css";

import confLogo from "../images/badge-conf.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge_section-name">
          <img src="" alt="Avatar" className="Badge_avatar" />
          <h1>
            Juan <br />
            Moreno
          </h1>
        </div>
        <div className="Badge_section-info">
          <h3>Frontend Developer</h3>
          <div>@juanml30</div>
        </div>

        <div className="Badge_footer">#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
