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
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    var polygonCoords = [
      { lat: 50.912759198755, lng: -114.072135402182 },
      { lat: 50.912736235776, lng: -114.071568531683 },
      { lat: 50.912742400698, lng: -114.071015532417 },
      { lat: 50.912777634279, lng: -114.07057778666 },
      { lat: 50.912827449139, lng: -114.070117021034 },
      { lat: 50.912900547368, lng: -114.0697023715 },
      { lat: 50.913043709643, lng: -114.069066621487 },
      { lat: 50.913439428604, lng: -114.067487913166 },
      { lat: 50.90854277434, lng: -114.064420291641 },
      { lat: 50.905044150691, lng: -114.062205984208 },
      { lat: 50.903716624714, lng: -114.061398583019 },
      { lat: 50.897551299041, lng: -114.057455722933 },
      { lat: 50.892596978886, lng: -114.054391978111 },
      { lat: 50.892582114446, lng: -114.063688292803 },
      { lat: 50.892585934388, lng: -114.065204290532 },
      { lat: 50.892675101985, lng: -114.065254734525 },
      { lat: 50.899519155001, lng: -114.069112846038 },
      { lat: 50.89982658794, lng: -114.069271080986 },
      { lat: 50.900130659359, lng: -114.069418639338 },
      { lat: 50.900426813372, lng: -114.06955219451 },
      { lat: 50.900732075481, lng: -114.069678823009 },
      { lat: 50.901321034569, lng: -114.069893820919 },
      { lat: 50.90190008805, lng: -114.070069913222 },
      { lat: 50.902386119631, lng: -114.070190400484 },
      { lat: 50.902621094855, lng: -114.070240747046 },
      { lat: 50.902875930839, lng: -114.070289294261 },
      { lat: 50.903178488459, lng: -114.07033287102 },
      { lat: 50.902967047765, lng: -114.071755107788 },
      { lat: 50.902835719006, lng: -114.072875491637 },
      { lat: 50.902718783199, lng: -114.074171552658 },
      { lat: 50.902630839841, lng: -114.07550399601 },
      { lat: 50.90260398118, lng: -114.07635044563 },
      { lat: 50.902576879595, lng: -114.078664157439 },
      { lat: 50.902606143311, lng: -114.08004823398 },
      { lat: 50.90271578137, lng: -114.081655169218 },
      { lat: 50.902845703809, lng: -114.083023521728 },
      { lat: 50.903035777068, lng: -114.084726070158 },
      { lat: 50.903248670122, lng: -114.086083905022 },
      { lat: 50.903493162492, lng: -114.087405531407 },
      { lat: 50.903958649934, lng: -114.089560626842 },
      { lat: 50.904917467424, lng: -114.093659651192 },
      { lat: 50.90506158608, lng: -114.09436213207 },
      { lat: 50.905174610434, lng: -114.095170702357 },
      { lat: 50.905215414594, lng: -114.09582399016 },
      { lat: 50.905233813578, lng: -114.098949445101 },
      { lat: 50.907564947917, lng: -114.098978218861 },
      { lat: 50.907789923365, lng: -114.098984340785 },
      { lat: 50.907983824911, lng: -114.099019252517 },
      { lat: 50.908204364, lng: -114.099088720332 },
      { lat: 50.908400657535, lng: -114.099161972141 },
      { lat: 50.908548469223, lng: -114.099235121488 },
      { lat: 50.908921989799, lng: -114.099485499166 },
      { lat: 50.90941264515, lng: -114.099812743033 },
      { lat: 50.909572587482, lng: -114.09989844919 },
      { lat: 50.909751810357, lng: -114.099981150035 },
      { lat: 50.909942624921, lng: -114.100036435759 },
      { lat: 50.910089131502, lng: -114.100051993038 },
      { lat: 50.910222151133, lng: -114.100058376943 },
      { lat: 50.910836734859, lng: -114.100060800877 },
      { lat: 50.912206452225, lng: -114.100057752456 },
      { lat: 50.914024544509, lng: -114.100053350166 },
      { lat: 50.914023511251, lng: -114.096937497057 },
      { lat: 50.914022071499, lng: -114.092506388364 },
      { lat: 50.914014656444, lng: -114.082749604356 },
      { lat: 50.914013578141, lng: -114.080776934502 },
      { lat: 50.913992494754, lng: -114.080362898251 },
      { lat: 50.913958022636, lng: -114.079995309603 },
      { lat: 50.913902188048, lng: -114.079615010217 },
      { lat: 50.913808979749, lng: -114.079200853069 },
      { lat: 50.913699732233, lng: -114.078803568775 },
      { lat: 50.913554887297, lng: -114.078321160894 },
      { lat: 50.913370629949, lng: -114.077698867708 },
      { lat: 50.913251275225, lng: -114.077184858468 },
      { lat: 50.913155835306, lng: -114.076703340643 },
      { lat: 50.9130979853, lng: -114.076265155914 },
      { lat: 50.91290089394, lng: -114.073877605749 },
      { lat: 50.912759198755, lng: -114.072135402182 }
    ];

    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 50.9033101621815,
          lng: -114.073756408287
        }}
      >
        <Polygon
          paths={polygonCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
        />
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.YOUR_GOOGLEMAPS_API_KEY
})(MapContainer);
