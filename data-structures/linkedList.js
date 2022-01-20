/**
 * Coding Interview Prep #30
 * Category: Data Structures
 * Title: Create a Linked List Class
 * Instructions: 
 * 
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {

  #head
  #length = 0

  constructor(head = null) {
    this.#head = head
  }
  
  head() {
    return this.#head
  }

  size() {
    return this.#length
  }

  add(element) {
    const node = new Node(element)

    // is Empty
    if (!this.#head) {
      this.#head = node
    }
    else {
      let current = this.#head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }

    this.#length++

  }

  remove(element) {
    if(this.#head.element === element) {
      this.#head = this.#head.next
    }
    else {
      let previous = this.#head
      while(previous) {
        let current = previous.next
        if (current) {
          if (current.element === element) {
            previous.next = current.next
            return this.#length--
          }
        }
        previous = current
      }
    }
  }

}

const linkedList = new LinkedList() 

linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
linkedList.add(6)

linkedList.remove(3)

console.log("head:", linkedList.head());