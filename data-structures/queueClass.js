/**
 * Coding Interview Prep #15
 * Category: Data Structures
 * Title: Create a Queue Class
 * Instructions: Write an enqueue method that pushes an element to the tail of the queue, a dequeue method that removes
 * and returns the front element, a front method that lets us see the front element,
 * a size method that shows the length, and an isEmpty method to check if the queue is empty.
 */

/**
 * Create a Queue Data Structure.
 *
 * @class Queue
 */
class Queue {

  collection = []

  print() {
    console.log(this.collection);
  }

  enqueue(value) {
    this.collection.push(value)
  }

  dequeue() {
    return this.collection.shift()
  }

  front() {
    return this.collection[0]
  }

  size() {
    return this.collection.length
  }

  isEmpty() {
    return this.collection.length === 0
  }
}


const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()
console.log("fornt:",queue.front());
console.log("size:",queue.size());
console.log("empty?",queue.isEmpty());

queue.dequeue()
queue.print()
console.log("front:",queue.front());
console.log("size:",queue.size());
console.log("empty?",queue.isEmpty());