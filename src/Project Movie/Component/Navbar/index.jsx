import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({
  onLogout,
  handleGenreChange,
  selectedGenre,
  genres,
  setSearch,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to={"/"}>Ohoh</Link>
      </div>
      <ul className={`navbar__links ${isMenuOpen && "open"}`}>
        <input
          className="navbar-input"
          placeholder="SearchMovie"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link className="navbar__item" to={"/"}>
          <a href="#home">Home</a>
        </Link>
        <Link className="navbar__item" to={"genres"}>
          <a>Genres</a>
        </Link>
        <Link className="navbar__item">
          <a href="#services">Services</a>
        </Link>
        <Link className="navbar__item">
          <a href="#contact">Contact</a>
        </Link>
        <div className="dropdown-genres">
          <select onChange={handleGenreChange} value={selectedGenre}>
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <Link>
          <button onClick={onLogout}>Logout</button>
        </Link>
      </ul>
      <div className="navbar__toggle" onClick={handleMenuToggle}>
        <div className="navbar__toggle-line"></div>
        <div className="navbar__toggle-line"></div>
        <div className="navbar__toggle-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
