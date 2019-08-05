import React, { Component } from "react";

class List extends Component {
  render() {
    const people = this.props.people;
    return (
      <div>
        {people.map(person => {
          console.log(person);
          return (
            <div key={person.created}>
              <h5 className="name">{person.name}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
