import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="page">
        <div className="search">
          <div className="search-content">
            <h5>Looking for a specific movie?</h5>
            <input type="search" value="Search.." />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
