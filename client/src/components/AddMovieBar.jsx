import React, { useState } from 'react'

const AddMovieBar = ({addMovie, onChange, onSubmit}) => {

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange}
      placeholder='add movie title here' value={addMovie}/>
      <button type='submit'>ADD</button>
    </form>
  )

}

export default AddMovieBar