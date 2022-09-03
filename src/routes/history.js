import { useNavigate  } from "react-router-dom";

let _history = null;

/**
 * Sets the history with react-router-dom router to use in other non-react component
 */
export const useSetHistory = () => {
  _history = useNavigate ();
}

/**
 * Returns the history object
 * @returns {object} useNavigate from react-router-dom
 */
export const getHistory = () => _history;