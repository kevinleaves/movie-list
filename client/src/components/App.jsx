import React, { useState, useEffect } from 'react';
import ExampleMovies from '../ExampleMovies.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovieBar from './AddMovieBar.jsx'

const App = (props) => {
  // import example movies as initial state array
  const [movies, setMovies] = useState(ExampleMovies);
  const [searchedMovies, setSearchedMovies] = useState([])

  // LEVEL 1: move search bar input state here
  const [search, setSearch] = useState('')
  const [addMovie, setAddMovie] = useState('')

  //on first render, add a watched property to all movies
  useEffect(() => {
    let clone = movies.map((movie) => {
      movie.didIWatch = false;
      return movie
    })
    setMovies(clone)
  }, [])

  // SEARCH HANDLERS
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    let filtered = [...movies].filter((movie) => {
      return movie.title.toLowerCase().includes(input);
    })

    //if found no movies: display a message stating no movies found
    if (filtered.length === 0) {
      filtered.push({title: 'no movie by that name found'})
    }
    setSearchedMovies(filtered)
  }

  // LEVEL 2: add movies to the list
  // ADD HANDLERS

  const handleAddChange = (event) => {
    setAddMovie(event.target.value)
  }

  const handleAddSubmit = (event) => {
    event.preventDefault()
    let clone = [...movies]
    let movie = {title: addInput, watched: false}
    clone.push(movie)
    setMovies(clone)
    setAddMovie('')
  }


return (
  <>
    <AddMovieBar onChange={handleAddChange} onSubmit={handleAddSubmit}/>
    <SearchBar setSearchedMovies={setSearchedMovies} onChange={handleSearchChange} onSubmit={handleSearchSubmit}/>
    {searchedMovies.length > 0
    ? <MovieList movies={searchedMovies} setMovies={setMovies}/>
    : <MovieList movies={movies} setMovies={setMovies}/>
    }
  </>
  )
};

export default App;