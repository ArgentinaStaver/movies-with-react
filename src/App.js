import React, { Component } from 'react';
import Headers from './components/Headers';
import Search from './components/Search';
import FilmsList from './components/FilmsList';
import movies from './constants/movies';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Headers />
                <Search />
                <FilmsList movies={movies} />
            </div>
        );
    }
}

export default App;
