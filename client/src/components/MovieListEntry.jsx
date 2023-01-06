import React, {useState} from 'react'

const MovieListEntry = ({movie}) => {

  const [watched, setWatched] = useState(false);

  const toggleWatched = (event) => {
    console.log(watched, 'watched!')
    setWatched(!watched);
  }

  return (
    <li className='movie'>
      {movie.title}
      {!watched
      ? <button className='watched-btn' onClick={toggleWatched}>NOT WATCHED</button>
      : <button className='watched-btn' onClick={toggleWatched}>WATCHED</button>
      }
    </li>
  )
}

export default MovieListEntry