import React, {Component} from 'react';
require("../styles/main.scss");


class Jumbotron extends Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Calgary!</h1>
          <div className="btn btn-primary btn-lg btn1" role="button" onClick={()=>this.props.click()}>Select Your Neighborhood</div>
          <a className="btn btn-danger btn-lg btn2" role="button" onClick={()=>this.props.click()}>Calgary Now</a>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbotron;