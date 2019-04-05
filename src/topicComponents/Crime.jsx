import React, { Component } from "react";

class Crime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeData: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/crime/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(state => ({
          crimeData: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("THIS IS THE CRIME DATA: ", this.state.crimeData);
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          opacity: "0.6",
          zIndex: "300"
        }}
      >
        <h1>This is the Crime Data</h1>
        <p>{this.state.crimeData.calgaryCrimeStats}</p>
      </div>
    );
  }
}

export default Crime;
