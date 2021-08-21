import React from "react";

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <div className="card shadow mb-5">
                                <div className="card-body ps-0 d-flex ">
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <img
                                            className="img-fluid"
                                            src={badge.avatarUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-8">
                                        <h3>
                                            {badge.firstName} {badge.lastName}
                                        </h3>
                                        <h5>{badge.jobTitle}</h5>
                                        <h6>#{badge.twitter}</h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;
