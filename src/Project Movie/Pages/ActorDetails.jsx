import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchActorDetails, fetchActorMovies } from "../api/MovieApi";
import Loader from "../Comman Component/Loader";
import "../Styles/ActorDetails.css";

const ActorDetails = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getActorDetails = async () => {
      try {
        const actorData = await fetchActorDetails(id);
        const moviesData = await fetchActorMovies(id);
        setActor(actorData);
        setMovies(moviesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching actor details:", error);
        setIsLoading(false);
      }
    };

    getActorDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!actor) {
    return <div>Actor not found.</div>;
  }

  return (
    <div className="actor-details">
      <div className="actor-details-container">
        <div className="left">
          <img
            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
            alt={actor.name}
            className="actor-image"
            style={{ height: "300px", width: "200px" }}
          />
        </div>
        <div className="right">
          <h2>{actor.name}</h2>
          <p>
            <strong>Biography:</strong> {actor.biography}
          </p>
          <p>
            <strong>Birthday:</strong> {actor.birthday}
          </p>
          <p>
            <strong>Place of Birth:</strong> {actor.place_of_birth}
          </p>
        </div>
      </div>
      <div className="cast-movies">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              />
            </Link>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default ActorDetails;
