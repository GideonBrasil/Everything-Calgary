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
    const monthName = [
      "Jan",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December"
    ];
    return monthName[date - 1];
  }

  componentDidMount() {
    const removeSlash = this.props.data.community.replace("/", "_");
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
          <Modal.Title style={{lineHeight: 1}}>
            Crime Story: <br />
            <span style={{fontSize: '16px'}}>compare and contrast crime rates with the rest of Calgary</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!crimeStats ? (
            <h4 style={{textAlign: 'center'}}>Loading...{"    "}
                        <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span> </div>
            </h4>
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
                    <Nav.Link href="#lstMos">
                      {this.printTargetMonth()}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#lst12Mos">The Last 12 Months</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>{crimeStats.community_name} has {Number(crimeStats.residentsCount).toLocaleString()} residents.</Card.Title>
                <Table striped bordered hover style={{marginBottom: '0'}}>
                  <thead>
                    <tr>
                      <th rowSpan='2' style={{verticalAlign: 'middle', textAlign: 'center', fontSize: '20px', minWidth: '300px'}}>Crime Category</th>
                      <th colSpan='2' style={{textAlign: 'center', fontSize: '20px'}}>#Crimes</th>
                      <th colSpan='2' style={{textAlign: 'center', fontSize: '20px'}}>Percentage</th>
                    </tr>
                    <tr>
                      <th style={{verticalAlign: 'middle', textAlign: 'center', fontSize: '14px'}}>{crimeStats.community_name}</th>
                      <th style={{verticalAlign: 'middle', textAlign: 'center', fontSize: '14px'}}>City Of Calgary</th>
                      <th style={{verticalAlign: 'middle', textAlign: 'center', fontSize: '14px'}}>of community crime</th>
                      <th style={{verticalAlign: 'middle', textAlign: 'center', fontSize: '14px'}}>of the city's crime</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCrimeStats.map(deets => (
                      <React.Fragment key={deets.category}>
                        <tr>
                          <td>{deets.category}</td>
                          <td className="fact-column">
                            {Number(deets.commNum).toLocaleString()}
                            </td>
                          <td className="fact-column">
                            {Number(deets.yycNum).toLocaleString()}
                          </td>
                          <td className="fact-column">
                            {Math.round(
                              (deets.commNum * 100 / crimeStats.totalCommCrimeMonth) * 100) / 100
                                }{"%"}
                            </td>
                          <td className="fact-column">
                            {Math.round(
                              deets.commNum /
                                deets.yycNum *
                                10000
                            ) / 100}{"%"}
                          </td>
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
                            activeCrimeStats = link == "#lst12Mos"
                            ?
                              Number(crimeStats.totalYYCCrime12).toLocaleString()
                            :
                              Number(crimeStats.totalYYCCrimeMonth).toLocaleString()

                          }
                        </strong>
                      </td>
                      <td className="fact-column">
                        <strong>
                          { Math.round((crimeStats.residentsCount / crimeStats.residentCountYYC) * 10000) / 100 }{'%'}

                        </strong>
                      </td>
                      <td className="fact-column">
                        <strong>
                          {
                            (activeCrimeStats =
                              link == "#lst12Mos"
                                ? Math.round(
                                  (crimeStats.totalCommCrime12 /
                                    crimeStats.totalYYCCrime12) *
                                    10000)
                                / 100
                                : Math.round(
                                  (crimeStats.totalCommCrimeMonth /
                                    crimeStats.totalYYCCrimeMonth) *
                                    10000)
                                / 100)
                          }{'%*'}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{fontSize: '11px', marginBottom: '0'}}>*Community's percentage of city crime.</p> 
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

export default Crime;
