import React, { Component } from "react";
require("../styles/main.scss");
import GoogleApiWrapper from "./GoogleMaps.jsx";

class Middle extends Component {
  render() {
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

export default Middle;
