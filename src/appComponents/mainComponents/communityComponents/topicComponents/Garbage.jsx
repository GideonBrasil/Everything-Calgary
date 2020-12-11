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
    const removeSlash = this.props.data.community.replace("/", "_");
    fetch(`http://15.223.96.29:3000/garbage/${removeSlash}`)
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

  titleCase(word) {
    let words = word.split(' ');
    let output = '';
    words.forEach( w => {
      w = w.toLowerCase();
      let newWord = w[0].toUpperCase() + w.substring(1);
      output += newWord + ' ';
    });
    return output;
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
          <Modal.Title>{`${this.titleCase(this.props.data.community)} Waste and Recycling Pickup`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            <CardDeck>
              <Card.Body className="card">
                <Card.Title>
                  <i className="fas fa-recycle fa-4x" />
                </Card.Title>
                <Card.Subtitle>Recycling</Card.Subtitle>
                <br/>
                <Card.Text>
                  {blue ? <span>{blue[1]} <br/><strong>{blue[0]}</strong></span>  : "No recycling days"}
                </Card.Text>
              </Card.Body>
              <Card.Body className="card">
                <Card.Title>
                  <i className="fas fa-trash-restore fa-4x" />
                </Card.Title>
                <Card.Subtitle>Compost</Card.Subtitle>
                <br/>
                <Card.Text>
                  {green ? <span>{green[1]} <br/><strong>{green[0]}</strong></span>  : "No compost days"}
                </Card.Text>
              </Card.Body>
              <Card.Body className="card">
                <Card.Title>
                  <i className="fas fa-trash-alt fa-4x" />
                </Card.Title>
                <Card.Subtitle>Garbage</Card.Subtitle>
                <br/>
                <Card.Text>
                  {black ? <span>{black[1]} <br/><strong>{black[0]}</strong></span> : "No garbage days"}
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
