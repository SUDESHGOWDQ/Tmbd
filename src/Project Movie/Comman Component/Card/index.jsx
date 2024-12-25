import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Card = ({
  image,
  title,
  subtitle,
  description,
  imagePath,
  altText,
  id,
}) => {
  return (
    <div className="card">
      <Link to={`/movie/${id}`}>
        {image && (
          <img
            src={imagePath ? `https://image.tmdb.org/t/p/w500${image}` : image}
            alt={altText || title}
            className="card__image"
          />
        )}
      </Link>
      <div className="card__info">
        {title && <h3 className="card__title">{title}</h3>}
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        {description && <p className="card__description">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
