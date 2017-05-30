import React, { Component } from 'react';

class Search extends Component {
  filterUpdate() {
    const searchCriteria = this.searchContent.value
    this.props.filterUpdate(searchCriteria)
  }

  render() {
    return (
      <div className="page">
        <div className="search">
          <div className="search-content">
            <h5>Looking for a specific movie?</h5>
            <input
            type="search"
            ref={ (value) => {this.searchContent = value} }
            onChange={this.filterUpdate.bind(this)}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
