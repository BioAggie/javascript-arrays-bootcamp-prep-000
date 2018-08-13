var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(element, array) {
  return [element, ... array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift (element);
 return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfElement(array, element) {
  array.push (element);
  return array
}

