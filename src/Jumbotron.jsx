import React, {Component} from 'react';
import Autocomplete from "./Autocomplete.jsx";
import suggestions from "../helper/communities.js"


require("../styles/main.scss");


class Jumbotron extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Calgary!</h1>
          <form className="form-inline">
            <Autocomplete className="form-control mr-sm-2" type="search" placeholder="Search" suggestions={suggestions}/>
            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={()=>this.props.click()}>Search</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbotron;