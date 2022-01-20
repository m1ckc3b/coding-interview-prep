/**
 * Coding Interview Prep #23
 * Category: Data Structures
 * Title: Create and Add to Sets in ES6
 * Instructions: return a set with the following values: 1, 2, 3, 'Taco', 'Cat', 'Awesome'
 * 
 */

 function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line
  const array = [1,2,3,'Taco','Cat','Awesome']
  array.forEach(e => set.add(e))
  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();