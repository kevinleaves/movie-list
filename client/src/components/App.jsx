import React, { useState } from 'react';
import ExampleMovies from '../ExampleMovies.js'
import MovieList from './MovieList.jsx'

const App = (props) => {
  // import example movies as initial state array
  const [movies, setMovies] = useState(ExampleMovies);

return (
  <>
    <MovieList movies={movies} />
  </>
  )
};

export default App;