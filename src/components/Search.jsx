import React from 'react';

const Search = ({ onSearch }) => {

    const onSearchbarChange = (event) => {
        onSearch(event.target.value);
    } 

    return (
        <div className='note-search'>
            <input 
                type='text' 
                placeholder='Pencarian ...'
                onChange={onSearchbarChange}
            />
        </div>
    );
}

export default Search;