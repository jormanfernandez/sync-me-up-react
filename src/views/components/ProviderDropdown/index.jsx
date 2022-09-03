import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "views/components/Dropdown";

import "./_style.scss";

export const ProviderDropdown = ({
  values,
  onOptionClicked
}) => {
  return (
    <div className="dropdown-section">
      <Dropdown
        dropdownLabel="All contacts"
        onOptionClicked={onOptionClicked}
        values={values}
      />
    </div>
  );
}

ProviderDropdown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired
  })),
  onOptionClicked: PropTypes.func.isRequired,
} 