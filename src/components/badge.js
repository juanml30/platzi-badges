import React from "react";
import confLogo from "../images/badge-conf.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo" />
        </div>
        <div>
          <img src="" alt="Avatar" />
          <h1>
            Juan <br />
            Moreno
          </h1>
        </div>
        <div>
          <p>Frontend Developer</p>
          <p>@juanml30</p>
        </div>

        <div>#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
