import React from "react";
import "./styles/Badge.css";

import avatarLogo from "../images/lemonade.svg";

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge_header">
                    <h1 className="mb-0">Your Badge</h1>
                </div>
                <div className="Badge_section-name">
                    <img
                        src={avatarLogo}
                        alt="Avatar"
                        className="Badge_avatar"
                    />
                    <h1>
                        {this.props.firstName}
                        <br />
                        {this.props.lastName}
                    </h1>
                </div>
                <div className="Badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge_footer">#Platziconf</div>
            </div>
        );
    }
}

export default Badge;
