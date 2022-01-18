/**
 * Coding Interview Prep #10
 * Title: Implement Binary search
 * Instructions: Write a function binarySearch that implements the binary search algorithm on an array, 
 * returning the path you took (each middle value comparison) to find the target in an array.
 */


/**
 *
 *
 * @param {*} searchList
 * @param {*} value
 * @return {*} 
 */
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];


console.log(binarySearch(testArray, 0));      // should return [13, 5, 2, 0].
console.log(binarySearch(testArray, 1));      // should return [13, 5, 2, 0, 1].
console.log(binarySearch(testArray, 2));      // should return [13, 5, 2].
console.log(binarySearch(testArray, 6));      // should return the string Value Not Found.
console.log(binarySearch(testArray, 11));     // should return [13, 5, 10, 11].
console.log(binarySearch(testArray, 13));     // should return [13].