import React, { Component } from "react";
import GoogleApiWrapper from "../GoogleMaps.jsx";
import Garbage from "./topicComponents/Garbage.jsx";
import Property from "./topicComponents/Property.jsx";
import Crime from "./topicComponents/Crime.jsx";
import Population from "./topicComponents/Population.jsx";

class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: {}
    };
  }

  render() {
    let component;
    if (this.props.data.topic === "crime") {
      component = (
        <Crime data={this.props.data} changeTopic={this.props.changeTopic} />
      );
    } else if (this.props.data.topic === "garbage") {
      component = (
        <Garbage data={this.props.data} changeTopic={this.props.changeTopic} />
      );
    } else if (this.props.data.topic === "property") {
      component = (
        <Property data={this.props.data} changeTopic={this.props.changeTopic} />
      );
    } else if (this.props.data.topic === "population") {
      component = (
        <Population
          data={this.props.data}
          changeTopic={this.props.changeTopic}
        />
      );
    } else {
      component = null;
    }

    return (
      <div className="col mapCol">
        {component}
        <div>
          <GoogleApiWrapper
            communityCenterLatLong={this.props.data.communityCenterLatLong}
            polygonCoords={this.props.data.polygonCoords}
            pins={this.props.data.pins}
            signalPins={this.props.data.signalPins}
            topic={this.props.data.topic}
          />
        </div>
      </div>
    );
  }
}

export default Middle;
