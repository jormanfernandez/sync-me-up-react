import React, { useState } from "react";
import PropTypes from "prop-types";
import { DropdownItem } from "views/components/Dropdown/DropdownItem";
import { classNames } from "util/views/classNames";

import "./_style.scss";

export const Dropdown = ({ dropdownLabel, values, onOptionClicked }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); 
  const allOptionsClassName = classNames(['all-options', {hide: !isOptionsOpen}]);

  const arrowIconClassName = classNames(['icon-arrow', {
    'flipped-down': isOptionsOpen
  }]);

  const handleClickOptionsVisible = () => {
    setIsOptionsOpen(isOptionsOpen => !isOptionsOpen);
  }

  return (
    <div className="dropdown">
      <div className={allOptionsClassName} onClick={handleClickOptionsVisible}>
        <i className="icon-checkmark"></i> { dropdownLabel } <i className={arrowIconClassName}></i>
      </div>
      <div className="options">
        {values.map(item => (
          <DropdownItem 
            key={item.id}
            itemId={item.id}
            itemLabel={item.name}
            isItemChecked={item.isChecked}
            onOptionClicked={onOptionClicked}
          />
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired
  })),
  dropdownLabel: PropTypes.string.isRequired,
  onOptionClicked: PropTypes.func.isRequired,
} 