import { useRef } from "react";
import { useStore } from "react-redux";
/**
 * 
 * @param {object} operator {key<string>: value<function>} Operator to be used passing the store
 * @returns {object} Operators called
 */
export const useOperator = (operator) => {
  const store = useStore();
  const operatorRef = useRef(null);
  if (operatorRef.current === null) {
    operatorRef.current = operator(store);
  }
  return operatorRef.current;
}