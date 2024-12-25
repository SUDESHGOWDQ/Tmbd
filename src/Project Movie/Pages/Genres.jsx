import { useEffect } from "react";
import {
  fetchPopularMovies,
  fetchGenres,
  fetchMoviesByGenre,
  searchMovies,
} from "../api/movieApi";
import MovieCard from "../Component/MovieCard";
import Pagination from "../Comman Component/Pagination";
import "../Styles/Genres.scss";

const Genres = ({
  setGenres,
  selectedGenre,
  currentPage,
  setMovies,
  setTotalPages,
  movies,
  totalPages,
  setCurrentPage,
  search,
}) => {
  useEffect(() => {
    const getGenres = async () => {
      const genreData = await fetchGenres();
      setGenres(genreData);
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      if (search) {
        const searchResults = await searchMovies(search, currentPage);
        setMovies(searchResults.results);
        setTotalPages(searchResults.total_pages);
      } else {
        if (selectedGenre) {
          const genreMovies = await fetchMoviesByGenre(
            selectedGenre,
            currentPage
          );
          setMovies(genreMovies.results);
          setTotalPages(genreMovies.total_pages);
        } else {
          const popularMovies = await fetchPopularMovies(currentPage);
          setMovies(popularMovies.results);
          setTotalPages(popularMovies.total_pages);
        }
      }
    };

    getMovies();
  }, [selectedGenre, currentPage, search]);

  return (
    <div className="home">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Genres;
