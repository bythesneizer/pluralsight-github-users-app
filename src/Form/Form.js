import React, { Component } from "react";
import "./Form.css";
import Axios from "axios";

class Form extends Component {
  state = {
    username: ""
  };

  submitHandler = async event => {
    event.preventDefault();
    const response = await Axios.get(
      `https://api.github.com/users/${this.state.username}`
    );
    this.props.onSubmit(response.data);
    this.setState({ username: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}
          placeholder="Enter GitHub username"
        ></input>
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
