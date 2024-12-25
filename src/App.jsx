import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./Project Movie/CustomHooks/useAuth";
import Login from "./Project Movie/Pages/Login";
import Genres from "./Project Movie/Pages/Genres";
import Navbar from "./Project Movie/Component/Navbar";
import Footer from "./Project Movie/Component/Footer";
import MovieDetails from "./Project Movie/Pages/Movie";
import ActorDetails from "./Project Movie/Pages/ActorDetails";

const App = () => {
  const { isAuthenticated, handleLogin, handleLogout } = useAuth();

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated && (
          <Navbar
            setGenres={setGenres}
            onLogout={handleLogout}
            selectedGenre={selectedGenre}
            handleGenreChange={handleGenreChange}
            genres={genres}
            setSearch={setSearch}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div>
                  <Genres
                    setGenres={setGenres}
                    selectedGenre={selectedGenre}
                    currentPage={currentPage}
                    setMovies={setMovies}
                    setTotalPages={setTotalPages}
                    movies={movies}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                    search={search}
                  />
                </div>
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/actor/:id" element={<ActorDetails />} />
        </Routes>
        {isAuthenticated && <Footer />}
      </BrowserRouter>
    </div>
  );
};

export default App;
