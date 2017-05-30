import React, { Component } from 'react';

class FilmsList extends Component {
  render() {
    const { movies, filterText } = this.props;
    const moviesList = movies
      .filter(film => {
          return film.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
      })
      .map((film, index)=> {
        return (
          <div key={index} className="film">
            <h6 className="title">{film.title}</h6>
            <p className="year">Year: {film.year} </p>
          </div>
        )
    })
    return(
      <div className="page">      
        <div className="films-list">
          {moviesList}
        </div>
      </div>
    );
  }
}

export default FilmsList;
