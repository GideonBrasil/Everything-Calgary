import React, { Component } from "react";

class Property extends Component {
  componentDidMount() {
    fetch(
      `http://localhost:3000/propertyAssessment/${
        this.props.data.communityCode
      }`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <h1>This is the Property Data</h1>;
  }
}

export default Property;
