import React, {Component} from 'react';
require("../styles/main.scss");
import SideNav from './SideNav.jsx'
import Middle from './Middle.jsx'
import Jumbotron from './Jumbotron.jsx'


/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Main extends Component {
  render() {
    if (this.props.jumbotron){
      return (
        <React.Fragment>
          <Jumbotron click={this.props.click}/>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <SideNav />
          <Middle />
        </React.Fragment>
      );
    }
  }
}

export default Main;