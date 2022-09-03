/**
 * bject to be evaluated if it should add the element to the class list
 * If the value of the key is false, it won't be added
 * @param {object} classes 
 * @returns {string}
 */
 const computeObjectClasses = classes => {
  let assignedClasses = "";
  for (const _class in classes) {
    if (!classes[_class]) continue;
    assignedClasses += `${_class} `;
  }
  return assignedClasses;
}

/**
 * Array to be evaluated if it should add the element to the class list
 * If an element is an object, it will be processed with the computeObjectClasses function.
 * @param {array} classes 
 * @return {string}
 */
const computeArrayClasses = classes => {
  let assignedClasses = "";
  classes.forEach(element => assignedClasses += element instanceof Object ? computeObjectClasses(element) : `${element} `);
  return assignedClasses;
}

/**
 * It evaluates which classes will be returned based on certain criterias
 * If a string is send, it will return the same string
 * If an object is send, it will check the {class<string>: value<boolean>} structure. Where if the value is true, the class will be added to the returned list
 * If an array is send, it will check each element. If the element is an object, it will be evaluated as described previously, else it will be added to the returned list
 * @param {array|object|string} classes The classes that will be evaluated to be returned
 * @returns {string}
 */
export const classNames = classes => {
  let assignedClasses = "";
  if (Array.isArray(classes)) {
    assignedClasses = computeArrayClasses(classes);
  } else if (classes instanceof Object) {
    assignedClasses = computeObjectClasses(classes);
  } else {
    assignedClasses = classes;
  }
  return assignedClasses.trimEnd();
}