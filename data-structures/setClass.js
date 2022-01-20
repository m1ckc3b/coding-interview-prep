/**
 * Coding Interview Prep #18
 * Category: Data Structures
 * Title: Create a Set Class
 * Instructions: Create an add method that adds a unique value to the set collection 
 * and returns true if the value was successfully added and false otherwise.
 * Create a remove method that accepts a value and checks if it exists in the set. 
 * If it does, then this method should remove it from the set collection, and return true.
 * Otherwise, it should return false. Create a size method that returns the size of the set collection.
 * 
 */

 class Sett {

  #dictionary
  #length
  constructor() {
    // Dictionary will hold the items of our set
    this.#dictionary = {};
    this.#length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.#dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.#dictionary);
  }

  add(element) {

    if (!this.has(element)) {
      this.#dictionary[element] = element
      this.length++
      return true
    }

    return false
  }

  remove(element) {
    if (this.has(element)) {
      delete this.#dictionary[element]
      this.length--
      return true
    }

    return false
  }

  size() {
    return this.#length
  }
}

const set = new Sett()
console.log("dictionary:",set.dictionary);
console.log("length:", set.length);
console.log("size:", set.size());

console.log("--- add ---");
console.log("add 1:",set.add(1));
console.log(set.values());


console.log("--- add ---");
console.log("add 2:",set.add(2));
console.log(set.values());

console.log("--- add ---");
console.log("add 2 again:",set.add(2));
console.log(set.values());
console.log("size:", set.size());


console.log("--- remove ---");
console.log("remove 1:",set.remove(1));
console.log(set.values());
console.log("size:", set.size());


console.log("--- remove ---");
console.log("remove 3:",set.remove(3));
console.log(set.values());