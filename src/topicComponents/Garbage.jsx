import React, { Component } from "react";
import { Modal, CardDeck, Card } from "react-bootstrap";

class Garbage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectSched: []
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
    // const { collectionData } = this.state;
    // if (!Object.keys(propData).length) return null;
    // console.log(propData);
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
            {/* <div style={{ position:'absolute', backgroundColor: 'white', opacity:'0.6', zIndex:'300' }}> */}
            <p> {this.state.collectSched} </p>
      </Modal.Body>
      </Modal>
    );
  }
}

export default Garbage;