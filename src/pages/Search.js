import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar'
import SearchSection from '../components/SearchSection';

function Search() {
  return (
    <div>
        <div className="search__page">
          <Sidebar/>
          <SearchSection/>
        </div>
    </div>
  )
}

export default Search