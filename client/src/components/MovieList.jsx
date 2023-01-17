import React from 'react'
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ toggle, movies, currentTab, handleDelete }) => {

    // conditional rendering based a boolean app state and without the use of an additional state array to hold filtered arrays.
    return (
      <ul className='movie-list'>
        {currentTab !== null ?
        movies.filter((movie) => movie.watched == currentTab)
        .map((movie, index) => {
          return <MovieListEntry toggle={toggle} key={index} movie={movie} handleDelete={handleDelete}/>
        })
        : movies.map((movie, index) => {
          return <MovieListEntry toggle={toggle} key={index} movie={movie} handleDelete={handleDelete}/>
        })}
      </ul>
    )
  }


export default MovieList

