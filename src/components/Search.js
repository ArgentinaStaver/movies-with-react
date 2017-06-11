import React, { Component } from 'react';

class Search extends Component {
  filterUpdate() {
    const searchCriteria = this.searchContent.value;
    const { movies } = this.props;
    const filteredMovies = movies.filter(film => {
        return film.title.toLowerCase().indexOf(searchCriteria.toLowerCase()) >= 0
    });
    this.props.filterMovies(filteredMovies);
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
