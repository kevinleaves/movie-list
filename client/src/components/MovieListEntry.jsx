import React, {useState, useEffect} from 'react'

const MovieListEntry = ({movie, index, movies, setMovies}) => {

  const [watched, setWatched] = useState(false);

  useEffect(() => {
    let clone = [...movies]
    clone[index].didIWatch = watched;
    setMovies(clone);
  }, [watched])

  const toggleWatched = (event) => {
    setWatched(!watched);
    // let clone = [...movies]
    // console.log(clone[index])
    // clone[index].didIWatch = !clone[index].didIWatch;
    // console.log(clone)
    // setMovies(clone);
  }

  return (
    <li className='movie'>
      {movie.title}
      {watched
      ? <button className='watched-btn' onClick={toggleWatched}>WATCHED</button>
      : <button className='watched-btn' onClick={toggleWatched}>NOT WATCHED</button>
      }
    </li>
  )
}

export default MovieListEntry