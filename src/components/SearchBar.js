import React from 'react';

function SearchBar({ onInputChange, movies }) {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className='searchBar'>
        <input type='text' placeholder='Search for a movie...' onChange={handleInputChange}/>
    </div>
  );
}

export default SearchBar;