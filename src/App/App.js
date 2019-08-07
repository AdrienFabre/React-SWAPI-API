import React, { Component } from "react";
import axios from "axios";
import AutoComplete from "./SearchBoxAutoComplete/SearchBoxAutoComplete";
import List from "./PeopleList/PeopleList";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  state = { peopleToDisplay: [], peopleData: [], peopleNames: [] };

  getPeopleData = async () => {
    const response = await axios.get("https://swapi.co/api/people");
    this.setState({
      peopleData: response.data.results,
      peopleNames: response.data.results.map(person => person.name)
    });
  };

  componentDidMount = () => {
    this.getPeopleData();
  };

  updatePeopleToDisplay = suggestions => {
    this.setState({ peopleToDisplay: suggestions });
  };

  retrieveData = () => {
    return this.state.peopleData
      .filter(person => this.state.peopleToDisplay.includes(person.name))
      .map(person => person);
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <AutoComplete
          peopleNames={this.state.peopleNames}
          updatePeopleToDisplay={this.updatePeopleToDisplay}
        />
        <List peopleToDisplay={this.retrieveData()} />
      </div>
    );
  }
}

export default App;
