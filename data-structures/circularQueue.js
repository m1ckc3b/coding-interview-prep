/**
 * Coding Interview Prep #17
 * Category: Data Structures
 * Title: Create a Circular Queue
 * Instructions: Create a Circular Queue with enqueue and dequeue methods.
 */

class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      const index = this.write
      this.queue[index] = item

      this.write === this.max ? this.write = 0 : this.write += 1

      return this.queue[index]
    } 
    
    else {
      if (this.write < this.read) {
        //write possible
        const index = this.write
        this.queue[index] = item
        
        this.write === this.max ? this.write = 0 : this.write += 1

        return this.queue[index]
      }

      return "Impossible to overwrite data!"
    }
  }

  dequeue() {

   if (this.read < this.write) {
    const index = this.read
    const returnedIndex = this.queue[index]
    this.queue[index] = null

    this.read === this.max ? this.read = 0 : this.read += 1

    return returnedIndex
   } 
   
   if (this.read >= this.write) {
    if (this.queue[this.max] !== null) {
      const index = this.read
      const returnedIndex = this.queue[index]
      this.queue[index] = null

      this.read === this.max ? this.read = 0 : this.read += 1

      return returnedIndex
    }

    return null
   }
  }
}

const cQueue = new CircularQueue(5)


console.log("--- new cQueue ---");
console.log(cQueue.queue, "write:", cQueue.write, "read:", cQueue.read);

console.log("--- enqueue test1 ---");
cQueue.enqueue("test1")
console.log(cQueue.queue, "write:", cQueue.write, "read:", cQueue.read);

console.log("--- dequeue ---");
console.log(cQueue.dequeue());
console.log(cQueue.queue, "write:", cQueue.write, "read:", cQueue.read);

console.log("--- dequeue ---");
console.log(cQueue.dequeue());
console.log(cQueue.queue, "write:", cQueue.write, "read:", cQueue.read);


// cQueue.enqueue("test2")
// cQueue.enqueue("test3")
// cQueue.enqueue("test4")
// cQueue.enqueue("test5")
// console.log(cQueue.queue);

// console.log("-- dequeue 1 --");
// console.log(cQueue.dequeue());

// console.log(cQueue.enqueue("test6"));

// console.log("--- enqueue != null ---");
// console.log(cQueue.enqueue("test7"));

// console.log("--- dequeue 2 ---");
// console.log(cQueue.dequeue());
// console.log(cQueue.enqueue("test7"));
// console.log(cQueue.queue);
