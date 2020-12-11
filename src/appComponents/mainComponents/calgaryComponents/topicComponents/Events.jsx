import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

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

  handleTabClick(link) {
    this.setState({ link });
  }

  componentDidMount() {
    fetch(`http://15.223.96.29:3000/events`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          events: data
        }));
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
        dialogClassName="modal-60w"
        id="events-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Calgary Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!this.state.events ? (
            <h4>Loading...</h4>
          ) : (
            <Card>
              <Card.Header>
                <Nav
                  justify
                  variant="tabs"
                  defaultActiveKey="#lstMos"
                  onSelect={selectedKey => this.handleTabClick(selectedKey)}
                >
                  <Nav.Item>
                    <h4>Upcoming City Events</h4>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="events-card">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Address</th>
                      <th>Event Type</th>
                      {/* <th>Event Description</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.map(event => (
                      <React.Fragment key={this.eventsKeyGenerator()}>
                        <tr>
                          <td className="event-date">{event.date}</td>
                          <td className="event-time">{event.time}</td>
                          <td className="event-address">{event.address}</td>
                          <td>
                            {event.event_type
                              ? event.event_type
                              : "Census in person"}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

export default Events;
