import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light">
        <a className="navbar-brand">Everything Calgary</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
