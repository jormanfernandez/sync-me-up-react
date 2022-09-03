import { useEffect } from "react";
import { useStore } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPageByLocation } from "routes/pages";

/**
 * It executes the onMount function if exists on the mounted page
 * When the location changes, checks which page is the location and if it has any
 * onMount method to be executed.
 */
export const useOnMount = () => {
  const location = useLocation();
  const store = useStore();
  useEffect(() => {
    const page = getPageByLocation(location);
    if (page && page?.onMount) page.onMount(store);
  }, [location, store]);
}