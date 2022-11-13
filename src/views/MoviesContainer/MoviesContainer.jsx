import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesContainer.module.css";

class MoviesContainer extends Component {
  render() {
    return (
      <main>
        <ul className={styles.moviesContainer}>
          {this.props.activeMovies.length == 0
            ? this.props.movies.map((movie) => (
                <li key={movie.imdbID}>
                  <MovieCard movie={movie} />
                </li>
              ))
            : this.props.activeMovies.map((movie) => (
                <li key={movie.imdbID}>
                  <MovieCard movie={movie} />
                </li>
              ))}
        </ul>
      </main>
    );
  }
}

export default MoviesContainer;
