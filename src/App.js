import React, { Component } from 'react';
import Headers from './components/Headers';
import Search from './components/Search';
import FilmsList from './components/FilmsList';
import movies from './constants/movies';
import './App.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        filterText: ''
      }
    }

    filterUpdate(value) {
      this.setState({
        filterText: value
      })
    }

    render() {
        return (
            <div>
                <Headers />
                <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
                 />
                <FilmsList
                movies={movies}
                filterText={this.state.filterText}
                 />
            </div>
        );
    }
}

export default App;
