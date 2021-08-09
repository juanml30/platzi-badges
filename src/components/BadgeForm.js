import React from "react";

class BadgeForm extends React.Component {
  state = {};
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    console.log("button fue clickado papu");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Was submited");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="email"
              name="mail"
              value={this.state.mail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.handleChange}
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.handleChange}
              value={this.state.twitter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
