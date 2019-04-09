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

    let markers = this.props.pins.map(marker => {
      return (
        <Marker
          key={marker.key}
          name={marker}
          position={marker.location}
          title={marker.address}
          onClick={this.onMarkerClick}
          animation={google.maps.Animation.DROP}
          icon={"../../../public/images/home.png"}
        />
      );
    });
    console.log(this.props.trafficPins)
    let trafficMarkers = this.props.trafficPins.map(tmarker => {
      return (
        <Marker
          key={tmarker.key}
          name={tmarker}
          position={tmarker.location}
          title={tmarker.description}
          // information={tmarker.information}
          onClick={this.onMarkerClick}
          animation={google.maps.Animation.DROP}
          // icon={""}
        />
      );
    });
    console.log(trafficMarkers)

    const infoData =
      this.props.topic === "construction permits" ? (
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
      ) :  ( <p> {this.state.selectedPlace.name ?
        this.state.selectedPlace.name.description : "" }</p>
      );
      

    return (
      <Map
        google={this.props.google}
        zoom={this.props.zoom}
        style={mapStyles}
        initialCenter={this.props.communityCenterLatLong}
        bounds={bounds}
      >
        {markers}
        { trafficMarkers }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>{infoData}</div>
        </InfoWindow>  
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
