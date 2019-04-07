import React, { Component } from "react";
require("../styles/main.scss");
import GoogleApiWrapper from "./GoogleMaps.jsx";
import Events from "./calgaryComponents/Events.jsx";
import News from "./calgaryComponents/News.jsx";
import TrafficIncidents from "./calgaryComponents/TrafficIncidents.jsx";

class Calgary_Middle extends Component {
  render() {
    let calgary_component = null;
    console.log(this.props.data);
    if (this.props.data.topic === "events") {
      calgary_component = (
        <Events data={this.props.data} changeTopic={this.props.changeTopic} />
      );
    } else if (this.props.data.topic === "news") {
      calgary_component = (
        <News data={this.props.data} changeTopic={this.props.changeTopic} />
      );
    } else if (this.props.data.topic === "traffic") {
      calgary_component = (
        <TrafficIncidents
          data={this.props.data}
          changeTopic={this.props.changeTopic}
        />
      );
    }
    return (
      <div className="col mapCol">
        {calgary_component}
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

export default Calgary_Middle;
