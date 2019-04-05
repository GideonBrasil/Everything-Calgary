import React, { Component } from "react";
import { Modal, CardDeck, Card } from "react-bootstrap";

class Garbage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectSched: {}
    };
  }
  componentDidMount() {

    fetch(`http://localhost:3000/garbage/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(state => ({
          collectSched: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    const green = this.state.collectSched['Green']
    const blue = this.state.collectSched['Blue']
    const black = this.state.collectSched['Black']
    return (
      <Modal
        show
        onHide={() => this.props.changeTopic("")}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // dialogClassName="modal-60w"
      >
       <Modal.Header closeButton>
          <Modal.Title>Waste and Recycling Pickup</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <h4><i className="fas fa-trash-alt fa-2x"></i> {black} </h4>
            <h4><i className="fas fa-recycle fa-2x"></i> {blue} </h4>
            <h4><i className="fas fa-trash-restore fa-2x"></i> {green} </h4>
      </Modal.Body>
      </Modal>
    );
  }
}

export default Garbage;