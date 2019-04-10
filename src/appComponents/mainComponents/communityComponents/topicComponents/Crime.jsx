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
  printTargetMonth() {
  const date = new Date().getMonth();
  const monthName = ["Jan", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
  return monthName[date - 1]
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
    console.log(crimeStats)
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
          <Modal.Title>Crime Story: <br/>compare and contrast crime rates with the rest of Calgary</Modal.Title>
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
                    <Nav.Link href="#lstMos">{this.printTargetMonth()}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#lst12Mos">The Last 12 Months</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>Beltline </Card.Title>
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
                          <td className="fact-column">{Number(deets.commNum).toLocaleString()}<br/>[{(Math.round((deets.commNum / (crimeStats.residentsCount/1000))*100))/100} per 1,000 residents]</td>
                          <td className="fact-column">{Number(deets.yycNum).toLocaleString()}<br/>[{(Math.round((deets.commNum / (crimeStats.residentCountYYC/1000))*100))/100} per 1,000 residents]</td>
                        </tr>
                      </React.Fragment>
                    ))}
                    <tr>
                      <td>
                        <strong>TOTAL</strong>
                      </td>
                      <td className="fact-column">
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
                      <td className="fact-column">
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
