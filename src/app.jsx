import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import GoogleMaps from "./GoogleMaps.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      jumbotron: true,
      community: '',
    });
    
    this.handleClick= this.handleClick.bind(this);
    this.updateCommunity= this.updateCommunity.bind(this);
  }

  handleClick() {
    console.log('clicked')
    this.setState(state => ({
      jumbotron: false,
    }));
  }
  
  updateCommunity(community){
    this.setState(state =>({
      jumbotron: false,
      community: community,
    }));
  }
  

  render() {
    return (
      <div>
        <NavBar jumbotron={this.state.jumbotron} updateCommunity={this.updateCommunity} community={this.state.community}/>
        <Main jumbotron={this.state.jumbotron} updateCommunity={this.updateCommunity}/>
        <GoogleMaps />
        <Footer />
      </div>
    );
  }
}

export default App;
