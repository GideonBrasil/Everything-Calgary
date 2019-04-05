import React, { Component } from "react";
import { Modal, CardDeck, Card} from "react-bootstrap";

class Property extends Component {

  constructor(props) {
    super(props);
    this.state = {
      propData: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/propertyAssessment/${this.props.data.communityCode}`)
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
    console.log(propData);
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
          <Modal.Title>Property Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            <CardDeck>
            {propData.range.map(pcdeets => <Card style={{ width: '30rem', backgroundColor: this.props.data.communityCode === pcdeets.comm_code && 'tomato' }} key={pcdeets.comm_code}>
                <Card.Body>
                  <Card.Title>{pcdeets.community_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${pcdeets.median_assessed_value}</Card.Subtitle>
                  <Card.Text>
                    {pcdeets.community_name} has {pcdeets.number_of_taxable_accounts} assessed properties.
                  </Card.Text>
                </Card.Body>
              </Card>)}
            </CardDeck>            
          </span>
        </Modal.Body>
        <Modal.Footer>
          In Calgary a communities' average (median) assesed property value ranges between ${this.state.propData.highestValue} and ${this.state.propData.lowestValue}.
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Property;