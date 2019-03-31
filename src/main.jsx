import React, {Component} from 'react';
require("../styles/main.scss");
import Header from './sections/header.jsx';
import SearchBar from './sections/search_bar.jsx';


/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Main extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Calgary!</h1>
        <p className="lead">This is a simple app to help you keep up with what's going on in our city!</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Select Your Neighborhood</a>
        <a className="btn btn-danger btn-lg" href="#" role="button">Calgary Now</a>
      </div>
    );
  }
}

export default Main;