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
    // markers: [
    //   {
    //     name: "It's yaaaa Robin",
    //     title: "Robin Hood",
    //     position: {
    //       lat: 51.157707,
    //       lng: -114.148879
    //     }
    //   },
    //   {
    //     name: "It's yaaaa boi LJ",
    //     title: "Little John",
    //     position: {
    //       lat: 51.156994,
    //       lng: -114.151003
    //     }
    //   }
    // ]
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

    console.log("ThESE ARE THE MARKER PROPS:", this.props.pins);
    let markers = this.props.pins.map(marker => {
      return (
        <Marker
          key={parseFloat(marker.location.lng)}
          name={marker.description}
          position={marker.location}
          title={marker.address}
          onClick={this.onMarkerClick}
          animation={google.maps.Animation.DROP}
        />
      );
    });

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
          <div>
            <h2>{this.state.selectedPlace.name}</h2>
          </div>
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
