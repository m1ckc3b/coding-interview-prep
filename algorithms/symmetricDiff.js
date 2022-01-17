/**
 * Coding Interview Prep #1
 * Title: Find the Symmetric Difference
 * Instruction: Create a function that takes two or more arrays and returns an array of their symmetric difference.
 * The returned array must contain only unique values (no duplicates).
 */

/**
 * Return symmetric difference between given arrays of numbers. 
 * @param {Array<number>} args - Arrays of number.
 * @return {Array<number>} The symmetric difference.
 */
const sym = (...args) => {
  return [...new Set(args.reduce((a, b) => [
    ...a.filter(x => !b.includes(x)),
    ...b.filter(x => !a.includes(x))
  ]))]
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))                                   // should return [3, 4, 5]
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));                               // should return [3, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));                 // should return [1, 4, 5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));   // should return [2, 3, 4, 6, 7]
