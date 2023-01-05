import React, {useState} from 'react'

const SearchBar = ({movies, setMovies}) => {

  const [input, setInput] = useState('')

  const handleSearchChange = (event) => {
    setInput(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    let clone = [...movies]
    let filtered = clone.filter((movie) => {
      return movie.title.toLowerCase().includes(input);
    })

    //if found no movies: display a message stating no movies found
    if (filtered.length === 0) {
      filtered.push({title: 'no movie by that name found'})
    }
    setMovies(filtered)
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input onChange={handleSearchChange} value={input} placeholder='search movies here'/>
      <button type='submit'>GO!</button>
    </form>
  )
}

export default SearchBar