import React, { Component } from "react";
import { Modal, CardDeck, Card } from "react-bootstrap";

class News extends Component {
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
        className="darren-garbage"
      >
       <Modal.Header closeButton>
          <Modal.Title>Waste and Recycling Pickup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <span>
          <CardDeck>
            <Card.Body className="card">
              <Card.Title><i className="fas fa-trash-alt fa-2x"></i></Card.Title>
              <Card.Subtitle>Garbage</Card.Subtitle>
              <Card.Text>{black ? `${black[1]} ${black[0]}`: ""}</Card.Text>
            </Card.Body>
            <Card.Body className="card">
              <Card.Title><i className="fas fa-recycle fa-2x"></i></Card.Title>
              <Card.Subtitle>Recycling</Card.Subtitle>
              <Card.Text>{blue ? `${blue[1]} ${blue[0]}`: ""}</Card.Text>
            </Card.Body>
           <Card.Body className="card">
              <Card.Title><i className="fas fa-trash-restore fa-2x"></i></Card.Title>
              <Card.Subtitle>Composting</Card.Subtitle>
              <Card.Text>{green ? `${green[1]} ${green[0]}`: ""}</Card.Text>
            </Card.Body>
          </CardDeck>
          </span>
      </Modal.Body>
      </Modal>
    );
  }
}

export default News;