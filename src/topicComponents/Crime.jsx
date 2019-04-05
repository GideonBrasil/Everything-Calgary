import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class Crime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeStats: null
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/crime/${this.props.data.community}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(state => ({
          crimeStats: data
        }))
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { crimeStats } = this.state;
    // if (!Object.keys(crimeStats).length) return null;
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
        {!crimeStats ? <h4>Loading...</h4> : (
        <Card>
          <Card.Header>
            <Nav justify variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">February</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Last 12 Months</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>For the month of Feb</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Crime Category</th>
                      <th>{crimeStats.community_name}</th>
                      <th>City Of Calgary</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.state.crimeStats.yearCrimeStats.map(deets => (
                        <React.Fragment key={deets.category}>
                          <tr>
                            <td>{deets.category}</td>
                            <td>{deets.commNum}</td>
                            <td>{deets.yycNum}</td>
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

export default Crime;