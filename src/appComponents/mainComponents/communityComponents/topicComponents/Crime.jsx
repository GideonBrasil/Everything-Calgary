import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class Crime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeStats: null
    };
  }

  handleTabClick(link) {
    this.setState({ link });
  }

  componentDidMount() {
    const removeSlash = this.props.data.community.replace("/", "-");
    fetch(`http://localhost:3000/crime/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          crimeStats: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { crimeStats, link } = this.state;
    let activeCrimeStats;
    if (crimeStats) {
      activeCrimeStats =
        link == "#lst12Mos"
          ? crimeStats.yearCrimeStats
          : crimeStats.monthCrimeStats;
    }

    return (
      <Modal
        show
        onHide={() => this.props.changeTopic("")}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-60w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Crime Statistics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!crimeStats ? (
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
                    <Nav.Link href="#lstMos">Last Month</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#lst12Mos">Last 12 Months</Nav.Link>
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
                    {activeCrimeStats.map(deets => (
                      <React.Fragment key={deets.category}>
                        <tr>
                          <td>{deets.category}</td>
                          <td>{Number(deets.commNum).toLocaleString()}</td>
                          <td>{Number(deets.yycNum).toLocaleString()}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                    <tr>
                      <td>
                        <strong>TOTAL</strong>
                      </td>
                      <td>
                        <strong>
                          {
                            (activeCrimeStats =
                              link == "#lst12Mos"
                                ? Number(
                                    crimeStats.totalCommCrime12
                                  ).toLocaleString()
                                : Number(
                                    crimeStats.totalCommCrimeMonth
                                  ).toLocaleString())
                          }
                        </strong>
                      </td>
                      <td>
                        <strong>
                          {
                            (activeCrimeStats =
                              link == "#lst12Mos"
                                ? Number(
                                    crimeStats.totalYYCCrime12
                                  ).toLocaleString()
                                : Number(
                                    crimeStats.totalYYCCrimeMonth
                                  ).toLocaleString())
                          }
                        </strong>
                      </td>
                    </tr>
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