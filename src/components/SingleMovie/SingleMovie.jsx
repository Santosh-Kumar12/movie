import React, { useState, useEffect } from 'react';
import './SingleMovie.css';
import { useParams, NavLink } from 'react-router-dom';
import { apiUrl } from '../ContextApi/Context.';

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState("");

  const getMovieData = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovieData(data);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovieData(`${apiUrl}&i=${id}`);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="single-movie-outer-container">
        <div className="single-movie-section">
          <div className="loading">Loading....</div>
        </div>
      </div>
    );
  }

  return (
    <div className="single-movie-outer-container">
      <div className="single-movie-section">
        <div className="single-movie-container">
          <div className="movie-poster">
            <img src={movieData.Poster} alt={movieData.Title} />
          </div>
          <div className="movie-details">
            <h1>{movieData.Title}</h1>
            <p className="movie-genre">{movieData.Genre}</p>
            <p className="movie-release-date">{movieData.Released}</p>
            <p className="movie-description">{movieData.imdbRating}/10</p>
            <p className="movie-description">{movieData.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
