import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Line } from "react-chartjs-3";

// const data = {
//   labels: this.props.data,
//   datasets: [
//     {
//       label: "My First dataset",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "rgba(75,192,192,0.4)",
//       borderColor: "rgba(75,192,192,1)",
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "rgba(75,192,192,1)",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "rgba(75,192,192,1)",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

class Population extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  eventsKeyGenerator() {
    return Math.random() * 9;
  }

  componentDidMount() {
    const removeSlash = this.props.data.community.replace("/", "-");
    fetch(`http://localhost:3000/population/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(state => ({
          chartData: {
            labels: data.years,
            datasets: [
              {
                label: "Population growth",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.population
              }
            ]
          }
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.chartData);

    return (
      <Modal
        id="population-modal"
        show
        onHide={() => this.props.changeTopic("")}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-60w"
      >
        <Modal.Header closeButton>
          <Modal.Body>
            <Line
              data={this.state.chartData}
              width={100}
              height={50}
              options={{
                title: {
                  display: true,
                  text: `Historical population chart for ${
                    this.props.data.community
                  }`,
                  fontSize: 25,
                  position: "top"
                },
                legend: {
                  display: true,
                  position: "bottom"
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
}

export default Population;
