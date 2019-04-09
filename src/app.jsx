import React, { Component } from "react";
import NavBar from "./appComponents/NavBar.jsx";
import Main from "./appComponents/main.jsx";
import Footer from "./appComponents/Footer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trafficPins: [],
      jumbotron: true,
      communityCenterLatLong: {},
      community: "",
      communityCode: "",
      communityId: "",
      polygonCoords: [],
      pins: [],
      topic: "",
      calgary: false
    };
    this.updateCommunity = this.updateCommunity.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeTopic = this.changeTopic.bind(this);
    this.showJumbotron = this.showJumbotron.bind(this);
    this.showCalgary = this.showCalgary.bind(this);
    this.updatePins = this.updatePins.bind(this);
    this.updateTrafficPins = this.updateTrafficPins.bind(this);
  }

  updatePins() {
    const removeSlash = this.state.community.replace("/", "-");
    fetch(`http://localhost:3000/constructionPermits/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          pins: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateTrafficPins() {
    fetch(`http://localhost:3000/trafficIncidents/${this.state.community}`)
      .then(res => res.json())
      .then(data => {
        // console.log("data in traffic_incidents:", data);
        this.setState(state => ({
          trafficPins: data
        }))
      })
      .catch(err => {
        console.log(err);
      });
    }
  
  

  handleClick() {
    this.setState(state => ({
      jumbotron: false
    }));
  }

  updateCommunity(community) {
    const removeSlash = community.replace("/", "-");
    fetch(`http://localhost:3000/coordinates/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          pins: [],
          community: community.toUpperCase(),
          communityCenterLatLong: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
    fetch(`http://localhost:3000/geocoordinates/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          polygonCoords: data.geoCodes,
          communityCode: data.communityCode,
          jumbotron: false,
          calgary: false,
          topic: ""
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  showJumbotron() {
    if (this.state.jumbotron === false) {
      this.setState(state => ({
        jumbotron: true,
        calgary: false
      }));
    }
  }

  changeTopic(newTopic) {
    if (newTopic === "construction permits") {
      this.updatePins();
    }
    if (newTopic === "traffic incidents") {
      this.updateTrafficPins();
    }
    this.setState({
      pins: [],
      topic: newTopic
    });
  }

  showCalgary() {
    fetch(`http://localhost:3000/city/calgary`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          polygonCoords: data,
          jumbotron: false,
          calgary: true,
          topic: "",
          pins: []
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="main-div">
        <NavBar
          jumbotron={this.state.jumbotron}
          updateCommunity={this.updateCommunity}
          community={this.state.community}
          data={this.state}
          showJumbotron={this.showJumbotron}
          showCalgary={this.showCalgary}
          calgary={this.state.calgary}
        />
        <Main
          data={this.state}
          updateCommunity={this.updateCommunity}
          changeTopic={this.changeTopic}
          showCalgary={this.showCalgary}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
