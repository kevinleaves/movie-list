import React, { useState, useEffect } from 'react';
import ExampleMovies from '../ExampleMovies.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovieBar from './AddMovieBar.jsx'
import FilterWatched from './FilterWatched.jsx'
import axios from 'Axios'

const App = (props) => {
  // import example movies as initial state array
  const [movies, setMovies] = useState([]);

  // LEVEL 1: move search bar input state here
  const [search, setSearch] = useState('')
  const [addMovie, setAddMovie] = useState('')

  const [currentTab, setCurrentTab] = useState(null);

  // reuse a get request + updating our movies state
  const updateData = () => {
    axios.get('/api/movies')
      .then((result) => {
        setMovies(result.data);
    })
  }

  // on first render, fetch movies from db
  useEffect(() => {
    updateData();
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
    // on search bar enter, reset current tab state + displays original movies again
    if (search === '') {
      setCurrentTab(null);
      setMovies(movies);
    }
    setSearch('')
  }

  // LEVEL 2: add movies to the list
  // ADD HANDLERS

  const handleAddChange = (event) => {
    setAddMovie(event.target.value)
  }

  const handleAddSubmit = (event) => {
    event.preventDefault()
    let movie = {title: addMovie, watched: false}

    axios.post('/api/movies', movie)
      .then((result) => {
        console.log(result, 'movie added!');
        setAddMovie('')
      })
      .then(() => {
        updateData();
      })
      .catch((err) => console.log(err, 'err in app'));
  }

  // LEVEL 3: TOGGLE WATCHED & FILTER BY WATCHED/NOT WATCHED
  const toggleWatched = (movieObj) => {
    // VOLATILE
    // let clone = [...movies]
    // clone.forEach((movie) => {
    //   if (movie.title === movieObj.title) {
    //     movie.watched = !movie.watched
    //   }
    // })
    // setMovies(clone)

    // NON-VOLATILE
    axios.patch('api/movies', movieObj)
      .then((result) => {
        console.log('updated!', result)
        updateData();
      })
      .catch((err) => console.log(err, 'we have err'))
  }

  const filter = (bool) => {
    setCurrentTab(bool)
  }

  const handleDelete = (movie) => {
    axios.delete('api/movies', {data: movie})
      .then((result) => {
        updateData();
      })
      .catch((err) => console.log(err))
  }

// filtered array that isn't state but dynamically changes in app.
const list = !search ? movies : movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

return (
  <>
    <AddMovieBar addMovie={addMovie} onChange={handleAddChange} onSubmit={handleAddSubmit}/>
    <SearchBar search={search} onChange={handleSearchChange} onSubmit={handleSearchSubmit}/>
    <FilterWatched filter={filter}/>
    <MovieList movies={list} toggle={toggleWatched} currentTab={currentTab} handleDelete={handleDelete}/>
  </>
  )
};

export default App;