import React, { Component } from "react";

class Garbage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      communityData: []
    };
  }

  componentDidMount() {

    fetch(`http://localhost:3000/garbage/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(state => ({
          communityData: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div style={{ position:'absolute', backgroundColor: 'white', opacity:'0.6', zIndex:'300' }}>
      <h1>This is the Garbage Data</h1>
      <p> {this.state.communityData} </p>
      </div>
    );
  }
}

export default Garbage;