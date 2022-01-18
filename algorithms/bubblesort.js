/**
 * Coding Interview Prep #5
 * Title: Implement Bubble sort.
 * Instruction: Write a function bubbleSort which takes an array of integers as input 
 * and returns an array of these integers in sorted order from least to greatest.
 */


/**
 * Return a sorted array without using Array.sort().
 *
 * @param {array} array - Given array of numbers.
 * @return {array} Sorted array
 */
function bubbleSort(array) {

  const newArray = [...array]

  for (let i = 1; i < newArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (newArray[j] > newArray[i]) {
        [newArray[j], newArray[i]] = [newArray[i], newArray[j]]
      }
    }
  }
  return newArray
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));    // should return
// [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]