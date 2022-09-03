import { useSelector, shallowEqual } from 'react-redux';

/**
 * Selects data from the store state
 * @param {function} selector Receives the store.state to read data from
 * @returns {object} An object with the data selected
 */
export function useStoreSelector(selector) {
  return useSelector(selector, shallowEqual);
}

/**
 * This combines the views from the state received when connect is used
 * @param {object} views {key: function} the view receives the state of the store to read the usefull data
 * @returns {function} Function that reads from the state the requested values
 */
export const combineStoreViews = (views) => {
  return (state) => {
    let selectedViews = {};
    for (let key in views) {
      selectedViews[key] = views[key](state);
    }
    return selectedViews;
  }
}