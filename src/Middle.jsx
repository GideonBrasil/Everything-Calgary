import React, { Component } from "react";
require("../styles/main.scss");
import GoogleApiWrapper from "./GoogleMaps.jsx";
import Garbage from './topicComponents/Garbage.jsx';
import Property from './topicComponents/Property.jsx';
import Crime from './topicComponents/Crime.jsx';

class Middle extends Component {
  render() {
    console.log(this.props.data.topic)
    if (this.props.data.topic === "crime"){
      return (
          <div className="col">
            <Crime />
          <div>
            <GoogleApiWrapper
              communityCenterLatLong={this.props.data.communityCenterLatLong}
              polygonCoords={this.props.data.polygonCoords}
            />
          </div>
        </div>
      )
    } else if (this.props.data.topic === "garbage"){
      return (
        <div className="col">
          <Garbage />
        <div>
          <GoogleApiWrapper
            communityCenterLatLong={this.props.data.communityCenterLatLong}
            polygonCoords={this.props.data.polygonCoords}
          />
        </div>
        </div>
      )
    } else if (this.props.data.topic === "property"){
      return (
        <div className="col">
          <Property />
        <div>
          <GoogleApiWrapper
            communityCenterLatLong={this.props.data.communityCenterLatLong}
            polygonCoords={this.props.data.polygonCoords}
          />
        </div>
        </div>
      )
    } else {
      return (
        <div className="col">
          <div>
            <GoogleApiWrapper
              communityCenterLatLong={this.props.data.communityCenterLatLong}
              polygonCoords={this.props.data.polygonCoords}
            />
          </div>
        </div>
      );
    }
  }
}

export default Middle;
