import '../styles/App.css';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieModal from './MovieModal';
import Header from './Header';
import { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (query.trim() === '') {
      setMovies([]);
      return;
    }

    const fetchMovies = async() => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=e556927&s=${query}`);
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search);
        }
        else {
          setMovies([]);
        }
      }
      catch (error) {
        console.error('Error fetching movies: ', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [query]);

  // SEARCHBAR
  const handleQueryChange = (value) => {
    setQuery(value);
  };

  // MOVIELIST
  const handleMovieClick = async (movie) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=e556927&i=${movie.imdbID}&plot=full`);
      const data = await response.json();
      setSelectedMovie(data);
    }
    catch (err) {
      console.error('Failed to load movie details: ', err);
    }
  }

  // MOVIEMODAL
  const handleOnClose = () => {
    setSelectedMovie(null);
  }

  return (
    <div className="App">
      <Header/>
      <SearchBar onInputChange={handleQueryChange}/>
      <MovieList movies={movies} onMovieClick={handleMovieClick}/>
      <MovieModal movie={selectedMovie} onClose={handleOnClose}/>
    </div>
  );
}

export default App;
