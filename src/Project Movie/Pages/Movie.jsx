import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/MovieApi";
import ReactPlayer from "react-player";
import useModal from "../CustomHooks/useModal";
import Modal from "../Comman Component/Modal";
import Loader from "../Comman Component/Loader";
import Rating from "../Comman Component/Rating";
import MovieCast from "./MovieCast";
import "../Styles/Movie.scss";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return (
      <div className="movie-Loader">
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="movie-details-container">
        <div className="left">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-details-poster"
            />
          )}
        </div>
        <div className="right">
          <h1 className="movie-details-content">{movie.title}</h1>
          <p className="movie-details-content">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="movie-details-content">
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <div className="rating-container movie-details-content">
            <Rating rating={movie.vote_average} />
          </div>

          <p className="movie-details-content">
            {movie.overview}
            <button className="movie-btn-trailer" onClick={openModal}>
              Play Trailer
            </button>
          </p>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="movie-trailer">
            <h2>Watch the Trailer</h2>
            {movie.trailerUrl ? (
              <ReactPlayer
                url={movie.trailerUrl}
                width="100%"
                height="550px"
                controls
              />
            ) : (
              <p style={{ color: "black" }}>No trailer available</p>
            )}
          </div>
        </Modal>
      </div>
      <p>
        <MovieCast movieId={movieId} />
      </p>
    </div>
  );
};

export default MovieDetails;
