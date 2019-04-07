import React, { Component } from "react";
import GoogleApiWrapper from "../GoogleMaps.jsx";
import Events from "./topicComponents/Events.jsx";
import News from "./topicComponents/News.jsx";
import TrafficIncidents from "./topicComponents/TrafficIncidents.jsx";

class Calgary_Middle extends Component {
  render() {
    let component = null;
    if (this.props.data.topic === "events") {
      component = (
        <Events data={this.props.data} changeTopic={this.props.changeTopic} />
      );
    } else if (this.props.data.topic === "news") {
      component = (
        <News data={this.props.data} changeTopic={this.props.changeTopic} />
      );
    } else if (this.props.data.topic === "traffic") {
      component = (
        <TrafficIncidents
          data={this.props.data}
          changeTopic={this.props.changeTopic}
        />
      );
    }
    return (
      <div className="col mapCol">
        {component}
        <div>
          <GoogleApiWrapper
            communityCenterLatLong={{ lat: 51.030201, lng: -114.059462 }}
            polygonCoords={this.props.data.polygonCoords}
            zoom={10.8}
            pins={this.props.data.pins}
          />
        </div>
      </div>
    );
  }
}

export default Calgary_Middle;
