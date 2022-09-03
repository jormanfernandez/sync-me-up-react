import { siteActions } from "redux/reducersAndActions/siteReducer";
/**
 * Logs error to verify fails.
 * @param {object} store redux store to dispatch events
 * @param {string} place function where it was called
 * @param {string} error error that was produced
 */
export const logError = (store, place, error) => {
  const log = {
    place,
    error
  }
  console.error(log.place, ` `, log.error);
  store.dispatch(siteActions.logError(log));
}