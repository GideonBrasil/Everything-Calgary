import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import GoogleApiWrapper from "./GoogleMaps.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <GoogleApiWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
