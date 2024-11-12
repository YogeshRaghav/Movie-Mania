import React, { useEffect} from "react";
import HandleButton from "./HandleButton";
import Search from "./Search";

const Home = ({
  movies,
  loading,
  changeGenreName,
  query,
  handleInputChange,
  handleButton,
}) => {
  useEffect(() => {
    changeGenreName("now_playing");
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

export default Home;
