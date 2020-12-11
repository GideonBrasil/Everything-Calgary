import React, { Component } from "react";
import { Modal, CardDeck, Card, ProgressBar } from "react-bootstrap";

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propData: {}
    };
  }

  componentDidMount() {
    fetch(
      `http://15.223.96.29:3000/propertyAssessment/${
        this.props.data.communityCode
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          propData: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRank(rank) {
    let position = 195 - Number(rank);
    switch (position) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      default:
        return position + "th";
    }
  }

  render() {
    const { propData } = this.state;
    if (!Object.keys(propData).length) return null;
    return (
      <Modal
        show
        onHide={() => this.props.changeTopic("")}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="darren-holder"
      >
        <Modal.Header closeButton>
          <Modal.Title>Average Property Assessment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
          <div className="ranking">Rank: {this.getRank(propData.targetIndex)} of 195</div>
            <CardDeck>
              {propData.range.map(pcdeets => (
                <Card
                  style={{
                    width: "850px",
                    backgroundColor:
                      this.props.data.communityCode === pcdeets.comm_code &&
                      "#e8c1c7"
                  }}
                  key={pcdeets.comm_code}
                  className="darren-card"
                >
                  <Card.Body>
                    <Card.Title>
                      <u>{pcdeets.community_name.replace("/", "/\n")}</u>
                    </Card.Title>
                    <br/>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ color: "#2B2D42" }}
                    >
                      ${Number(pcdeets.median_assessed_value).toLocaleString()}
                    </Card.Subtitle>
                    <Card.Text>
                      {Number(
                        pcdeets.number_of_taxable_accounts
                      ).toLocaleString()}{" "}
                      properties.
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </CardDeck>
          </span>
        </Modal.Body>
        <Modal.Footer>
          In Calgary, a community's average (median) assesed property value
          ranges between $
          {Number(this.state.propData.lowestValue).toLocaleString()} and $
          {Number(this.state.propData.highestValue).toLocaleString()}.
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Property;
