import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Main from "./main.jsx";
import Footer from "./Footer.jsx";
import GoogleMaps from "./GoogleMaps.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <GoogleMaps />
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
