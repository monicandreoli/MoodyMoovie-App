import React, { Component } from 'react';
import MovieDetails from './MovieDetails';


class Movie extends Component {

state = { show: false }
showMovieDetails = () => {
    this.setState({ show: true });
  };

  hideMovieDetails = () => {
    this.setState({ show: false });
  };
render() {
    return (
        <main>
        <MovieDetails movie={this.props.movie} show={this.state.show} handleClose={this.hideMovieDetails} />
        <div className="card" type="button" onClick={this.showMovieDetails}>
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.movie.poster_path}`}
                alt={this.props.movie.title + ' poster'}
                />
            <h3 className="card--title">{this.props.movie.title}</h3>
        </div>
        </main>

    )
}
}


export default Movie;