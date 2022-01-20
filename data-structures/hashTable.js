/**
 * Coding Interview Prep #28
 * Category: Data Structures
 * Title: Create a Hash Table
 * Instructions: 
 * 
 */

class HashTable {

  constructor() {
    this.collection = {}
  }

  hashed(string) {
    let result = 0
    for (let i =0; i < string.length; i++) {
      result += string.charCodeAt(i)
    }
    return result
  }

  add(key , value) {
    const hash = this.hashed(key)

    if (!this.collection.hasOwnProperty(hash)) this.collection[hash] = {}

    this.collection[hash][key] = value
  }

  remove(key) {
    const hash = this.hashed(key)

    if (this.collection[hash].hasOwnProperty(key)) delete this.collection[hash][key]
  }

  lookup(key) {
    const hash = this.hashed(key)

    if (this.collection[hash].hasOwnProperty(key)) {
      return this.collection[hash][key]
    } else {
      return null
    }

  }
}

const hashT = new HashTable()

hashT.add('one', 'une value')
hashT.add('two', 'another value')

console.log(hashT.collection)
console.log(hashT.lookup('one'));
hashT.remove('one')

console.log("---------------");
console.log(hashT.collection)
console.log(hashT.lookup('one'));