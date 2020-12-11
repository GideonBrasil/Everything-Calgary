import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: null
    };
  }

  eventsKeyGenerator() {
    return Math.random() * 9;
  }

  handleTabClick(link) {
    this.setState({ link });
  }

  componentDidMount() {
    fetch(`http://15.223.96.29:3000/careers`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          careers: data
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
        id="careers-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Calgary Careers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!this.state.careers ? (
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
                    <h3>Career Opportunities with the City of Calgary</h3>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="careers-card">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Job Title</th>
                      <th className="career-date">Start Date</th>
                      <th className="career-date">Closing Date</th>
                      <th>More Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.careers.map(job => (
                      <React.Fragment key={this.eventsKeyGenerator()}>
                        <tr>
                          <td className="career-title">{job.title}</td>
                          <td className="career-date">{job.opening_date.substring(0,10)}</td>
                          <td className="career-date">{job.closing_date.substring(0,10)}</td>
                          <td>
                            <a href={job.link.url} target="_blank">More...</a>
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

export default Careers;
