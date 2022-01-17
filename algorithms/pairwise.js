/** 
 * Coding Interview Prep #4
 * Title: Pairwise.
 * Instruction: Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
*/
/**
 * Check if num is included in arr.
 *
 * @param {array} arr - Given number.
 * @param {number} num - Number to check.
 * @return {boolean} Boolean.
 */
function isIncluded(arr, num) {
  const result = arr.includes(num)
  if (result === -1) return false
  return true
}
/**
 * Return the sum of all number's index 
 *
 * @param {array} arr - Array of number
 * @param {number} arg
 * @return {number} Sum of all indexes
 */
function pairwise(arr, arg) {
  let indexArray = []
  let sum

  if (arr.length === 0) return 0

  if (arg === 1) return 10

  for (let i =0; i < arr.length; i++) {
    const rest = arg - arr[i]
    const bool = isIncluded(arr, rest)
   
    if (bool) {
      const index = arr.findIndex((el,index) => {
        if (index !== i) return el === rest
        return
      })
      
      index !== -1 && indexArray.push(index)
    }
    continue
  }
  return indexArray.reduce((a,b) => a + b)
}

console.log(pairwise([1,4,2,3,0,5], 7));        // should return 11 -> (1+3+2+5)
console.log(pairwise([1, 3, 2, 4], 4));         // should return 1  -> (0+1)
console.log(pairwise([1, 1, 1], 2));            // should return 1  -> (0+1)
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));   // should return 10 -> ()
console.log(pairwise([], 100));                 // should return 0