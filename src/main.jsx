import React, { Component } from "react";
require("../styles/main.scss");
import SideNav from "./SideNav.jsx";
import Middle from "./Middle.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Calgary_Middle from "./Calgary_Middle.jsx";
import Calgary_SideNav from "./Calgary_SideNav.jsx";

/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Main extends Component {
  render() {

    const chooseStatistics = e => {
      this.props.changeTopic(e.target.id)
    }

    if (this.props.jumbotron === true) {
      return (
        <React.Fragment>
          <Jumbotron updateCommunity={this.props.updateCommunity} />
        </React.Fragment>
      );
    } else if (this.props.calgary === true) {
      return (
        <div className="row">
          <Calgary_SideNav     
            topic={this.props.topic} 
            chooseStatistics={chooseStatistics}/>
          <Calgary_Middle
            data={this.props.data}
            changeTopic={this.props.changeTopic}
            updateCommunity={this.props.updateCommunity}/>
        </div>
      )
    } else {
      return (
        <div className="row">
          <SideNav 
            topic={this.props.topic} 
            chooseStatistics={chooseStatistics}/>
          <Middle
            data={this.props.data}
            changeTopic={this.props.changeTopic}
            updateCommunity={this.props.updateCommunity}
          />
        </div>
      );
    }
  }
}

export default Main;
