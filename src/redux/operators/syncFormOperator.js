import { providerAbstractor } from "services/providerAbstractor";
import { providerActions } from "redux/reducersAndActions/providerReducer";
import { syncFormActions } from "redux/reducersAndActions/syncFormReducer";
import { providerStoreView } from "redux/storeViews/providerStoreView";
import { logError } from "redux/util/logError";

let syncFormOperator = null;
/**
 * Get the operator being used to update the store
 * @param {object} store Store object from redux
 */
 export const getSyncFormOperator = (store) => {
  if (!syncFormOperator) syncFormOperator = new SyncFormOperator(store);
  return syncFormOperator;
}

/**
 * Class that holds the functions and modifies the data
 */
 class SyncFormOperator {
  constructor(store) {
    this.store = store;
  }

  syncProviderContacts = async () => {
    this.store.dispatch(syncFormActions.setIsSyncUpCompleted(true));

    const state = this.store.getState();

    const initialProvider = providerStoreView.initialProvider(state);
    const secondProvider = providerStoreView.secondProvider(state);

    const initialProviderSelectedCategories = providerStoreView.initialProviderSelectedCategories(state);
    const secondProviderSelectedCategories = providerStoreView.secondProviderSelectedCategories(state);

    /**
       * Search on both concatc list which users are going to be shared with the other provider
       */
    const initialProviderContactsToSync = secondProvider.contacts.filter(contact => {
      return secondProviderSelectedCategories.includes(contact.category) && !initialProvider.contacts.find(({ id}) => id === contact.id)
    });
    const secondProviderContactsToSync = initialProvider.contacts.filter(contact => {
      return initialProviderSelectedCategories.includes(contact.category) && !secondProvider.contacts.find(({ id}) => id === contact.id)
    });
    try {
      const updatedInitialProvider = {
        ...initialProvider,
        contacts: [
          ...initialProvider.contacts,
          ...initialProviderContactsToSync
        ]
      }
      const updatedSecondProvider = {
        ...secondProvider,
        contacts: [
          ...secondProvider.contacts,
          ...secondProviderContactsToSync
        ]
      }
      await providerAbstractor.saveProviders(updatedInitialProvider, updatedSecondProvider);
      this.store.dispatch([
        providerActions.setInitialProvider(updatedInitialProvider),
        providerActions.setSecondProvider(updatedSecondProvider)
      ]);
    } catch (error) {
        logError(this.store, 'SyncFormOperator.syncProviderContacts', error);
    }

    setTimeout(() => {
      this.store.dispatch(syncFormActions.setIsSyncUpCompleted(false));
    }, 3000)
  }
}