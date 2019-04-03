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

//Possible way to get zoom
  // adjustMap = (mapProps, map) => {
  //   let bounds = new this.props.google.maps.LatLngBounds();
  //   for (var i = 0; i < this.props.polygonCoords.length; i++) {
  //     bounds.extend(this.props.polygonCoords[i]);
  //   }
  //   map.panToBounds(bounds, 10);
  // }

  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        initialCenter={this.props.communityCenterLatLong}
        center={this.props.communityCenterLatLong}
        onReady={this.adjustMap}
      >
        <Polygon
          paths={this.props.polygonCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.YOUR_GOOGLEMAPS_API_KEY
})(MapContainer);
