/**
 * Coding Interview Prep #16
 * Category: Data Structures
 * Title: Create a priority Queue Class
 * Instructions: The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. 
 * dequeue and front should return only the item's name, not its priority.
 * 
 */

/**
 *
 *
 * @class PriorityQueue
 */
class PriorityQueue {

  collection = []

  print() {
    console.log(this.collection);
  }

  enqueue(element) {

    const foundIndex = this.collection.findIndex(item => item[1] >= element[1])

    if (foundIndex === -1) {
      this.collection.push(element)
    } else {
      this.collection.splice(foundIndex, 0, element)
    }

  }

  dequeue() {
    if (!this.isEmpty()) {
      this.collection.shift()
    }
    return "The queue is empty!"
  }

  size() {
    return this.collection.length
  }

  front() {
    return this.collection[0]
  }

  isEmpty() {
    return this.collection.length === 0
  }
}

const pQueue = new PriorityQueue()

pQueue.print()

console.log("--- enqueue (['aaa', 2] ---");
pQueue.enqueue(['aaa', 2])
pQueue.print()
console.log(pQueue.front());

console.log("--- enqueue ['bbb', 1] ---");
pQueue.enqueue(['bbb', 1])
pQueue.print()
console.log(pQueue.front());

console.log("--- enqueue ['drinking', 3] ---");
pQueue.enqueue(['drinking', 3])
pQueue.print()
console.log(pQueue.front());

console.log("--- enqueue ['cccc', 1]---");
pQueue.enqueue(['cccc', 1])
pQueue.print()
console.log(pQueue.front());

console.log("--- dequeue ---");
pQueue.dequeue()
pQueue.print()
console.log(pQueue.front());

console.log("--- enqueue ['AAAA', 2] ---");
pQueue.enqueue(['AAAA', 2])
pQueue.print()
console.log(pQueue.front());

// pQueue.dequeue()
// pQueue.print()
// console.log(pQueue.front());