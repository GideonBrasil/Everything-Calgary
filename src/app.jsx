const React = require('react');
const ReactDOM = require('react-dom');

require("../styles/main.scss");

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Darren" />,
  document.getElementById('root')
);