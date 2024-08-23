import React from 'react';
import './Cards.css';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of a tag
import { useCustomHook } from '../ContextApi/Context.';

const Cards = () => {
  const { movieData, isLoading } = useCustomHook();
  
  if (isLoading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="card-container">
      {movieData.map((curMovie) => {
         const { imdbID, Title, Poster } = curMovie;
        const movietitle = Title.substring(0, 15);
        return (
          <div className="card" key={imdbID}>
            <NavLink to={`movies/${imdbID}`}> 
              <img src={Poster} alt={Title} />
            </NavLink>
            <p style={{color:"white"}}>{movietitle.length >= 15 ? `${movietitle}...` : movietitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
