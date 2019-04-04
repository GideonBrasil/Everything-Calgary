import React, { Component } from "react";
import Autocomplete from "./Autocomplete.jsx";
import suggestions from "../helper/communities.js";

require("../styles/main.scss");

class Jumbotron extends Component {
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
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Calgary!</h1>
          <hr></hr>
          <form className="form-inline" onSubmit={checkCommunity}>
            <Autocomplete
              className="form-control mr-sm-2"
              type="search"
              name="community"
              suggestions={suggestions}
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbotron;
