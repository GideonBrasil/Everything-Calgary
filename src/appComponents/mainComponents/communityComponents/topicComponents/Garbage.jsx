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
    const removeSlash = this.props.data.community.replace("/", "-");
    fetch(`http://localhost:3000/garbage/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          collectSched: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const green = this.state.collectSched["Green"];
    const blue = this.state.collectSched["Blue"];
    const black = this.state.collectSched["Black"];
    return (
      <Modal
        show
        onHide={() => this.props.changeTopic("")}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // dialogClassName="modal-60w"
        className="darren-garbage"
      >
        <Modal.Header closeButton>
          <Modal.Title>Waste and Recycling Pickup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            <CardDeck>
              <Card.Body className="card">
                <Card.Title>
                  <i className="fas fa-trash-alt fa-4x" />
                </Card.Title>
                <Card.Subtitle>Garbage</Card.Subtitle>
                <br/>
                <Card.Text>
                  {black ? <p>{black[1]} <strong>{black[0]}</strong></p> : "No garbage days"}
                </Card.Text>
              </Card.Body>
              <Card.Body className="card">
                <Card.Title>
                  <i className="fas fa-recycle fa-4x" />
                </Card.Title>
                <Card.Subtitle>Recycling</Card.Subtitle>
                <br/>
                <Card.Text>
                  {blue ? <p>{blue[1]} <strong>{blue[0]}</strong></p>  : "No recycling days"}
                </Card.Text>
              </Card.Body>
              <Card.Body className="card">
                <Card.Title>
                  <i className="fas fa-trash-restore fa-4x" />
                </Card.Title>
                <Card.Subtitle>Compost</Card.Subtitle>
                <br/>
                <Card.Text>
                  {green ? <p>{green[1]} <strong>{green[0]}</strong></p>  : "No compost days"}
                </Card.Text>
              </Card.Body>
            </CardDeck>
          </span>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Garbage;
