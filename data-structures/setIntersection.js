/**
 * Coding Interview Prep #20
 * Category: Data Structures
 * Title: Perform an Intersection on Two Sets of Data
 * Instructions: Add an intersection method.
 * 
 */


 class Sett {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }

  union(otherSet) {
    const newSet = new Sett()
    
    this.values().forEach(e => newSet.add(e));
    otherSet.values().forEach(e => newSet.add(e))

    return newSet
  }

  intersection(otherSet) {
    const result = this.values().filter(e => otherSet.has(e))
    const newSet = new Sett()

    result.forEach(e => newSet.add(e))

    return newSet
  }
}

const setA = new Sett()
const setB = new Sett()

setA.add("a")
setA.add("b")
setA.add("c")

setB.add("a")
setB.add("b")
setB.add("d")
setB.add("e")

console.log(setA.intersection(setB));    // should return Sett { dictionary: { a: 'a', b: 'b' }, length: 2 }