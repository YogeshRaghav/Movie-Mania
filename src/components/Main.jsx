import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import FetchMovieDetails from "./FetchMovieDetails";
import MovieDetails from "./MovieDetails";
import Toprated from "./Toprated";
import Popular from "./Popular";
import Upcoming from "./Upcoming";

const Main = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const getGenre = async (genreName) => {
      setLoading(true)
      try {
          const allMovies = await FetchMovieDetails(genreName)
          setMovies(allMovies)
          setLoading(false)
      } catch (error) {
          console.log('Error in main jsx file',error)
      }

  }
  useEffect(() => {
      getGenre(name)
  },[name])

  const changeGenreName = (name) => {
     setName(name);
  };

  const searchMovie = async () => {
    setLoading(true)
    const api_key = "2e9da9a3cfe6fb49043769ce9d3a74d8";
    const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&include_adult=false&language=en-US&page=1`;
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const handleButton = () => {
    query && searchMovie();
    setQuery('')
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              loading={loading}
              changeGenreName={changeGenreName}
              query={query}
              handleInputChange={handleInputChange}
              handleButton={handleButton}
            />
          }
        >
          {" "}
        </Route>
        <Route
          path="/toprated"
          element={
            <Toprated
              movies={movies}
              loading={loading}
              changeGenreName={changeGenreName}
              query={query}
              handleInputChange={handleInputChange}
              handleButton={handleButton}
            />
          }
        ></Route>
        <Route
          path="/popular"
          element={
            <Popular
              movies={movies}
              loading={loading}
              changeGenreName={changeGenreName}
              query={query}
              handleInputChange={handleInputChange}
              handleButton={handleButton}
            />
          }
        ></Route>
        <Route
          path="/upcoming"
          element={
            <Upcoming
              movies={movies}
              loading={loading}
              changeGenreName={changeGenreName}
              query={query}
              handleInputChange={handleInputChange}
              handleButton={handleButton}
            />
          }
        >
          {" "}
        </Route>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default Main;
