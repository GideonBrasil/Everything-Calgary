import React, { Component } from "react";
require("../styles/main.scss");
import GoogleApiWrapper from "./GoogleMaps.jsx";
import Events from "./calgaryComponents/Events.jsx";
import News from "./calgaryComponents/News.jsx";
import TrafficIncidents from "./calgaryComponents/TrafficIncidents.jsx";

class Calgary_Middle extends Component {
  render() {
    console.log(this.props.data);
    if (this.props.data.topic === "events") {
      return (
        <div className="col mapCol">
          <Events data={this.props.data} changeTopic={this.props.changeTopic} />
          <div>
            <GoogleApiWrapper
              communityCenterLatLong={{ lat: 51.065553, lng: -114.076424 }}
              polygonCoords={this.props.data.polygonCoords}
            />
          </div>
        </div>
      );
    } else if (this.props.data.topic === "news") {
      return (
        <div style={{ position: "relative" }} className="col mapCol">
          <News data={this.props.data} changeTopic={this.props.changeTopic} />
          <div>
            <GoogleApiWrapper
              communityCenterLatLong={this.props.data.communityCenterLatLong}
              polygonCoords={this.props.data.polygonCoords}
            />
          </div>
        </div>
      );
    } else if (this.props.data.topic === "traffic") {
      return (
        <div className="col mapCol">
          <TrafficIncidents
            data={this.props.data}
            changeTopic={this.props.changeTopic}
          />
          <div>
            <GoogleApiWrapper
              communityCenterLatLong={this.props.data.communityCenterLatLong}
              polygonCoords={this.props.data.polygonCoords}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="col mapCol">
          <div>
            <GoogleApiWrapper
              communityCenterLatLong={{ lat: 51.030201, lng: -114.059462 }}
              polygonCoords={this.props.data.polygonCoords}
              zoom={10.8}
            />
          </div>
        </div>
      );
    }
  }
}

export default Calgary_Middle;
