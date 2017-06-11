import React, { Component } from 'react';
import Headers from './components/Headers';
import Search from './components/Search';
import FilmsList from './components/FilmsList';
import allMovies from './constants/movies';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: allMovies
    }
  }

  filterMovies(filteredMovies) {
    this.setState({
      movies: filteredMovies
    })
  }

  render() {
    return (
      <div>
        <Headers />
        <Search
          movies={allMovies}
          filterMovies={this.filterMovies.bind(this)}
        />
        <FilmsList
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default App;
