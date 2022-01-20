/**
 * Coding Interview Prep #26
 * Category: Data Structures
 * Title: Create a Map Data Structure
 * Instructions: Pass an array and a value to the checkSet() function. Your function should create an ES6 set from the array argument. 
 * Find if the set contains the value argument. Find the size of the set. And return those two values in an array.
 * 
 */

 class Mappe {
     #collection

     constructor() {
         this.#collection = {}
     }

     add(key, value) {
         this.#collection[key] = value
     }

     remove(key) {
         delete this.#collection[key]
     }

     get(key) {
         return this.#collection[key]
     }

     has(key) {
        return Object.keys(this.#collection).filter(k => k == key).includes(String(key))
     }

     values() {
         return Object.values(this.#collection)
     }

     size() {
         return Object.keys(this.#collection).length
     }

     clear() {
         this.#collection = {}
     }
 }

 const map = new Mappe()

 map.add(0, 'aaa')
 console.log("get:",map.get(0));
 console.log("has:", map.has(0));
 console.log("values:", map.values());
 console.log("size:", map.size());