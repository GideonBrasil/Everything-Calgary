import React, {Component} from 'react';

class Sidenav extends Component {
  render() {
    return (
      <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Show on map...</h3>
            </div>

            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#">Crime</a>
                </li>
                <li>
                    <a href="#">Traffic incidents</a>
                </li>
                <li>
                    <a href="#">Something else</a>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Sidenav;