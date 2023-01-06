import React, { useState } from 'react'

const AddMovieBar = ({movies, setMovies}) => {

  const [addInput, setAddInput] = useState('')

  const handleAddChange = (event) => {
    setAddInput(event.target.value)
  }

  const handleAddSubmit = (event) => {
    event.preventDefault()
    let clone = [...movies]
    let movie = {title: addInput}
    clone.push(movie)
    setMovies(clone)
    setAddInput('')
  }

  return (
    <form onSubmit={handleAddSubmit}>
      <input onChange={handleAddChange}
      placeholder='add movie title here' value={addInput}/>
      <button type='submit'>ADD</button>
    </form>
  )

}

export default AddMovieBar