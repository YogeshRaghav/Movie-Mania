import React, { useEffect } from "react";
import HandleButton from "./HandleButton";
import Search from "./Search";

const Upcoming = ({ movies, loading, changeGenreName,query, handleInputChange, handleButton }) => {
  useEffect(() => {
    changeGenreName("upcoming");
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

export default Upcoming;
