import React from 'react';

const Search = ({ search, setSearch }) => {
    return (
        <>
            <div className='search_box '>
                <input type="text" className="form-control" placeholder="Search Robot..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </>
    );
};

export default Search;