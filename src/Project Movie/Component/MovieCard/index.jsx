import Card from "../../Comman Component/Card";
import "./index.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Card
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={movie.title || movie.name}
        subtitle={movie.release_date}
        description={movie.overview.slice(0, 150)}
        altText={movie.title}
        id={movie.id}
      />
    </div>
  );
};

export default MovieCard;
