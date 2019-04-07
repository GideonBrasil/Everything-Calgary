import React, { Component } from "react";
require("../styles/main.scss");
import GoogleApiWrapper from "./GoogleMaps.jsx";
import Garbage from "./topicComponents/Garbage.jsx";
import Property from "./topicComponents/Property.jsx";
import Crime from "./topicComponents/Crime.jsx";

class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: {
        range: [
          {
            comm_code: "CLI",
            community_name: "Cliff Bungalow",
            date: "2017-01-01T00:00:00.000",
            median_assessed_value: "296000",
            number_of_taxable_accounts: "844"
          },
          {
            comm_code: "FHT",
            community_name: "Forest Heights",
            date: "2017-01-01T00:00:00.000",
            median_assessed_value: "290000",
            number_of_taxable_accounts: "1891"
          },
          {
            comm_code: "DOV",
            community_name: "Dover",
            date: "2017-01-01T00:00:00.000",
            median_assessed_value: "285000",
            number_of_taxable_accounts: "4136"
          },
          {
            comm_code: "BNK",
            community_name: "Bankview",
            date: "2017-01-01T00:00:00.000",
            median_assessed_value: "265000",
            number_of_taxable_accounts: "2249"
          },
          {
            comm_code: "CHV",
            community_name: "Country Hills Village",
            date: "2017-01-01T00:00:00.000",
            median_assessed_value: "260000",
            number_of_taxable_accounts: "2231"
          },
          {
            comm_code: "LPK",
            community_name: "Lincoln Park",
            date: "2017-01-01T00:00:00.000",
            median_assessed_value: "255000",
            number_of_taxable_accounts: "1493"
          },
          {
            comm_code: "SNA",
            community_name: "Sunalta",
            date: "2017-01-01T00:00:00.000",
            median_assessed_value: "241000",
            number_of_taxable_accounts: "1291"
          }
        ],
        targetIndex: 184,
        lastAvailableYear: "2017",
        highestValue: "1640000",
        lowestValue: "42000"
      }
    };
  }

  render() {
    console.log(this.props.data.topic);
    if (this.props.data.topic === "crime") {
      return (
        <div className="col mapCol">
          <Crime data={this.props.data} changeTopic={this.props.changeTopic} />
          <div>
            <GoogleApiWrapper
              communityCenterLatLong={this.props.data.communityCenterLatLong}
              polygonCoords={this.props.data.polygonCoords}
            />
          </div>
        </div>
      );
    } else if (this.props.data.topic === "garbage") {
      return (
        <div style={{ position: "relative" }} className="col mapCol">
          <Garbage
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
    } else if (this.props.data.topic === "property") {
      return (
        <div className="col mapCol">
          <Property
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
