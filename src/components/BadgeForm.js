import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({ name: e.target.name, value: e.target.value });
  };
  handleClick = (e) => {
    console.log("button fue clickado papu");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Was submited");
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
