import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class TrafficIncidents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      traffic: null
    };
  }
  componentDidMount() {

    fetch(`http://localhost:3000/traffic`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          traffic: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <Modal id="traffic-modal"
      show
      onHide={() => this.props.changeTopic("")}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-60w"
      >
      <Modal.Header closeButton>
        <Modal.Title>Current Traffic Incidents</Modal.Title>
      </Modal.Header>
  <Modal.Body className="traffic-body">
    {!this.state.traffic ? <h4>Loading...</h4> : (
    <Card>
      {this.state.traffic[0].incident_info === 'NO TRAFFIC INCIDENTS' ? 
        <React.Fragment>
          <Card.Header>
            <Nav>
              <Nav.Item>
                <h4>No current incidents, the roads are clear!</h4>
              </Nav.Item>
            </Nav>
          </Card.Header>
        </React.Fragment> : (
          <React.Fragment>
            <Card.Header>
              <Nav>
                <Nav.Item>
                  <h4>Right now on the road...</h4>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className="traffic-card">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Info</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.traffic.map(incident => (
                        <React.Fragment key={incident.start_dt}>
                          <tr>
                            <td className="date">{incident.start_dt.substring(0, 10)}</td>
                            <td className="date">{incident.start_dt.substring(11, 19)}</td>
                            <td>{incident.incident_info}</td>
                            <td>{incident.description}</td>
                          </tr>
                        </React.Fragment> 
                      ))}
                    </tbody>
                  </Table>
              </Card.Body>
          </React.Fragment>
        )}
      </Card>
    )}
    </Modal.Body>
  </Modal>
    );
  }
}

export default TrafficIncidents;