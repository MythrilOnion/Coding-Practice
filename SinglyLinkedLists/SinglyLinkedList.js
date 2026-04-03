const Node = require("./Node.js");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;

    if (this.head === this.tail) {
      this.pop();
    } else {
      this.head = currentHead.next;
      currentHead.next = null;
      this.length--;
    }

    return currentHead;
  }

  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      let currentHead = this.head;
      this.head = new Node(val);
      this.head.next = currentHead;
      this.length++;
    }

    return this.head;
  }
}

let list = new SinglyLinkedList();
list.push(20);
list.push("butts");
console.log(list.shift());
list.unshift("new butts");

console.log({ list });
