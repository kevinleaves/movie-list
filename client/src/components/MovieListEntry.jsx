import React from 'react'

const MovieListEntry = ({movie}) => {


  return (
    <li className='movie'>
      {movie.title}
    </li>
  )
}

export default MovieListEntry