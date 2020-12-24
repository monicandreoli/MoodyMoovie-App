
const MovieDetails = ({ handleClose, show, children, movie }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <div className="card--content">
          <div>
         <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
          </div>
          <div>
                    <h3 className="modal-title">{movie.title}</h3>
                    <p><small className="rating">RATING: {movie.vote_average}</small></p>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p className="card--desc">{movie.overview}</p>
          </div>
                </div>
                <div className="buttons-modal">
          <button className="button">Whatch Movie</button>
          <button className="button btn-close" onClick={handleClose}>Go Back</button>
                </div>
        </section>
      </div>
    );
  };


export default MovieDetails;