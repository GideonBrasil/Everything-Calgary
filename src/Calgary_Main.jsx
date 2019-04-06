import React, { Component } from "react";
require("../styles/main.scss");
import SideNav from "./Calgary_SideNav.jsx";
import Middle from "./Calgary_Middle.jsx";
import Jumbotron from "./Jumbotron.jsx";

/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Calgary_Main extends Component {
  render() {

    const chooseStatistics = e => {
      this.props.changeTopic(e.target.id)
    }

    if (this.props.jumbotron) {
      return (
        <React.Fragment>
          <Jumbotron updateCommunity={this.props.updateCommunity} />
        </React.Fragment>
      );
    } else {
      return (
        <div className="row">
          <SideNav topic={this.props.topic} chooseStatistics={chooseStatistics} community={this.props.data.community}/>
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

export default Calgary_Main;
