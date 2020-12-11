import React, { Component } from "react";
import { Modal, Nav, Table, Card } from "react-bootstrap";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null
    };
  }
  componentDidMount() {
    fetch(`http://15.223.96.29:3000/news`)
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          news: data
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Modal
        id="news-modal"
        show
        onHide={() => this.props.changeTopic("")}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-60w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Calgary News</Modal.Title>
        </Modal.Header>
        <Modal.Body className="news-body">
          {!this.state.news ? (
            <h4>Loading...</h4>
          ) : (
            <Card>
              <Card.Header>
                <Nav>
                  <Nav.Item>
                    <h4>From the last 7 days...</h4>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="news-card">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Title</th>
                      <th>More info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.news.map(news => (
                      <React.Fragment key={news.link}>
                        <tr>
                          <td className="pubdate">{news.pubdate}</td>
                          <td>{news.title}</td>
                          <td className="more-info">
                            <a href={news.link.url} target="_blank">More...</a>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
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

export default News;
