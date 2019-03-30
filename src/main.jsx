const React = require('react');
require("../styles/main.scss");
import Header from './sections/header.jsx';
import SearchBar from './sections/search_bar.jsx';


/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default Main;