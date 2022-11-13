import React, { Component } from "react";
import styles from "./MovieCard.module.css";

class MovieCard extends Component {
  render() {
    return (
      <div className={styles.card}>
        <figure>
          <img
            className={styles.cardImage}
            src={this.props.movie.Poster}
            alt={this.props.movie.Title}
          />
        </figure>
        <div className={styles.overlayMovieTitle}></div>
        <figcaption className={styles.figCaption}>
          <h2 className={styles.cardTitle}>{this.props.movie.Title}</h2>
        </figcaption>
      </div>
    );
  }
}

export default MovieCard;
