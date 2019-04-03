import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Main from "./main.jsx";
import Footer from "./Footer.jsx";
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotron: true,
      communityCenterLatLong: {},
      community: "",
      polygonCoords: [],
      topic: "",
    };
    this.updateCommunity = this.updateCommunity.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeTopic = this.changeTopic.bind(this);
    this.showJumbotron = this.showJumbotron.bind(this);
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
      });
    fetch(`http://localhost:3000/geocoordinates/${community}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          polygonCoords: data,
          jumbotron: false
        }));
      })
      .catch(err => {});
  }

  showJumbotron(){
    if (this.state.jumbotron === false){
      this.setState(state => ({
        jumbotron: true
      }))
    }
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
          data={this.state}
          showJumbotron={this.showJumbotron}
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
