import { combineReducers } from "redux";
import { siteReducer } from "redux/reducersAndActions/siteReducer";
import { providerReducer } from "redux/reducersAndActions/providerReducer";
import { syncFormReducer } from "redux/reducersAndActions/syncFormReducer";

export const combinedReducers = combineReducers({
  site: siteReducer,
  providers: providerReducer,
  syncForm: syncFormReducer
});