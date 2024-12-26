import React, { useEffect, useState } from "react";
import { fetchMovieCast } from "../api/MovieApi";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Styles/MovieCast.css";

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cast:", error);
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  if (isLoading) {
    return <div className="loading">Loading cast...</div>;
  }

  return (
    <div className="movie-cast">
      <div className="cast-list">
        {cast.length === 0 ? (
          <p>No cast information available.</p>
        ) : (
          cast.slice(0, 8).map((actor) => (
            <div key={actor.id} className="actor-card">
              <Link to={`/actor/${actor.id}`} className="actor-link">
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                  className="actor-image"
                />
                <div className="actor-info">
                  <h3>{actor.name}</h3>
                  <p>{actor.character}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieCast;
