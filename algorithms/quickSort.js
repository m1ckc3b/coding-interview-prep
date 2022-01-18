/**
 * Coding Interview Prep #8
 * Title: Implement Quick Sort
 * Instructions: Write a function quickSort which takes an array of integers as input 
 * and returns an array of these integers in sorted order from least to greatest.
 * While the choice of the pivot value is important, any pivot will do for our purposes here. 
 * For simplicity, the first or last element could be used.
 */

/**
 * Return given array of numbers sorted recursively.
 *
 * @param {array} array - Given array of numbers.
 * @return {array} Sorted array.
 */
function quickSort(array) {

  if(array.length <= 1){
    return array;
  }

  const pivot = array[array.length - 1];
  const smaller = [];
  const bigger = [];

  for(let i=0; i < array.length-1;i++){
    if(array[i] < pivot){
      smaller.push(array[i]);
    }
    else{
      bigger.push(array[i])
    }
  }

  return [...quickSort(smaller) ,pivot,...quickSort(bigger)];
}

console.log(quickSort([1, 6, 3, 4, 5, 1, 0, 4, 8])); // should return [0, 1, 1, 3, 4, 4, 5, 6, 8]
console.log(quickSort([5,3,7,6,2,9]));
console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
// should return
// [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]