import React from 'react';

function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="movie-modal">
        <h2>{movie.Title} ({movie.Year})</h2>
        <div className='img-container'>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <p>{movie.Plot}</p>
        <p>{movie.Genre}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Director: {movie.Director}</p>
        <p>Starring: {movie.Actors}</p>
      </div>
    </div>
  );
}

export default MovieModal;