import React from "react";
import PropTypes from "prop-types";
import "./_style.scss";

export const ProviderLogo = ({logo, name}) => {
  return (
    <div className="logo-section">
      <div className="logo">
        <img src={logo} alt={name} />
      </div>
      <h5>{name}</h5>
    </div>
  );
}

ProviderLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
