import React, { Component } from "react";
require("../styles/main.scss");
import SideNav from "./SideNav.jsx";
import Middle from "./Middle.jsx";
import Jumbotron from "./Jumbotron.jsx";

/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Main extends Component {
  render() {
    if (this.props.jumbotron) {
      return (
        <React.Fragment>
          <Jumbotron updateCommunity={this.props.updateCommunity} />
        </React.Fragment>
      );
    } else {
      return (
        <div className="row">
          <SideNav topic={this.props.topic}/>
          <Middle
            data={this.props.data}
            updateCommunity={this.props.updateCommunity}
          />
        </div>
      );
    }
  }
}

export default Main;
