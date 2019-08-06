import React, { Component } from "react";
import "./PersonDetails.css";

class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const personDetails = this.props.personDetails;
    if (!this.state.expanded) {
      return <button onClick={this.handleClick}>Show details</button>;
    } else {
      return (
        <div>
          <div className="grid">
            <div>
              Gender: <br />
              {personDetails.gender}
            </div>
            <div>
              Eye: <br />
              {personDetails.eye_color}
            </div>
            <div>
              Height: <br />
              {personDetails.height}
            </div>
            <div>
              Birth: <br />
              {personDetails.birth_year}
            </div>
            <div>
              Hair: <br />
              {personDetails.hair_color}
            </div>
            <div>
              Weight: <br />
              {personDetails.mass}
            </div>
          </div>
          <button onClick={this.handleClick}>Hide details</button>
        </div>
      );
    }
  }
}

export default PersonDetails;
