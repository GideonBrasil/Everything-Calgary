import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import GoogleMaps from "./GoogleMaps.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <GoogleMaps />
        <Footer />
      </div>
    );
  }
}

export default App;
