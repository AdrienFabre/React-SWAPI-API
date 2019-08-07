import React from "react";
import "./SearchBoxAutoComplete.css";

class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChanged = e => {
    const value = e.target.value.replace(/[^\w\s]/gi, "");
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.props.peopleNames.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
    this.props.updatePeopleToDisplay(suggestions);
  };

  render() {
    const { text } = this.state;

    let message = "";
    if (!this.props.peopleNames.length) {
      message = "Loading...";
    } else if (!text.length) {
      message = "Search a character!";
    } else if (text.length > 14) {
      message = "Maximum length reached!";
    } else if (text.length && !this.state.suggestions.length) {
      message = "Nobody has this name here!";
    }

    return (
      <div className="searchBoxWrapper">
        <input
          maxLength={15}
          className="searchBox"
          onChange={this.onTextChanged}
          type="text"
        />
        {message && <h5>{message}</h5>}
      </div>
    );
  }
}

export default AutoComplete;
