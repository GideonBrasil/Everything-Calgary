import React, { Component } from "react";

class Sidenav extends Component {
  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h4>
            Everything... <br />
            {this.props.data.community.replace("/", "/\n")}
          </h4>
        </div>
        <ul className="list-unstyled components">
          <li onClick={this.props.chooseStatistics}>
            <a id="construction permits">Construction Permits</a>
          </li>
          <li onClick={this.props.chooseStatistics}>
            <a id="crime">Crime</a>
          </li>
          <li onClick={this.props.chooseStatistics}>
            <a id="garbage">Garbage pickup</a>
          </li>
          <li onClick={this.props.chooseStatistics}>
            <a id="population">Population</a>
          </li>
          <li onClick={this.props.chooseStatistics}>
            <a id="property">Property Assessment</a>
          </li>
          <li onClick={this.props.chooseStatistics}>
            <a id="schools">Schools</a>
          </li>
          <li onClick={this.props.chooseStatistics}>
            <a id="traffic incidents">Traffic Incidents</a>
          </li>
          <li onClick={this.props.chooseStatistics}>
            <a id="traffic signals">Traffic Signals</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidenav;
