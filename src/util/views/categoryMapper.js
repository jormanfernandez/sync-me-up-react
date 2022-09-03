/**
 * Reads from the category set, removes the duplicates and then checks from the selected category list
 * to create a new property indicating if this value has been selected
 * @param {Array<object>} contacts 
 * @param {Array<string>} selectedCategories 
 * @returns {Array<object>}
 */
export const categoryMapper = (contacts, selectedCategories) => {
  const categories = [...new Set(contacts.map(contact => contact.category))].map(category => ({
    name: category,
    id: category,
    isChecked: selectedCategories.includes(category) ?? false
  }));

  return categories;
}