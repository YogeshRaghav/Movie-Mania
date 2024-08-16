import React from "react";
import { useEffect, useState } from "react";

import HandleButton from "./HandleButton";
import Search from "./Search";

const Popular = ({ movies, loading, changeGenreName,query, handleInputChange, handleButton }) => {

  useEffect(() => {
    changeGenreName("popular");
  },[]);

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

export default Popular;
