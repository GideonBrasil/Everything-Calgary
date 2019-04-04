import React, { Component } from "react";

class Property extends Component {

  componentDidMount() {
    fetch(`http://localhost:3000/propertyAssessment/${this.props.data.communityCode}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const tableData = this.props.propertyData.range.map(data => {
      let med_value = data.median_assessed_value
      let accounts = data.number_of_taxable_accounts
      return (
          <tr>
            <td>{data.community_name}</td>
            <td>${med_value.toLocaleString('en')}</td>
            <td>{accounts.toLocaleString('en')} properties</td>
          </tr>
      )
    })

    const highest = this.props.propertyData.highestValue
    const lowest = this.props.propertyData.lowestValue


    return (
      <React.Fragment>
        <h1>This is the Property Data</h1>
        <h3>Your property is ranked {this.props.propertyData.targetIndex} out of 195 communities.</h3>
        <h6>The highest median property value in Calgary is ${highest.toLocaleString('en')}.</h6>
        <h6>The lowest median property value in Calgary is ${lowest.toLocaleString('en')}.</h6>
        <table className="data-table">
            <thead>
              <tr>
                <th>Community Name</th>
                <th>Median Assessed Property Value</th>
                <th>Number of Taxable Accounts</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
        </table>
        <hr></hr>
      </React.Fragment>
    );
  }
}

export default Property;