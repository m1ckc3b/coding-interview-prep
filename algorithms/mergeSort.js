/**
 * Coding Interview Prep #9
 * Title: Implement Merge Sort
 * Instructions: Write a function mergeSort which takes an array of integers as input 
 * and returns an array of these integers in sorted order from least to greatest.
 * A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, 
 * and another function, for instance mergeSort, 
 * which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!
 */

/**
 * Merge little arrays.
 *
 * @param {array} arr1 - Array of one element.
 * @param {array} arr2 - Array of one element.
 * @return {array} arr - Merge of given little array.
 */
function merge(arr1, arr2) {
  const arr = []

  while (arr1.length && arr2.length) {
    arr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift())
  }

  while (arr1.length) {
    arr.push(arr1.shift())
  }

  while (arr2.length) {
    arr.push(arr2.shift())
  }

  return arr
}

/**
 * Return a given array sorted.
 *
 * @param {array} array - Given array.
 * @return {array} Sorted array. 
 */
function mergeSort(array) {

  if (array.length < 2) return array

  const middle = Math.floor(array.length / 2)
  const arrayLeft = array.slice(0, middle)
  const arrayRight = array.slice(middle, array.length)
  const sortedLeft = mergeSort(arrayLeft)
  const sortedRight = mergeSort(arrayRight)

  return merge(sortedLeft, sortedRight)
}

console.log(mergeSort([1, 6, 3, 4, 5, 1, 0, 4, 8])); // should return [0, 1, 1, 3, 4, 4, 5, 6, 8]
console.log(mergeSort([5,3,7,6,2,9]));               // should return [2,3,5,6,7,9]
console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
// should return
// [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]