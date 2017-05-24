import React, { Component } from 'react';

class FilmsList extends Component {
  render() {
    return(
      <div className="page">
        <div className="films-list">
          <div className="film">
            <h6 className="title">Pearl Harbor</h6>
            <p className="year">Year: 2001</p>
          </div>
          <div className="film">
            <h6 className="title">The Lucky One</h6>
            <p className="year">Year: 2012</p>
          </div>
          <div className="film">
            <h6 className="title">The Apartment</h6>
            <p className="year">Year: 1960</p>
          </div>
          <div className="film">
            <h6 className="title">Marriage Italian Style</h6>
            <p className="year">Year: 1964</p>
          </div>
          <div className="film">
            <h6 className="title">Blue Is the Warmest Color</h6>
            <p className="year">Year: 2013</p>
          </div>
          <div className="film">
            <h6 className="title">Beauty and the Beast</h6>
            <p className="year">Year: 2017</p>
          </div>
          <div className="film">
            <h6 className="title">How to Be a Latin Lover</h6>
            <p className="year">Year: 2017</p>
          </div>
          <div className="film">
            <h6 className="title">Drone</h6>
            <p className="year">Year: 2017</p>
          </div>
      </div>
    </div>
    );
  }
}

export default FilmsList;
