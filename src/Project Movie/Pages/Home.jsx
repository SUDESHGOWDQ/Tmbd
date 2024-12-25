import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Feature from "../Feature/index";

const Home = ({
  onLogout,
  setMovies,
  setTotalPages,
  currentPage,
  movies,
  totalPages,
  setCurrentPage,
  handleGenreChange,
  selectedGenre,
  genres,
}) => {
  return (
    <div className="home">
      <Navbar
        onLogout={onLogout}
        handleGenreChange={handleGenreChange}
        selectedGenre={selectedGenre}
        genres={genres}
      />
      <Feature
        setMovies={setMovies}
        setTotalPages={setTotalPages}
        currentPage={currentPage}
        movies={movies}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default Home;
