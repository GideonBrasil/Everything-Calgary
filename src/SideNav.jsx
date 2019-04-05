import React, { Component } from "react";


class Sidenav extends Component {


  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h3>What do you Wanna Know about <br/>{this.props.community}?</h3>
        </div>
        <ul className="list-unstyled components">
          <li onClick={this.props.chooseStatistics} ><a id="crime">Crime</a></li>
          <li onClick={this.props.chooseStatistics} ><a id="garbage">Garbage pickup</a></li>
          <li onClick={this.props.chooseStatistics} ><a id="property">Property Assessment</a></li>
        </ul>
      </nav>
    );
  }
}

// className="active">
export default Sidenav;
