import React, {Component} from 'react';
import PropTypes from "prop-types";
import Autocomplete from "./Autocomplete.jsx";
import suggestions from "../helper/communities.js"


class NavBar extends Component {

  render() {
    if (this.props.jumbotron === false){
      return (
        <nav className="navbar sticky-top navbar-light">
        <a className="navbar-brand"><img id="logo" src="/public/images/logo1.png" alt="logo"></img> Everything Calgary</a>
        <a className="btn btn-danger btn-lg btn2" role="button" onClick={()=>this.props.click()}>Calgary Now!</a>        
        <form className="form-inline">
          <Autocomplete className="form-control mr-sm-2" type="search" placeholder="Find your neighborhood" suggestions={suggestions}/>
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      )
    } else {
      return (
        <nav className="navbar sticky-top navbar-light">
          <a className="navbar-brand"><img id="logo" src="/public/images/logo1.png" alt="logo"></img> Everything Calgary</a>
          <a className="btn btn-danger btn-lg btn2" role="button" onClick={()=>this.props.click()}>Calgary Now!</a>        
        </nav>
      );
    }
  }
}

export default NavBar;
