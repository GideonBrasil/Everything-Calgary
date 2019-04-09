import React, { Component } from "react";
import {
  Polygon,
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker
} from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto"
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: true, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  selectIcon = () => {
    switch(this.props.topic) {
      case "construction permits":
        return "../../../public/images/home.png";
      case "traffic incidents":
        return "../../../public/images/accident.png";
      case "schools":
        return "../../../public/images/school-bus.png";
      default:
        return "";
    }

  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    var bounds = new this.props.google.maps.LatLngBounds();
    this.props.polygonCoords.reverse().map(polygon => bounds.extend(polygon));
    const icon = this.selectIcon()
    // console.log(this.props.pins)
    let markers = this.props.pins.map(marker => {
      return (
        <Marker
          key={marker.key}
          name={marker}
          position={marker.location}
          title={marker.address}
          onClick={this.onMarkerClick}
          animation={google.maps.Animation.DROP}
          icon={ icon }
        />
      );
    });
    // console.log(this.props.signalPins)
    let signalMarkers = this.props.signalPins.map(marker => {
      return (
        <Marker
          key={marker.key}
          position={marker.location}
          title={marker.address}
          animation={google.maps.Animation.DROP}
          icon={ "../../../public/images/pedestrian-crossing.png" }
        />
      );
    });

    const infoData = () => {
      if (this.props.topic === "construction permits") {
        return (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Permit description:</th>
                  <th scope="col">
                    {this.state.selectedPlace.name
                      ? this.state.selectedPlace.name.description
                        ? this.state.selectedPlace.name.description
                        : "Unknown"
                      : ""}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Project type:</th>
                  <td>
                    {this.state.selectedPlace.name
                      ? this.state.selectedPlace.name.type
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Estimated project cost:</th>
                  <td>
                    {this.state.selectedPlace.name
                      ? "$" +
                          Number(
                            this.state.selectedPlace.name.estprojectcost
                          ).toLocaleString() ===
                        "$NaN"
                        ? "Project not estimated"
                        : "$" +
                          Number(
                            this.state.selectedPlace.name.estprojectcost
                          ).toLocaleString()
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Project started:</th>
                  <td>
                    {this.state.selectedPlace.name
                      ? this.state.selectedPlace.name.permiteDuration
                        ? this.state.selectedPlace.name.permiteDuration +
                          " days ago"
                        : "Construction project hasn't started"
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Permit status:</th>
                  <td>
                    {this.state.selectedPlace.name
                      ? this.state.selectedPlace.name.status
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Address:</th>
                  <td>
                    {this.state.selectedPlace.name
                      ? this.state.selectedPlace.name.address
                      : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          )} else if (this.props.topic === 'traffic incidents' && this.state.selectedPlace.name) {
          return (
            <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Traffic Incident:</th>
                      <th scope="col"> { this.state.selectedPlace.name.address }</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Time Reported:</th>
                      <td>
                        { this.state.selectedPlace.name.timeOf }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Description:</th>
                      <td>{ this.state.selectedPlace.name.information }</td>
                    </tr>
                    <tr>
                      <th scope="row">Time Cleared:</th>
                      <td>{ this.state.selectedPlace.name.timeClear }</td>
                    </tr>
                  </tbody>
                </table>
            )} else if (this.props.topic === 'schools' && this.state.selectedPlace.name){
                <p> this.state.selectedPlace.name.address </p>
          } else {
              return ""
            }
          }

    return (
      <Map
        google={this.props.google}
        zoom={this.props.zoom}
        style={mapStyles}
        initialCenter={this.props.communityCenterLatLong}
        bounds={bounds}
      >
        {markers}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          >
          <div>{infoData()}</div>

        </InfoWindow>

          {signalMarkers}
        <Polygon
          paths={this.props.polygonCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.25}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.YOUR_GOOGLEMAPS_API_KEY
})(MapContainer);
