import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-light">
        <a className="navbar-brand"><img src="/public/images/logo1.png" id="logo"> </img>Everything Calgary</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
