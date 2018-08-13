var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(element, array) {
  return [element, ... array]
}

function destructivelyAddElementToBeginningofArray(array, element) {
 array.unshift(element);
 return [array]
}

