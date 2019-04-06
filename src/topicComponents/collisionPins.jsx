import React, { Component } from "react";
import {
  Marker
} from "google-maps-react";

class CollisionPins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: null
    };
  }

  // componentDidMount() {
  //   fetch(`http://localhost:3000/crime/${this.props.data.community}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState(state => ({
  //         crimeStats: data
  //       }))
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

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


export default CollisionPins;