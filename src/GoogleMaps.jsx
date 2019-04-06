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

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: {lat: '51.0433951810899', lng: '-114.065661597048'},
      map,
      title: 'Hello World!'
    });
    return marker;
  }

  render() {
    var bounds = new this.props.google.maps.LatLngBounds();
    this.props.polygonCoords.reverse().map(polygon => bounds.extend(polygon));

    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        initialCenter={this.props.communityCenterLatLong}
        bounds={bounds}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
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
