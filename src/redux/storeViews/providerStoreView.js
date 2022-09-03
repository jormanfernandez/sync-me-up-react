import { categoryMapper } from "util/views/categoryMapper";

/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const providerStoreView = {
  initialProvider: ({providers: {initialProvider}}) => initialProvider,
  secondProvider: ({providers: {secondProvider}}) => secondProvider,
  initialProviderSelectedCategories: ({providers: {initialProviderSelectedCategories}}) => initialProviderSelectedCategories,
  secondProviderSelectedCategories: ({providers: {secondProviderSelectedCategories}}) => secondProviderSelectedCategories,
  initialProviderCategories: ({providers: {initialProvider: { contacts }, initialProviderSelectedCategories}}) => categoryMapper(contacts, initialProviderSelectedCategories),
  secondProviderCategories: ({providers: {secondProvider: { contacts }, secondProviderSelectedCategories}}) => categoryMapper(contacts, secondProviderSelectedCategories),
}