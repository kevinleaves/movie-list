import React from 'react'
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ toggle, movies, currentTab }) => {

    // conditional rendering based a boolean app state and without the use of an additional state array to hold filtered arrays.
    return (
      <ul className='movie-list'>
        {currentTab !== null ?
        movies.filter((movie) => movie.watched == currentTab)
        .map((movie, index) => {
          return <MovieListEntry toggle={toggle} key={index} index={index} movie={movie}/>
        })
        : movies.map((movie, index) => {
          return <MovieListEntry toggle={toggle} index={index} key={index} movie={movie}/>
        })}
      </ul>
    )
  }


export default MovieList

