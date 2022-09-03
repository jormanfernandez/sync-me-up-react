import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useOnLocationChange = (onLocationChange) => {
  const location = useLocation();
  const prevLocationRef = useRef(location);
  useEffect(() => {
    onLocationChange(location, prevLocationRef.current);
    prevLocationRef.current = location;
  }, [location, onLocationChange]);
}