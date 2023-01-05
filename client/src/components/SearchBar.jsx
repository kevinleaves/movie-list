import React, {useState} from 'react'

const SearchBar = ({movies, setMovies}) => {

  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let clone = [...movies]
    let filtered = clone.filter((movie) => {
      return movie.title.toLowerCase().includes(input);
    })
    setMovies(filtered)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={input} placeholder='search movies here'/>
      <button type='submit'>GO!</button>
    </form>
  )
}

export default SearchBar