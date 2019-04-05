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
                      <th>{this.state.crimeStats.community_name}</th>
                      <th>City Of Calgary</th>
                    </tr>
                  </thead>
                  <tbody>
                      {Object.keys(this.state.crimeStats.YYCMonthStats).map(property => (
                        <React.Fragment key={property.id}>
                          <tr>
                            <td>{property}</td>
                            {/* <td>{crimeStats.commMonthStats[property]}</td> */}
                            <td>5</td>
                            <td>{crimeStats.YYCMonthStats[property]}</td>
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