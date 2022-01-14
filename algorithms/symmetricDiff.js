/**
 * Return symmetric difference between given arrays of numbers. 
 *
 * @param {*} args, arrays of number
 * @return {*} [] 
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
