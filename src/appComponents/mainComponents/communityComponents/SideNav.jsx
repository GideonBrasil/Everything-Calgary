import React, { Component } from "react";

class Sidenav extends Component {

  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h5>Everything about... <br /></h5>
          <br></br>
          <h4>
            {this.props.data.community.replace("/", "/\n")}
          </h4>
        </div>
        <ul className="list-unstyled components">
          <li className={this.props.data.topic === 'construction permits' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="construction permits">Construction Permits</a>
          </li>
          <li className={this.props.data.topic === 'crime' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="crime">Crime</a>
          </li>
          <li className={this.props.data.topic === 'garbage' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="garbage">Garbage pickup</a>
          </li>
          <li className={this.props.data.topic === 'population' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="population">Population</a>
          </li>
          <li className={this.props.data.topic === 'property' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="property">Property Assessment</a>
          </li>
          <li className={this.props.data.topic === 'schools' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="schools">Schools</a>
          </li>
          <li className={this.props.data.topic === 'traffic incidents' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="traffic incidents">Traffic Incidents</a>
          </li>
          <li className={this.props.data.topic === 'traffic signals' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="traffic signals">Crosswalks</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidenav;
