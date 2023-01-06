import React, { useState, useEffect } from 'react';
import ExampleMovies from '../ExampleMovies.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovieBar from './AddMovieBar.jsx'

const App = (props) => {
  // import example movies as initial state array
  const [movies, setMovies] = useState(ExampleMovies);

  //on first render, add a watched property to all movies
  useEffect(() => {
    let clone = movies.map((movie) => {
      movie.didIWatch = false;
      return movie
    })
    setMovies(clone)
  }, [])

return (
  <>
    <AddMovieBar movies={movies} setMovies={setMovies}/>
    <SearchBar movies={movies} setMovies={setMovies}/>
    <MovieList movies={movies} setMovies={setMovies}/>
  </>
  )
};

export default App;