import axios from "axios";

const API_KEY = "ab1da08307f82007e9975d4dccf67670";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch movie genres
const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data.genres;
};

// Fetch movies by genre
const fetchMoviesByGenre = async (genreId, page = 1) => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
      with_genres: genreId,
    },
  });
  return response.data;
};

// Fetch popular movies
const fetchPopularMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};

console.log(fetchPopularMovies());

// Fetch details of a specific movie
const fetchMovieDetails = async (movieId) => {
  const movieResponse = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  // Fetch the movie's trailer
  const videoResponse = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });

  // Find the trailer in the response
  const trailer = videoResponse.data.results.find(
    (video) => video.type === "Trailer"
  );

  return {
    ...movieResponse.data,
    trailerUrl: trailer
      ? `https://www.youtube.com/watch?v=${trailer.key}`
      : null,
  };
};

// Search for movies by keyword
const searchMovies = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query: query,
      page: page,
    },
  });
  return response.data;
};

// Fetch the cast of a specific movie
const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });

  return response.data.cast;
};

// Fetch actor details
const fetchActorDetails = async (actorId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};

// Fetch the movies of a specific actor
const fetchActorMovies = async (actorId) => {
  const response = await axios.get(
    `${BASE_URL}/person/${actorId}/movie_credits`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    }
  );
  return response.data.cast;
};

export {
  fetchPopularMovies,
  fetchGenres,
  fetchMoviesByGenre,
  fetchMovieDetails,
  searchMovies,
  fetchMovieCast,
  fetchActorDetails,
  fetchActorMovies,
};
