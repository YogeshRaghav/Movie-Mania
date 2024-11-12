import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ query, handleInputChange, handleButton}) => {

  return (
    <>
      <div className="search">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Enter Movie Name"
            value={query}
            onChange={handleInputChange}
            onKeyDown = {(e) => {
              if(e.key === 'Enter'){
                handleButton()
              }
            }}
          />
          <FaSearch className="fa-search" onClick={handleButton} />
        </div>
      </div>
    </>
  );
};

export default Search;
