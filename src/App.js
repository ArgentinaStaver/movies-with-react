import React, { Component } from 'react';
import Headers from './Components/Headers';
import Search from './Components/Search';
import FilmsList from './Components/FilmsList';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Headers />
                <Search />
                <FilmsList />
            </div>
        );
    }
}

export default App;
