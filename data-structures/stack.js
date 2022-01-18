/**
 * Coding Interview Prep #12
 * Category: Data Structures
 * Title: Learn how a Stack Works
 * Instructions: Modify the given array and treat it like a stack using the JavaScript methods mentioned above. 
 * Remove the top element "PSY44" from the stack. Then add "CS50" to be the new top element of the stack.
 */

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line
console.log(homeworkStack);
homeworkStack.pop()
console.log(homeworkStack);
homeworkStack.push("CS50")
console.log(homeworkStack);