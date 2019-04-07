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
      permitPins: []
    };
    this.addPinstoState = this.addPinstoState.bind(this);
  }

  addPinstoState (arrayData) {
    this.setState(state => ({
          permitPins: arrayData
        }));
  }

  render() {
    let component;
    let pins;
    if (this.props.data.topic === "crime"){
         component = (<Crime data={this.props.data} changeTopic={this.props.changeTopic}/>);

    } else if (this.props.data.topic === "garbage"){
        component = (<Garbage data={this.props.data} changeTopic={this.props.changeTopic}/>);

    } else if (this.props.data.topic === "property"){
        component = (<Property data={this.props.data} changeTopic={this.props.changeTopic} />);

    } else if (this.props.data.topic === "building-permit"){
        component = <BuildingPermit data={this.props.data} changeTopic={this.props.changeTopic} addPinstoState={this.addPinstoState}/>;
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
              >

            </GoogleApiWrapper>
          </div>
        </div>
      );
    }
}

export default Middle;
