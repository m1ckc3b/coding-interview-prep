/**
 * Coding Interview Prep #30, 31, 32
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

  /**
   * Return the first element of linkedList.
   *
   * @return {object} - this.#head || undefined
   * @memberof LinkedList
   */
  head() {
    return this.#head
  }

  /**
   * Return the length of LinkedList
   *
   * @return {number} Length || undefined
   * @memberof LinkedList
   */
  size() {
    return this.#length
  }

  /**
   * Append element to LinkedList.
   *
   * @param {any} element - Element to append to.
   * @memberof LinkedList
   */
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

  /**
   * Remove element from LinkedList.
   *
   * @param {any} element - Item to remove.
   * @memberof LinkedList
   */
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


  removeAt(index) {
    const element = this.elementAt(index)
    this.remove(element)
  }

  /**
   * Check if LinkedList is empty.
   *
   * @return {boolean} true or false.
   * @memberof LinkedList
   */
  isEmpty() {
    if (this.size() === 0) return true

    return false
  }

  /**
   * Find index of a given element.
   *
   * @param {any} element - Given element.
   * @return {number} index - Index of given element or -1 if it's not found. 
   * @memberof LinkedList
   */
  indexOf(element) {
    let index = 0
    let item = this.#head

    if (!item) return -1

    while((item = item.next)) {
      if (item.element === element) {
        return index
      }
      index++
    }
    return -1

  }

  /**
   * Return element at a given index.
   *
   * @param {number} index - Given index.
   * @return {any} item - Element found at the given index. 
   * @memberof LinkedList
   */
  elementAt(index) {
    let count = 0
    let item = this.#head

    if (!item) return undefined

    while(count !== index && item.next !== null) {
      item = item.next
      count++
    }
    if (count !== index && item.next === null) {
      return undefined
    }
    return item.element
  }

}

const linkedList = new LinkedList() 

linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
linkedList.add(6)

linkedList.removeAt(2)

console.log("linkedList:", linkedList.head());
console.log("size:", linkedList.size());
console.log("isEmpty:", linkedList.isEmpty());
console.log("indexOf(3):", linkedList.indexOf(3));
console.log("elementAt(3)", linkedList.elementAt(3));