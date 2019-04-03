import React, { Component } from "react";

class Property extends Component {
  render() {
    const tableData = this.props.propertyData.range.map(data => {
      return (
        <tr>
          <td>{data.community_name}</td>
          <td>{data.median_assessed_value}</td>
          <td>{data.number_of_taxable_accounts}</td>
        </tr>
      )

    })
    return (
      <React.Fragment>
        <h1>This is the Property Data</h1>
        <h3>Your property is ranked ${this.props.propertyData.targetIndex} out of 195 communities.</h3>
        <h6>The highest median property value in Calgary is ${this.props.propertyData.highestValue}</h6>
        <h6>The lowest median property value in Calgary is ${this.props.propertyData.lowestValue}</h6>
        <table>
            <thead>
              <tr>
                <th>Community Name</th>
                <th>Median Assessed Property Value</th>
                <th>Number of Taxable Accounts</th>
              </tr>
            </thead>
            {/* <td>{tableData}</td> */}
        </table>
      </React.Fragment>
    );
  }
}

export default Property;