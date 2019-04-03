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
      communityCenterLatLong: {lng: -114.089777105022, lat: 51.077573661425},
      community: "",
      topic: "",
      polygonCoords: [{ lat: 51.074913395982, lng: -114.088408126106 },
        { lat: 51.073741979768, lng: -114.089935974536 },
        { lat: 51.073802365782, lng: -114.090990227051 },
        { lat: 51.07450781866, lng: -114.09217734367 },
        { lat: 51.075230057871, lng: -114.094520799987 },
        { lat: 51.0753949146, lng: -114.094739303562 },
        { lat: 51.07736130163, lng: -114.094734806684 },
        { lat: 51.077806244546, lng: -114.094734480862 },
        { lat: 51.080426161393, lng: -114.094732562772 },
        { lat: 51.080886845912, lng: -114.094732224852 },
        { lat: 51.081336690632, lng: -114.094731896192 },
        { lat: 51.083045023765, lng: -114.094743593294 },
        { lat: 51.083046418866, lng: -114.093006111786 },
        { lat: 51.083037692344, lng: -114.092760872966 },
        { lat: 51.083005712139, lng: -114.092584369381 },
        { lat: 51.082945168113, lng: -114.092425752365 },
        { lat: 51.082857827371, lng: -114.092282035598 },
        { lat: 51.082808124108, lng: -114.092193462512 },
        { lat: 51.082746673027, lng: -114.092099235859 },
        { lat: 51.08251362989, lng: -114.091723210461 },
        { lat: 51.082268615191, lng: -114.091338734699 },
        { lat: 51.081143022258, lng: -114.089572415516 },
        { lat: 51.080667040258, lng: -114.088825465992 },
        { lat: 51.080441019176, lng: -114.088470784827 },
        { lat: 51.080209751473, lng: -114.088107831082 },
        { lat: 51.079356991591, lng: -114.086769555518 },
        { lat: 51.07883737295, lng: -114.085953841538 },
        { lat: 51.078651663424, lng: -114.085662018289 },
        { lat: 51.078395458684, lng: -114.085353070916 },
        { lat: 51.078089108536, lng: -114.085062832638 },
        { lat: 51.078016186715, lng: -114.085029748941 },
        { lat: 51.077706177462, lng: -114.084810699623 },
        { lat: 51.077664421164, lng: -114.085012605787 },
        { lat: 51.07757666266, lng: -114.085439699031 },
        { lat: 51.0762235209, lng: -114.087614953076 },
        { lat: 51.076017107305, lng: -114.088190695849 },
        { lat: 51.07523389785, lng: -114.088191904122 },
        { lat: 51.074913395982, lng: -114.088408126106 }]
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

  // componentDidMount() {
  //   console.log("here");
  //   fetch(`http://localhost:3000/${"shawnessy"}/coordinates`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log("fdfhghh", err);
  //     });
  //   console.log("After");
  // }

  updateCommunity(community) {
    this.setState(state => ({
      jumbotron: false,
      community: community
    }));
  }

  showJumbotron(){
    if (this.state.jumbotron === false){
      this.setState(state => ({
        jumbotron: true
      }))
    }
  }

  changeTopic(newTopic){
    this.setState(state => ({
      topic: newTopic
    }))
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
          changeTopic={this.changeTopic}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
