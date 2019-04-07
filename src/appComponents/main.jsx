import React, { Component } from "react";
import SideNav from "./mainComponents/communityComponents/SideNav.jsx";
import Middle from "./mainComponents/communityComponents/Middle.jsx";
import Jumbotron from "./mainComponents/Jumbotron.jsx";
import Calgary_Middle from "./mainComponents/calgaryComponents/Calgary_Middle.jsx";
import Calgary_SideNav from "./mainComponents/calgaryComponents/Calgary_SideNav.jsx";

/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Main extends Component {
  render() {
    const chooseStatistics = e => {
      this.props.changeTopic(e.target.id);
    };

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
          data={this.props.data}
          chooseStatistics={chooseStatistics}
          />
          <Calgary_Middle
            data={this.props.data}
            changeTopic={this.props.changeTopic}
            updateCommunity={this.props.updateCommunity}
          />
        </div>
      );
    } else {
      return (
        <div className="row">
          <SideNav
            data={this.props.data}
            chooseStatistics={chooseStatistics}
          />
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
