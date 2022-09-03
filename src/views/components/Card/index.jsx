import React from "react";
import PropTypes from "prop-types";

import "./_style.scss";

export const Card = ({ children }) => {
  return (
    <div className="card">
      { children }
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.array  
}