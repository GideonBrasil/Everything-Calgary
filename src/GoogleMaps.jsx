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


function randomPinKey () {
  return Math.random()*102039333;
}

class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    permitPins: []
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

  addPinstoState (arrayData) {
    this.setState(state => ({
          permitPins: arrayData
        }));
  }
  getBuildingPermits () {
    fetch(`http://localhost:3000/buildingPermits/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.addPinstoState(data);
      })
      .catch(err => {
        console.log(err);
      });
  }


  componentDidMount() {
    if (this.props.permitPins) {
      console.log('hello');
      getBuildingPermits();
    }
  }

  render() {
    console.log(this.state.permitPins);
    var bounds = new this.props.google.maps.LatLngBounds();
    this.props.polygonCoords.reverse().map(polygon => bounds.extend(polygon));

    let markers = this.state.permitPins.map(pin => {
      return (
        <Marker
          key={randomPinKey()}
          name={pin.description}
          position={{lat: pin.location.coordinates[1], lng: pin.location.coordinates[0]}}
          title={pin.address}
          onClick={this.onMarkerClick}

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
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
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
