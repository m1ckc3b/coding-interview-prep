/**
 * Coding Interview Prep #7
 * Title: Implement Insertion Sort
 * Instruction: Write a function insertionSort which takes an array of integers as input 
 * and returns an array of these integers in sorted order from least to greatest.
 */


/**
 * Return a given array of numbers sorted without using Array.sort().
 *
 * @param {array} array - Given array.
 * @return {array} array - Sorted array. 
 */
function insertionSort(array) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j <= array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }

  return array
}

console.log(insertionSort([5, 4, 33, 2, 8]))   // should return [2, 4, 5, 8, 33])