import React, {useState, useEffect} from 'react'

const MovieListEntry = ({toggle, movie, index}) => {

  return (
    <li className='movie'>
      {movie.title}
      {movie.watched ?
      <button className='watched-btn'
      onClick={() => toggle(movie)}>WATCHED</button>
      : <button className='watched-btn'
      onClick={() => toggle(movie)}>NOT WATCHED</button>
      }
    </li>
  )
}

export default MovieListEntry