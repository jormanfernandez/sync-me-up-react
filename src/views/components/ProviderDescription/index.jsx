import React from "react";
import PropTypes from "prop-types";

import "./_style.scss";

export const ProviderDescription = ({fromProvider, toProvider}) => {
  return (
    <div className="description-section">
      <p>These { fromProvider } contacts will sync to { toProvider } </p>
    </div>
  );
}

ProviderDescription.propTypes = {
  fromProvider: PropTypes.string.isRequired,
  toProvider: PropTypes.string.isRequired,
}
