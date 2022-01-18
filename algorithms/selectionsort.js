/**
 * Coding Interview Prep #6
 * Title: Implement Selection Sort
 * Instruction: Write a function selectionSort which takes an array of integers as input 
 * and returns an array of these integers in sorted order from least to greatest.
 */

/**
 * Return a given array of numbers sorted without using Array.sort().
 *
 * @param {array} array - Given array of numbers.
 * @return {array} array - Sorted array.
 */
function selectionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        [array[j], array[i]] = [array[i], array[j]]
      }
    }
  }
  return array
}

console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));