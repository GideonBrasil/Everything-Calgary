import React, { Component } from "react";
import { Modal, CardDeck, Card } from "react-bootstrap";

class Crime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeStats: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/crime/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.state(state => ({
          crimeStats
        }))
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
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
        <Modal.Title>Crime Statistics</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Feburay</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Last 12 Months</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>For the month of Feb</Card.Title>
              <Card.Text>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Crime Category</th>
                      <th>Your Community</th>
                      <th>City Of Calgary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Assualt (non-domestic)</td>
                      <td>6</td>
                      <td>180</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Physical Disorder</td>
                      <td>6</td>
                      <td>180</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Residential Break & Enter</td>
                      <td>6</td>
                      <td>180</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Crime;