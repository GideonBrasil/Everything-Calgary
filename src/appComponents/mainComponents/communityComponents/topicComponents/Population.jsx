import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class Population extends Component {
  constructor(props) {
    super(props);
    this.state = {
      population: null
    };
  }

  eventsKeyGenerator() {
    return Math.random() * 9;
  }

  componentDidMount() {
    const removeSlash = this.props.data.community.replace("/", "-");
    fetch(`http://localhost:3000/population/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          population: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.Population);
    return (
      <Modal
        id="population-modal"
        show
        onHide={() => this.props.changeTopic("")}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-60w"
      >
        <Modal.Header closeButton>
          <Modal.Title>No population states yet</Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }
}

export default Population;
