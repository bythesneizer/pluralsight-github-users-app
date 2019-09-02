import React, { Component } from "react";
import "./Form.css";
import API from "../Utils/Api.js";

class Form extends Component {
  state = {
    username: ""
  };

  submitHandler = event => {
    event.preventDefault();
    const error = document.getElementById("error-message");
    if (this.state.username.length === 0) {
      error.textContent = "Please enter a username";
      error.style.color = "red";
      error.style.fontWeight = "bold";
      console.log("error");
    } else {
      const getResponse = async () => {
        try {
          const response = await API.get(`/${this.state.username}`);
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.log("Unable to call GitHub API: " + error);
        }
      };
      getResponse().then(data => {
        this.props.onSubmit(data);
      });
      error.textContent = "";
    }
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
        <span id="error-message"></span>
      </form>
    );
  }
}

export default Form;
