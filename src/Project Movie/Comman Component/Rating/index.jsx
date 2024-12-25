import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";

const Rating = ({ rating }) => {
  const foregroundCircleRef = useRef(null);

  useEffect(() => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const percentage = (rating / 10) * 100;
    const offset = circumference - (percentage / 100) * circumference;

    if (foregroundCircleRef.current) {
      foregroundCircleRef.current.style.strokeDashoffset = offset;
    }
  }, [rating]);

  return (
    <div className="rating-container">
      <div className="circle-progress-bar">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" className="background-circle" />
          <circle
            ref={foregroundCircleRef}
            cx="50"
            cy="50"
            r="45"
            className="foreground-circle"
            strokeDasharray="283"
            strokeDashoffset="283"
          />
        </svg>
        <div className="rating-text">
          <strong>{rating}</strong> / 10
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
