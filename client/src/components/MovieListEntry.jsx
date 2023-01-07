import React, {useState, useEffect} from 'react'

const MovieListEntry = ({toggle, movie, index}) => {



  // useEffect(() => {
  //   let clone = [...movies]
  //   clone[index].didIWatch = watched;
  //   setMovies(clone);
  // }, [watched])

  // const toggleWatched = (event) => {
  //   setWatched(!watched);
  //   // let clone = [...movies]
  //   // console.log(clone[index])
  //   // clone[index].didIWatch = !clone[index].didIWatch;
  //   // console.log(clone)
  //   // setMovies(clone);
  // }

  return (
    <li className='movie'>
      {movie.title}
      {movie.watched
      ? <button className='watched-btn' onClick={toggle}>WATCHED</button>
      : <button className='watched-btn' onClick={toggle}>NOT WATCHED</button>
      }
    </li>
  )
}

export default MovieListEntry