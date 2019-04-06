import React, { Component } from "react";


class Calgary_Sidenav extends Component {


  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h4>Everything currently... <br/></h4>
        </div>
        <ul className="list-unstyled components">
          <li><a id="crime">News</a></li>
          <li><a id="garbage">Traffic Incidents</a></li>
          <li><a id="property">Events</a></li>
        </ul>
      </nav>
    );
  }
}

// className="active">
export default Calgary_Sidenav;
