const React = require("react");
const ReactDOM = require("react-dom");

require("../styles/main.scss");

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <p>This is our first map</p>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Darren" />,
  document.getElementById("react-root")
);
