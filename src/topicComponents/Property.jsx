import React, { Component } from "react";

class Property extends Component {

  componentDidMount() {
    console.log('THE DATAAAAA HERE:', this.props.data)
    console.log('THE COOOOODE HERE:', this.props.data.communityCode)
    fetch(`http://localhost:3000/propertyAssessment/${this.props.data.communityCode}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <h1>This is the Property Data</h1>
    );
  }
}

export default Property;