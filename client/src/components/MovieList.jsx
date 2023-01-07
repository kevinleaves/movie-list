import React from 'react'
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ toggle, movies, searchedMovies}) => {


  // render searched movies or nonsearched movies
  return (
    <ul className='movie-list'>
      {movies.map((movie, index) => {
        return <MovieListEntry toggle={toggle}index={index} key={index} movie={movie}/>
      })}
    </ul>
  )
}

export default MovieList