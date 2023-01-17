import React, {useState, useEffect} from 'react'

const MovieListEntry = ({toggle, movie, index, handleDelete}) => {

  return (
    <>
    <li className='movie'>
      {movie.title}
      {movie.watched ?
      <button className='watched-btn'
      onClick={() => toggle(movie)}>WATCHED</button>
      : <button className='not-watched-btn'
      onClick={() => toggle(movie)}>NOT WATCHED</button>
    }
    <button className='delete-btn' onClick={() => handleDelete(movie)}>delete</button>
    </li>
    </>
  )
}

export default MovieListEntry