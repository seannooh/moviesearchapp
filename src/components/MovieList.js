import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ movies, onMovieClick }) {
  return (
    <div className='movie-list'>
        {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick}/>
        ))}
    </div>
  )
}

export default MovieList