import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Line } from "react-chartjs-3";

class Population extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    const removeSlash = this.props.data.community.replace("/", "-");
    fetch(`http://localhost:3000/population/${removeSlash}`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          chartData: {
            labels: data.years,
            datasets: [
              {
                label: "Population growth",
                fill: true,
                lineTension: 0.2,
                backgroundColor: "#8D99AE",
                borderColor: "#D90429",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "#D90429",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#8D99AE",
                pointHoverBorderColor: "#D90429",
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
                  text: `Historical population chart for ${this.props.data.community.substring(
                    0,
                    1
                  ) + this.props.data.community.toLowerCase().slice(1)}`,
                  fontSize: 25,
                  position: "top",
                  padding: 20
                },
                legend: {
                  display: false,
                  position: "bottom"
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        fontSize: 12
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Population",
                        fontSize: 23
                      }
                    }
                  ],
                  xAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        fontSize: 12
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Years",
                        fontSize: 23
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
