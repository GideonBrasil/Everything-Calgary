import React, { Component } from "react";
import PropTypes from "prop-types";
import Autocomplete from "./Autocomplete.jsx";
import suggestions from "../helper/communities.js";

class NavBar extends Component {
  render() {
    const checkCommunity = event => {
      event.preventDefault();
      let content = event.target.elements[0].value;
      if (suggestions.includes(content.toUpperCase())) {
        this.props.updateCommunity(content);
      } else {
        alert("Community does not exist!");
      }
    };
    if (this.props.jumbotron === false) {
      return (
        <nav className="navbar fixed navbar-light">
          <a onClick={this.props.showJumbotron} className="navbar-brand">
            <img id="logo" src="https://github.com/GideonBrasil/Everything-Calgary/blob/master/public/images/logo1.png?raw=true" alt="logo" />{" "}
          </a>
          <section>
{/*            <div id="calgary-now">
              <button
                style={{ color: 'white'}}
                className="btn btn-danger btn-lg btn2"
                id="btn2"
                role="button"
                onClick={() => this.props.click()}
              >
                Calgary Now!
              </button>
            </div>*/}
            <form className="form-inline" onSubmit={checkCommunity}>
              <Autocomplete
                className="form-control mr-sm-2"
                type="search"
                suggestions={suggestions}
                community={this.props.community}
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </section>
        </nav>
      );
    } else {
      return (
        <nav className="navbar fixed sticky-top navbar-light">
          <a className="navbar-brand">
            <img id="logo" src="https://github.com/GideonBrasil/Everything-Calgary/blob/master/public/images/logo1.png?raw=true" alt="logo" />{" "}
          </a>
{/*          <button
            className="btn btn-danger btn-lg"
            id="btn2"
            role="button"
            onClick={() => this.props.click()}
          >
            Calgary Now!
          </button>*/}
        </nav>
      );
    }
  }
}

export default NavBar;
