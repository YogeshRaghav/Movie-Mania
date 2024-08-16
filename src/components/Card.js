import React from "react";
import { Link } from "react-router-dom";
import MovieRating from "../mui/MovieRating";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <h3>{movie.original_title}</h3>
      </Link>
      <div className="rating-container">
        <MovieRating ratingValue={movie.vote_average / 2} />
      </div>
      
    </div>
  );
};

export default Card;
