import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.png";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.getPeopleDetails = this.getPeopleDetails.bind(this);
  }

  getPeopleDetails() {
    return axios.get("https://swapi.co/api/people").then(response => {
      console.log(response.data.results);
      this.setState({ people: response.data.results });
    });
  }

  componentDidMount() {
    this.getPeopleDetails();
  }

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <List people={people} />
        </header>
      </div>
    );
  }
}

export default App;
