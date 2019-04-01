import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Main from "./main.jsx";
import Footer from "./Footer.jsx";
import GoogleMaps from "./GoogleMaps.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      jumbotron: true,
    });
    
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked')
    this.setState(state => ({
      jumbotron: false,
    }));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Main click={this.handleClick} jumbotron={this.state.jumbotron}/>
        <GoogleMaps />
        <Footer />
      </div>
    );
  }
}

export default App;
