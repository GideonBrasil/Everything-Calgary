const React = require('react');


/*
This is just the page rendered when a user first come onto the page the top bar
-----------------------------------------
*/

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search_bar">
        <input type="text" placeholder="Search.."/>
      </div>
    );
  }
}

export default SearchBar;