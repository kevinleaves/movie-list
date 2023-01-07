import React from 'react'
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ movies, setMovies, searchedMovies}) => {


  // render searched movies or nonsearched movies
  return (
    <ul className='movie-list'>
      {movies.map((movie, index) => {
        return <MovieListEntry setMovies={setMovies} movies={movies} index={index} key={index} movie={movie}/>
      })}
    </ul>
  )
}

export default MovieList