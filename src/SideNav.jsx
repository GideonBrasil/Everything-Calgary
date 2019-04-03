import React, { Component } from "react";

class Sidenav extends Component {
  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h3>Show on map...</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">Crime</li>
          <li>Garbage pickup</li>
          <li>Property Assessment</li>
        </ul>
      </nav>
    );
  }
}

export default Sidenav;
