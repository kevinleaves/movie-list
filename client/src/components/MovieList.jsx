import React from 'react'
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ movies }) => {
  return (
    <ul className='movie-list'>
      {movies.map((movie, index) => {
        return <MovieListEntry key={index} movie={movie}/>
      })}
    </ul>
  )
}

export default MovieList