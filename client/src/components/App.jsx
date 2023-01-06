import React, { useState } from 'react';
import ExampleMovies from '../ExampleMovies.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovieBar from './AddMovieBar.jsx'

const App = (props) => {
  // import example movies as initial state array
  const [movies, setMovies] = useState([]);

return (
  <>
    <AddMovieBar movies={movies} setMovies={setMovies}/>
    <SearchBar movies={movies} setMovies={setMovies}/>
    <MovieList movies={movies} />
  </>
  )
};

export default App;