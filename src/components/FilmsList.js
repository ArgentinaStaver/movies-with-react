import React, { Component } from 'react';

class FilmsList extends Component {
  moviesList() {
    const { movies } = this.props;
    const moviesList = movies
      .map((film, index)=> {
        return (
          <div key={index} className="film">
            <h6 className="title">{film.title}</h6>
            <p className="year">Year: {film.year} </p>
          </div>
        )
    })
    return moviesList;
  }

  render() {
    return(
      <div className="page">
        <div className="films-list">
          {this.moviesList()}
        </div>
      </div>
    );
  }
}

export default FilmsList;
