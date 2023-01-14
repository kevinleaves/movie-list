import React, { useState, useEffect } from 'react';
import ExampleMovies from '../ExampleMovies.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovieBar from './AddMovieBar.jsx'
import FilterWatched from './FilterWatched.jsx'
import axios from 'Axios'

const App = (props) => {
  // import example movies as initial state array
  const [movies, setMovies] = useState(ExampleMovies);
  const [searchedMovies, setSearchedMovies] = useState([])

  // keep track of watched / unwatched movies
  const [watchedMovies, setWatchedMovies] = useState([])
  const [unwatched, setUnwatched] = useState([])

  // LEVEL 1: move search bar input state here
  const [search, setSearch] = useState('')
  const [addMovie, setAddMovie] = useState('')

  // on first render, fetch movies from db
  useEffect(() => {
    axios.get('/api/movies')
    .then((result) => {
      setMovies(result.data);
    })
  },[]);

  //on first render, add a watched property to all movies
  // useEffect(() => {
  //   let clone = movies.map((movie) => {
  //     movie.watched = false;
  //     return movie
  //   })
  //   setMovies(clone)
  // }, [])

  // SEARCH HANDLERS
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    let filtered = [...movies].filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
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
    let searchedClone = [...searchedMovies]
    let movie = {title: addMovie, watched: false}
    clone.push(movie)
    searchedClone.push(movie)
    setMovies(clone)
    setSearchedMovies(searchedClone)
    setAddMovie('')
  }

  // LEVEL 3: TOGGLE WATCHED & FILTER BY WATCHED/NOT WATCHED
  const toggleWatched = (index) => {
    console.log(index, 'index?')
    console.log('toggle!')
    // this works for some reason?
    let clone = [...movies]

    clone[index].watched = !clone[index].watched
    setMovies(clone)
    // setUnwatched(unwatchedClone)
    // setWatchedMovies(watchedClone)
  }

  const filter = (bool) => {
    // takes my original movie array, filter it. that's how you determine state of the watched/unwatched arrays. pass it into movieList
    //  on either click, pass a different array into movielist
    console.log('filter!')
    let filtered = [...movies].filter((movie) => {
      return movie.watched === bool;
    })
    console.log(filtered)
    if (bool) {
      setWatchedMovies(filtered)
    } else {
      setUnwatched(filtered);
    }
  }

return (
  <>
    <AddMovieBar addMovie={addMovie} onChange={handleAddChange} onSubmit={handleAddSubmit}/>
    <SearchBar search={search} setSearchedMovies={setSearchedMovies} onChange={handleSearchChange} onSubmit={handleSearchSubmit}/>
    <FilterWatched filter={filter}/>
    <MovieList movies={movies} searchedMovies={searchedMovies} toggle={toggleWatched}/>
  </>
  )
};

export default App;