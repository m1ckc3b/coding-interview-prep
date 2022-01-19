/**
 * Coding Interview Prep #14
 * Category: Data Structures
 * Title: Create a Stack Class
 * Instructions: Write a push method that pushes an element to the top of the stack, a pop method that removes
 *  and returns the element on the top of the stack, a peek method that looks at the top element in the stack,
 * an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack.
 * Normally stacks don't have this, but we've added a print helper method that console logs the collection.
 */

/**
 * Create a Stack Data Structure.
 *
 * @class Stack
 */
class Stack {

  collection = []

  push(value) {
    this.collection.push(value)
  }

  pop() {
    return this.collection.pop()
  }

  peek() {
    return this.collection[this.collection.length -1]
  }

  isEmpty() {
    return this.collection.length === 0
  }

  clear() {
    this.collection.length = 0
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)


console.log(stack.collection);

console.log("pop:",stack.pop());

console.log("peek:",stack.peek());

console.log(stack.isEmpty());

stack.clear()

console.log(stack.isEmpty());

