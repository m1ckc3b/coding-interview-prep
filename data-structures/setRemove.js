/**
 * Coding Interview Prep #24
 * Category: Data Structures
 * Title: Remove items from a set in ES6
 * Instructions: Create a set with the integers 1, 2, 3, 4, & 5. Remove the values 2 and 5, and then return the set.
 * 
 */

 function checkSet(){
  // Only change code below this line
  var set = new Set()

  const array = [1, 2, 3, 4, 5]
  array.forEach(e => set.add(e))

  set.delete(2)
  set.delete(5)

  // Only change code above this line
  return set;   
}

console.log(checkSet());