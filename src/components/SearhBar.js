import React from "react";
import SearchIcon from "../customicons/SearchIcon";

const SearhBar = () => {
  return (
    <label className='search-label'>
      <input type='text' placeholder='Search' className='search-input' />
      <SearchIcon className='search-icon' />
    </label>
  );
};

export default SearhBar;
