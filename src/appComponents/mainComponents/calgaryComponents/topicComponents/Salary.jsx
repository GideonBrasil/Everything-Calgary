import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: null
    };
  }

  eventsKeyGenerator() {
    return Math.random() * 9;
  }

  handleTabClick(link) {
    this.setState({ link });
  }

  componentDidMount() {
    fetch(`http://15.223.96.29:3000/salary`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          salary: data
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
        id="salary-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Calgary Civil Services Compensation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!this.state.salary ? (
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
                    <h4>Salary data from 2018</h4>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="salary-card">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Position Title</th>
                      <th>Minimum salary</th>
                      <th>Maximum salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.salary.map(title => (
                      <React.Fragment key={this.eventsKeyGenerator()}>
                        <tr>
                          <td>{title.position_title}</td>
                          <td>${Number(title.minimum_annual_base_rate).toLocaleString()}</td>
                          <td>${Number(title.maximum_annual_base_rate).toLocaleString()}</td>
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

export default Salary;
