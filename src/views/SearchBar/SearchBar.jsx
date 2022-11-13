import React, { Component } from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  updateActiveMovies(event) {
    if (event.target.value == "") {
      this.props.updateMovies({
        activeMovies: [],
      });
      return;
    }
    const searchedMovies = this.props.movies.filter((movie) =>
      movie.Title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(searchedMovies);
    this.props.updateMovies({
      activeMovies: searchedMovies,
    });
  }
  render() {
    return (
      <header>
        <div className={styles.searchBar}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Search For Movie Title..."
            onInput={(e) => this.updateActiveMovies(e)}
          />
        </div>
      </header>
    );
  }
}

export default SearchBar;
