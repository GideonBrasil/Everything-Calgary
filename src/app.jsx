import React, { Component } from "react";
import GoogleMaps from "./GoogleMaps.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <GoogleMaps />
        <p>This is our first map</p>
      </div>
    );
  }
}

export default App;
