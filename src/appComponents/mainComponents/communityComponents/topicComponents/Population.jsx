import React, { Component } from "react";

class Population extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null
    };
  }

  eventsKeyGenerator() {
    return Math.random() * 9;
  }
}

export default Population;
