import React, { useId } from "react";

export const DropdownItem = ({ itemId, itemLabel, isItemChecked, onOptionClicked }) => {
  const _id = useId();
  const checkboxId = `checkbox${itemId}${_id}`;
  return (
    <div className="dropdown-item">
      <input 
        className="checkbox"
        type="checkbox"
        onChange={() => onOptionClicked(itemId, !isItemChecked)}
        checked={isItemChecked}
        id={checkboxId}
      />
      <label htmlFor={checkboxId}>
        { itemLabel}
      </label>
      <span></span>
    </div>
  )
}