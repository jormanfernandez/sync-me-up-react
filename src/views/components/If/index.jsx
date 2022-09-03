import Proptypes from "prop-types";

/**
 * 
 * @param {object} props Props for the react component.
 *                        Conditions<array> Array of booleans detecting if any of its values are false
 *                        Else<React.Component> JSX Component to be rendered when a false value is in the conditions
 *                        children<function> React.Component enclosed in a function. This to prevent previous rendering from the component calling it
 */
 export const If = ({ Conditions, Else, children }) => Conditions.includes(false) ? Else : children();

If.Proptypes = {
  Conditions: Proptypes.arrayOf(Proptypes.bool).isRequired,
  Else: Proptypes.func,
  children: Proptypes.func,
}