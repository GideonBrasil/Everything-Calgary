import React, { Component } from "react";

class Calgary_Sidenav extends Component {
  render() {
    return (
      <nav id="sidebar" className="col">
        <div className="sidebar-header">
          <h4>
            Everything Calgary... <br />
          </h4>
        </div>
        <ul className="list-unstyled components">
          <li className={this.props.data.topic === 'careers' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="careers">Careers</a>
          </li>
          <li className={this.props.data.topic === 'events' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="events">Events</a>
          </li>
          <li className={this.props.data.topic === 'salary' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="salary">Civil Service Compensation</a>
          </li>
          <li className={this.props.data.topic === 'news' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="news">News</a>
          </li>
          <li className={this.props.data.topic === 'traffic' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="traffic">Traffic Incidents</a>
          </li>
          <li className={this.props.data.topic === 'population' ? 'active': null} onClick={this.props.chooseStatistics}>
            <a id="population">Population</a>
          </li>
        </ul>
      </nav>
    );
  }
}

// className="active">
export default Calgary_Sidenav;
