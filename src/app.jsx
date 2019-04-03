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

  updateCommunity(community) {
    fetch(`http://localhost:3000/coordinates/${community}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          community: community,
          communityCenterLatLong: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
    fetch(`http://localhost:3000/geocoordinates/${community}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          polygonCoords: data,
          jumbotron: false
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeTopic(newTopic) {
    this.setState(state => ({
      topic: newTopic
    }));
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
          topic={this.state.topic}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
