import React, { Component } from "react";
import PersonDetails from "../PersonDetails/PersonDetails";

class List extends Component {
  render() {
    let peopleToDisplay = this.props.peopleToDisplay;
    return (
      <div className="listWrapper">
        {peopleToDisplay.map(person => {
          return (
            <div className="person" key={person.created}>
              <h5 className="name">{person.name}</h5>
              <PersonDetails personDetails={person} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
