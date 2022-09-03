import { contain } from "redux/util/contain";

/**
 * Initial data for the reducer
 */
const syncFormDraft = {
  isLoading: false,
  isSyncUpCompleted: false,
  isProvidersLoaded: false,
  error: null,
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const syncFormReducer = contain((syncFormDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_IS_LOADING":
      syncFormDraft.isLoading = action.isLoading;
    break;
    case "SET_IS_SYNC_UP_COMPLETED":
      syncFormDraft.isSyncUpCompleted = action.isSyncUpCompleted;
    break;
    case "SET_IS_PROVIDERS_LOADED":
      syncFormDraft.isProvidersLoaded = action.isProvidersLoaded;
    break;
    case "SET_ERROR":
      syncFormDraft.error = action.error;
    break;
  }
}, syncFormDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const syncFormActions = {
  setIsLoading: isLoading => ({
    type: "SET_IS_LOADING",
    isLoading,
  }),
  setIsSyncUpCompleted: isSyncUpCompleted => ({
    type: "SET_IS_SYNC_UP_COMPLETED",
    isSyncUpCompleted,
  }),
  setIsProvidersLoaded: isProvidersLoaded => ({
    type: "SET_IS_PROVIDERS_LOADED",
    isProvidersLoaded
  }),
  setError: error => ({
    type: "SET_ERROR",
    error,
  }),
}

export {
  syncFormReducer,
  syncFormActions,
}