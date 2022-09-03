/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
 export const syncFormStoreView = {
  isLoading: ({syncForm}) => syncForm.isLoading,
  isSyncUpCompleted: ({syncForm}) => syncForm.isSyncUpCompleted,
  isProvidersLoaded : ({syncForm}) => syncForm.isProvidersLoaded,
  isError: ({syncForm}) => !!syncForm.error,
  error: ({syncForm}) => syncForm.error,
}