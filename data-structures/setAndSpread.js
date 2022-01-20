/**
 * Coding Interview Prep #26
 * Category: Data Structures
 * Title: Use Spread and Notes for ES5 Set() Integration
 * Instructions: Pass a set object to the checkSet function. It should return an array containing the values of the Set.
 * 
 */

 function checkSet(set){
    return [...set]
}

console.log(checkSet(new Set([1,2,3,4,5,6,7])) );   // should return [1, 2, 3, 4, 5, 6, 7]