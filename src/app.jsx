import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotron: true,
      communityCenterLatLong: {},
      community: "",
      polygonCoords: []
    };
    this.updateCommunity = this.updateCommunity.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      jumbotron: false
    }));
  }

  componentDidMount() {
    console.log("here");
    fetch(`http://localhost:3000/${"shawnessy"}/coordinates`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log("fdfhghh", err);
      });
    console.log("After");
  }

  updateCommunity(community) {
    // this.setState(state => ({
    //   jumbotron: false,
    //   community: community
    // }));
  }

  render() {
    return (
      <div>
        <NavBar
          jumbotron={this.state.jumbotron}
          updateCommunity={this.updateCommunity}
          community={this.state.community}
        />
        <Main
          data={this.state}
          updateCommunity={this.updateCommunity}
          jumbotron={this.state.jumbotron}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
