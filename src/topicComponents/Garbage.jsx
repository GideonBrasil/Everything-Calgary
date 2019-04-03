import React, { Component } from "react";

class Garbage extends Component {

  componentDidMount() {

    fetch(`http://localhost:3000/garbage/${this.props.data.community}`)
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
      <h1>This is the Garbage Data</h1>
    );
  }
}

export default Garbage;