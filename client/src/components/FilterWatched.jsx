import React from 'react';

const FilterWatched = ({filter}) => {

  return (
    <>
      <button onClick={() => filter(true)}>WATCHED</button>
      <button onClick={() => filter(false)}>TO WATCH</button>
    </>
  )
};

export default FilterWatched