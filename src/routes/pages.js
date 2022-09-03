import { onSyncMount } from "routes/onSyncMount";

/**
 * It returns the path to the component for the router
 * @param {object} Page {path: string, exact: boolean} Page to route
 * @returns {object}
 */
export const getRoute = ({path, exact}) => ({
  path,
  exact
});

/**
 * For the <Link> tag, it returns the path that React Router will load
 * If any keys are passed using a dynamic path, this would be rewritten in the path returned by the function
 * @param {object} page PAGES[route] object
 * @param {object} keys Can be null. It will rewrite the elements from the path with the values of the keys E.g.: [["<username>", "jota"], ["<date>", "today"]]
 * @returns {object}
 */
export const getLink = (page, keys) => {
  let { path } = page;
  if (keys) {
    Object.entries(keys).map(value => path = path.replace(value[0], value[1]));
  }
  return {to: path};
}

/**
 * Based on the pathname of a given location, detects which page it is
 * @param {object} location from useLocation
 * @returns {object}
 */
export const getPageByLocation = location => {
  let page;
  for (const key in PAGES) {
    if (location.pathname !== PAGES[key].path) {
      continue;
    }
    page = {...PAGES[key]};
    break;
  }
  return page;
}

/**
 * Page routing for react-router
 * If exact is true, it will match the path exactly. 
 * This is usefull for home/root page, so it  does not match other pages
 */
export const PAGES = {
  sync: {
    path: "/",
    exact: true,
    onMount: onSyncMount,
  },
  notFound: {
    path: "*",
  }
}