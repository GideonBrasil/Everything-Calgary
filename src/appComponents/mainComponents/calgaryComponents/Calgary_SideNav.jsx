import React, { Component } from "react";


class Calgary_Sidenav extends Component {


  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h4>Everything currently... <br/></h4>
        </div>
        <ul className="list-unstyled components">
          <li onClick={this.props.chooseStatistics}><a id="news">News</a></li>
          <li onClick={this.props.chooseStatistics}><a id="traffic">Traffic Incidents</a></li>
          <li onClick={this.props.chooseStatistics}><a id="events">Events</a></li>
          <li onClick={this.props.chooseStatistics}><a id="salary">Civil Service Compensation</a></li>
          <li onClick={this.props.chooseStatistics}><a id="careers">Careers</a></li>
        </ul>
      </nav>
    );
  }
}

// className="active">
export default Calgary_Sidenav;
