import React from "react";
import axios from "axios";
import SearchBar from "./views/SearchBar/SearchBar";
import MoviesContainer from "./views/MoviesContainer/MoviesContainer";
import Footer from "./views/Footer/Footer";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      moviesList: [],
      activeMovies: [],
    };
    this.update = this.update.bind(this);
  }

  update(nextState) {
    this.setState(nextState);
  }

  componentDidMount() {
    axios
      .get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((res) => this.setState({ moviesList: res.data.Search }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <SearchBar updateMovies={this.update} movies={this.state.moviesList} />
        <MoviesContainer
          movies={this.state.moviesList}
          activeMovies={this.state.activeMovies}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
