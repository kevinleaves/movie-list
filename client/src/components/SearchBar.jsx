import React, {useState} from 'react'

const SearchBar = ({ search, setSearchedMovies, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={search} placeholder='search movies here'/>
      <button type='submit'>GO!</button>
    </form>
  )
}

export default SearchBar