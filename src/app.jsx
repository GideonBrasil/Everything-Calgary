<<<<<<< HEAD
<<<<<<< HEAD
const React = require("react");
const ReactDOM = require("react-dom");
=======
const React = require('react');
const ReactDOM = require('react-dom');
import Main from './main.jsx'
>>>>>>> 23090f131c073fc0d78326fba483edfab87a36ad
=======
const React = require("react");
const ReactDOM = require("react-dom");
>>>>>>> feature/google-maps


<<<<<<< HEAD
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
<<<<<<< HEAD
=======
/*
This is what is rendered. All builds go into main.jsx and are imported here
-----------------------------------------------------------------------------
*/

ReactDOM.render( <Main />,  document.getElementById('root'));
>>>>>>> 23090f131c073fc0d78326fba483edfab87a36ad
=======
>>>>>>> feature/google-maps
