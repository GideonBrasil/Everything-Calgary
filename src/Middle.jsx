  import React, { Component } from "react";
require("../styles/main.scss");
import GoogleApiWrapper from "./GoogleMaps.jsx";

import Garbage from './topicComponents/Garbage.jsx';
import Property from './topicComponents/Property.jsx';
import Crime from './topicComponents/Crime.jsx';
import BuildingPermit from './topicComponents/buildingPermits.jsx'


class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: {},
      permitPins: false
    };
  }


  render() {
    console.log("This is the state of the permit pins: ",this.state.permitPins);
    let component;
    if (this.props.data.topic === "crime"){
         component = (<Crime data={this.props.data} changeTopic={this.props.changeTopic}/>);

    } else if (this.props.data.topic === "garbage"){
        component = (<Garbage data={this.props.data} changeTopic={this.props.changeTopic}/>);

    } else if (this.props.data.topic === "property"){
        component = (<Property data={this.props.data} changeTopic={this.props.changeTopic} />);

    } else if (this.props.data.topic === "building-permit" && !this.state.permitPins){
        this.setState( {permitPins:true});
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
              permitPins={this.state.permitPins}
              data={this.props.data}
              >

            </GoogleApiWrapper>
          </div>
        </div>
      );
    }
}

export default Middle;
