import React, { Component } from "react";

class Crime extends Component {

  componentDidMount() {
    fetch(`http://localhost:3000/crime/${this.props.data.community}`)
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
      <h1>This is the Crime Data</h1>
    );
  }
}

export default Crime;