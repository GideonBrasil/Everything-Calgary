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
          <li 
            className={this.props.data.topic === 'construction permits' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'See where and what is being constructed in your community.'}
            >
            <a id="construction permits">Construction Permits</a>
          </li>
          <li
            className={this.props.data.topic === 'crime' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'Get the crime story for your community ... compare and contrast with the rest of Calgary.'}
            >
            <a id="crime">Crime Story</a>
          </li>
          <li
            className={this.props.data.topic === 'garbage' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'Find out when waste, compost and recycled materials are scheduled to be picked up in your community.'}
            >
            <a id="garbage">Waste Pickup</a>
          </li>
          <li
            className={this.props.data.topic === 'population' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'See the population of your community for every year since 1968.'}
            >
            <a id="population">Population</a>
          </li>
          <li
            className={this.props.data.topic === 'property' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'Know the latest average assessed property value for your community ... find comparable communities ... see where your community ranks.'}
            >
            <a id="property">Property Assessment</a>
          </li>
          <li
            className={this.props.data.topic === 'schools' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'Locate schools in your community ... choose Crosswalks below to pin their location as well!'}
            >
            <a id="schools">Schools</a>
          </li>
          <li
            className={this.props.data.topic === 'traffic incidents' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'Identify where traffic accidents are occuring in your community ... choose Crosswalks below to pin their location as well!'}
            >
            <a id="traffic incidents">Traffic Incidents</a>
          </li>
          <li
            className={this.props.data.topic === 'traffic signals' ? 'active': null}
            onClick={this.props.chooseStatistics}
            title={'See the types of Crosswalks and ther locations in your community ... cross reference with Traffic Incidents or School locations above.'}
            >
            <a id="traffic signals">Crosswalks</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidenav;
