/**
 * Coding Interview Prep #3
 * Title: No repeats please
 * Instruction: Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
 * Assume that all characters in the provided string are each unique.
 */

/**
 * Swap items in an given array.
 *
 * @param {number} index1 - Item 1 of array
 * @param {number} index2 - Item 2 of array
 * @param {array} array - Given array.
 */
function swap(index1, index2, array) {
  let tmp

  tmp = array[index1]
  array[index1] = array[index2]
  array[index2] = tmp
}
/**
 * Check if there any repetition in a given string.
 *
 * @param {string} str - Given string
 * @return {boolean} 
 */
function isRepeated(str) {
  const regex = /(\w)\1+/g
  return regex.test(str)
}
/**
 * Return all permutations with no repeated consecutive letters.
 *
 * @param {number} n - Array length of given string.
 * @param {array} arr - Array of string splitted.
 * @param {array} result - Empty array.
 * @return {array} result - All permutations.
 */
function generateNoRepeats(n, arr, result) {
  if (n == 1) {
    if (!isRepeated(arr.join(''))) result.push(arr.join(''))
  } else {
    for (let i = 0; i < n -1; i++) {
      generateNoRepeats(n -1, arr, result)
      if (n%2 === 0) swap(i, n -1, arr)
      else swap(0, n -1, arr)
    }
    generateNoRepeats(n -1, arr, result)
  }
  return result
}

/**
 * Return the number of permutations that don't have repeated consecutive letters.
 *
 * @param {string} str - Provided string of letters.
 * @return {number} generateNoRepeats() - Number of permutations.
 */
function permAlone(str) {
  const inputArr = str.split('')
  const result = []

  return generateNoRepeats(inputArr.length, inputArr, result).length
} 

console.log(permAlone('aab'));      // should return 2
console.log(permAlone("aaa"));      // should return 0
console.log(permAlone("abcdefa"));  // should return 3600
console.log(permAlone("aabb"));     // should return 8
console.log(permAlone("abfdefa"));  // should return 2640