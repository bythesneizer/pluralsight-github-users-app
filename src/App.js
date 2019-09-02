import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList/CardList.js";
import Form from "./Form/Form.js";
import ErrorBoundary from "./Utils/ErrorBoundary.js";

/*To do:
-Handle Errors:
  1. Invalid input
  2. Network problems
-Seperate module to handle api requests
*/
class App extends Component {
  state = {
    profiles: []
  };

  addNewProfile = profileData => {
    console.log("App" + profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <ErrorBoundary>
          <Form onSubmit={this.addNewProfile} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CardList profiles={this.state.profiles} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
