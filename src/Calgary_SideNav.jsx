import React, { Component } from "react";


class Calgary_Sidenav extends Component {


  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h4>Everything currently... <br/>{this.props.community}</h4>
        </div>
        <ul className="list-unstyled components">
          <li onClick={this.props.chooseStatistics} ><a id="crime">News</a></li>
          <li onClick={this.props.chooseStatistics} ><a id="garbage">Traffic Incidents</a></li>
          <li onClick={this.props.chooseStatistics} ><a id="property">Events</a></li>
        </ul>
      </nav>
    );
  }
}

// className="active">
export default Calgary_Sidenav;
