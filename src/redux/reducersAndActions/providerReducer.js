import { contain } from "redux/util/contain";

/**
 * Initial data for the reducer
 */
const providerDraft = {
  initialProvider: null,
  secondProvider: null,
  initialProviderSelectedCategories: [],
  secondProviderSelectedCategories: [],
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const providerReducer = contain((providerDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_INITIAL_PROVIDER":
      providerDraft.initialProvider = action.provider;
    break;
    case "SET_SECOND_PROVIDER":
      providerDraft.secondProvider = action.provider;
    break;
    case "SET_INITIAL_PROVIDER_SELECTED_CATEGORIES":
      providerDraft.initialProviderSelectedCategories = action.initialProviderSelectedCategories;
    break;
    case "SET_SECOND_PROVIDER_SELECTED_CATEGORIES":
      providerDraft.secondProviderSelectedCategories = action.secondProviderSelectedCategories;
    break;
  }
}, providerDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const providerActions = {
  setInitialProvider: provider => ({
    type: "SET_INITIAL_PROVIDER",
    provider
  }),
  setSecondProvider: provider => ({
    type: "SET_SECOND_PROVIDER",
    provider,
  }),
  setInitialProviderSelectedCategories: initialProviderSelectedCategories => ({
    type: "SET_INITIAL_PROVIDER_SELECTED_CATEGORIES",
    initialProviderSelectedCategories
  }),
  setSecondProviderSelectedCategories: secondProviderSelectedCategories => ({
    type: "SET_SECOND_PROVIDER_SELECTED_CATEGORIES",
    secondProviderSelectedCategories,
  })
}

export {
  providerReducer,
  providerActions,
}