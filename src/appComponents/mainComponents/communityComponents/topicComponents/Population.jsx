import React, { Component } from "react";

class Events extends Component {
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
