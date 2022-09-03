import { contain } from "redux/util/contain";

/**
 * Initial data for the reducer
 */
const siteDraft = {
  errors: []
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const siteReducer = contain((siteDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "LOG_ERROR":
      siteDraft.errors = [
        ...siteDraft.errors,
        action.error,
      ];
      break;
  }
}, siteDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const siteActions = {
  logError: (error) => ({
    type: "LOG_ERROR",
    error
  })
}

export {
  siteReducer,
  siteActions
}