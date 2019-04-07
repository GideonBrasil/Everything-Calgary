import React, { Component } from "react";
import {
  Polygon,
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker
} from "google-maps-react";
import CollisionPins from "./topicComponents/collisionPins.jsx";


const mapStyles = {
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto"
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
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
    let image1 = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    let image2 = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/car.png';

    let something = [
          <Marker
            title = { 'Changing Colors Garage' }
            position = {{ lat: 51.042945115301, lng: -114.07169547032 }}
            name = { 'Changing Colors Garage' }
            icon = {image1}>
          <InfoWindow showingInfoWindow= {true} ><p>Hello</p></InfoWindow>
          </Marker>
          ,
        <Marker
          title = { 'Changing Colors Garage' }
          position = {{ lat: 51.040698989336, lng: -114.075206002408 }}
          name = { 'Changing Colors Garage' }
          animation = {google.maps.Animation.DROP}
          icon = {image1}
        />,
        <Marker
          title = { 'Changing Colors' }
          position = {{ lat: 51.042423905999, lng: -114.069662655696 }}
          name = { 'Changing Colors' }
          animation = {google.maps.Animation.DROP}
          icon = {image1}
        />]

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
