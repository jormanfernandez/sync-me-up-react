import { getHistory } from "routes/history";

/**
 * Redirects to a given page executing the onMount function with the store from the operator
 * @param {object} page Page location to redirect the user
 */
export const redirect = (page) => {
  const history = getHistory();
  history.push(page.path);
}