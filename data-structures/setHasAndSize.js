/**
 * Coding Interview Prep #25
 * Category: Data Structures
 * Title: Use .has and .size on an ES6 set
 * Instructions: Pass an array and a value to the checkSet() function. Your function should create an ES6 set from the array argument. 
 * Find if the set contains the value argument. Find the size of the set. And return those two values in an array.
 * 
 */

 function checkSet(arrToBeSet, checkValue){
     const set = new Set()
     arrToBeSet.forEach(e => set.add(e))

     const has = set.has(checkValue)
     const len = set.size

     return [has, len]
}

console.log(checkSet([4, 5, 6], 3));    // should return [false, 3]