/**
 * Coding Interview Prep #2
 * Title: Inventory Update
 * Instruction: Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */


/**
 * Check if item exists in a given array
 *
 * @param {arr} Array array in which finding
 * @param {name} String item to find
 * @return {*} Boolean  
 */
function isExists(arr, name) {
  return arr.find(e => e[1] === name ? true : false)
}

/**
 * Update a given inventory array with new data
 *
 * @param {arr1} Array current inventory
 * @param {arr2} Array new inventory
 * @return {newInventory} Array update of current inventory 
 */
function updateInventory(arr1, arr2) {
  const newInventory = [...arr1]

  for (let e2 of arr2) {
    if (isExists(arr1, e2[1])) {
      for (let e1 of newInventory) {
        if (e1[1] === e2[1]) e1[0] += e2[0]
      }
    } else {
      newInventory.push(e2)
    }    
  }

  return newInventory.sort((a,b) => {
    if (a[1] > b[1]) return 1
    if (a[1] < b[1]) return -1
    return 0
  })
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));     // should return 
                                                  // [
                                                  //   [ 88, 'Bowling Ball' ],
                                                  //   [ 2, 'Dirty Sock' ],
                                                  //   [ 3, 'Hair Pin' ],
                                                  //   [ 3, 'Half-Eaten Apple' ],
                                                  //   [ 5, 'Microphone' ],
                                                  //   [ 7, 'Toothpaste' ]
                                                  // ]