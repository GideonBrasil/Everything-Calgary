import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class BuildingPermits extends Component {

  componentDidMount() {
    fetch(`http://localhost:3000/buildingPermits/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        this.props.addPinstoState(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {


    return (
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 51.0433951810899, lng: -114.065661597048 }}
          name = { 'Changing Colors Garage' }
        />
      );
  }
}



export default BuildingPermits;