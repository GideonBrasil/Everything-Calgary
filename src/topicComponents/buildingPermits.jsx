import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class BuildingPermits extends Component {

  componentDidMount() {
    fetch(`http://localhost:3000/buildingPermits/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (<p>Hello</p>);
  }
}



export default BuildingPermits;