import { providerAbstractor } from "services/providerAbstractor";
import { providerActions } from "redux/reducersAndActions/providerReducer";
import { syncFormActions } from "redux/reducersAndActions/syncFormReducer";
import { providerStoreView } from "redux/storeViews/providerStoreView";
import { logError } from "redux/util/logError";

let providerOperator = null;
/**
 * Get the operator being used to update the store
 * @param {object} store Store object from redux
 */
export const getProviderOperator = (store) => {
  if (!providerOperator) providerOperator = new ProviderOperator(store);
  return providerOperator;
}

/**
 * Class that holds the functions and modifies the data
 */
class ProviderOperator {
  constructor(store) {
    this.store = store;
  }

  getProviders = async () => {
    this.store.dispatch([
      syncFormActions.setError(null),
      syncFormActions.setIsLoading(true),
    ]);
    try {
      const [initialProvider, secondProvider] = await providerAbstractor.getProviders();
      this.store.dispatch([
        providerActions.setInitialProvider(initialProvider),
        providerActions.setSecondProvider(secondProvider),
        syncFormActions.setIsProvidersLoaded(true),
      ]);
    } catch (error) {
      logError(this.store, 'ProviderOperator.getProviders', error);
      this.store.dispatch(syncFormActions.setError(`Error loading providers: ${error}`));
    } 

    this.store.dispatch(syncFormActions.setIsLoading(false))
  }

  updateInitialProviderSelectedCategories = (category, isChecked) => {

    try {
      const selectedCategories = [...new Set([
        ...providerStoreView.initialProviderSelectedCategories(this.store.getState()),
        category
      ])].filter(selectedCategory => selectedCategory !== category || isChecked);
  
      this.store.dispatch(providerActions.setInitialProviderSelectedCategories(selectedCategories));
    } catch (error) {
      logError(this.store, 'ProviderOperator.updateInitialProviderSelectedCategories', error);
      this.store.dispatch(syncFormActions.setError(`Error changing selected categories: ${error}`));
    }
  }

  updateSecondProviderSelectedCategories = (category, isChecked) => {
    try {
      const selectedCategories = [...new Set([
        ...providerStoreView.secondProviderSelectedCategories(this.store.getState()),
        category
      ])].filter(selectedCategory => selectedCategory !== category || isChecked);
  
      this.store.dispatch(providerActions.setSecondProviderSelectedCategories(selectedCategories));
    } catch (error) {
      logError(this.store, 'ProviderOperator.updateSecondProviderSelectedCategories', error);
      this.store.dispatch(syncFormActions.setError(`Error changing selected categories: ${error}`));
    }
  }
}