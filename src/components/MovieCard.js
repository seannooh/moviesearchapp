import React from 'react'

function MovieCard({ movie, onClick }) {
  return (
    <div className='movie-card' onClick={() => onClick(movie)}>
        <h2>{movie.Title} ({movie.Year})</h2>
        <img src={movie.Poster} alt={movie.Title}/>
    </div>
  )
}

export default MovieCard