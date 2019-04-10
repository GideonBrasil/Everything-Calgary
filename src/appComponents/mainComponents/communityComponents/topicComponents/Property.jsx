import React, { Component } from "react";
import { Modal, CardDeck, Card } from "react-bootstrap";

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propData: {}
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3000/propertyAssessment/${
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
          <Modal.Title>Property Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            <CardDeck>
              {propData.range.map(pcdeets => (
                <Card
                  style={{
                    width: "850px",
                    backgroundColor:
                      this.props.data.communityCode === pcdeets.comm_code &&
                      "#EF233C"
                  }}
                  key={pcdeets.comm_code}
                  className="darren-card"
                >
                  <Card.Body>
                    <Card.Title>
                      {pcdeets.community_name.replace("/", "/\n")}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ${Number(pcdeets.median_assessed_value).toLocaleString()}
                    </Card.Subtitle>
                    <Card.Text>
                      {pcdeets.community_name} has{" "}
                      {Number(
                        pcdeets.number_of_taxable_accounts
                      ).toLocaleString()}{" "}
                      assessed properties.
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
