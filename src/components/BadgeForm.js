import React from "react";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("button fue clickado papu");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Was submited");
    console.log(this.props.formValues);
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
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="email"
              name="mail"
              onChange={this.props.onChange}
              value={this.props.formValues.mail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
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
