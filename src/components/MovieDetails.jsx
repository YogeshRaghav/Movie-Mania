import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieRating from "../mui/MovieRating";

const MovieDetails = () => {

  const [movie, setMovies] = useState(null);
  const {id} = useParams()

  const fetchMovie = async () => {
    const api_key = '2e9da9a3cfe6fb49043769ce9d3a74d8'
    const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    try {
      const res = await fetch(`${baseUrl}`)
      const result = await res.json();
      setMovies(result)
      // console.log('===result',result)
    } catch (error) {
      console.log('error',error)
    }
  }

  useEffect(() => {
    fetchMovie()
  },[id])

  if(!movie){
      return (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
    )}
  

  return (
    <div className="movie-details">
    <div className="movie-poster">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
    </div>
    <div 
      className="movie-content"
      style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')` }}
    >
      <div className="movie-info">
        <h2>
          <b> {movie.original_title} </b>
        </h2>
        <div className='genre'>
          <span >
              {movie.genres.map((genre) => genre.name).join(', ')},
          </span>
          <span>
            <h4>{Math.floor(movie.runtime/60)} hrs {movie.runtime % 60} Mins</h4>
          </span>
        </div>
        
        <div>
          <span><MovieRating ratingValue={movie.vote_average / 2} /></span>
        </div>
        <h3>
          <b>Overview</b>
        </h3>
        <p>{movie.overview}</p>
        <div className="date-lang">
          <span>
            <h4>
              <b className='rl-date' >Release Date :</b> {movie.release_date}
            </h4>
          </span>
          <span>
            <h4>
              <b className='rl-date'>Language : </b> '{movie.original_language[0].toUpperCase() + movie.original_language.slice(1)}'
            </h4>
          </span>
        </div>
        <div className = 'link'>
          {movie.homepage ? (
              <p><b className='rl-date'>Movie Homepage : </b> <a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}.</a></p>
          ) : (
             <p><b className ="rl-date">Movie Homepage : </b> No Homepage Link is available for this movie.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default MovieDetails;
