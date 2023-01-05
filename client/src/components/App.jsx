import React, { useState } from 'react';
import ExampleMovies from '../ExampleMovies.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'

const App = (props) => {
  // import example movies as initial state array
  const [movies, setMovies] = useState(ExampleMovies);

return (
  <>
    <SearchBar movies={movies} setMovies={setMovies}/>
    <MovieList movies={movies} />
  </>
  )
};

export default App;