import React from "react";
import { useEffect } from "react";
import Search from './Search'

import HandleButton from "./HandleButton";

const Toprated = ({ movies, loading, changeGenreName,query, handleInputChange, handleButton }) => {
  useEffect(() => {
    changeGenreName("top_rated");
  });

  return (
    <>
      <Search
       query={query}
       handleInputChange={handleInputChange}
       handleButton={handleButton}
       />
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <HandleButton movies={movies} />
      )}
    </>
  );
};

export default Toprated;
