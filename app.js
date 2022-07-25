class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let curNode = this.head;

    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  toArray() {
    const element = [];

    let curNode = this.head;
    while (curNode) {
      element.push(curNode);
      curNode = curNode.next;
    }
    return element;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("Hello there");
linkedList1.append("Pedro");
linkedList1.append("Pedro");
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend("First Value");

console.log(linkedList1.toArray());

linkedList1.delete("First Value");
linkedList1.delete("Pedro");
linkedList1.delete(18.51);

console.log(linkedList1.toArray());

console.log(linkedList1.find("Pedro"));
console.log(linkedList1.find("Hello there"));

linkedList1.insertAfter('newValue1', 1);
linkedList1.insertAfter('newValue2', 'Hello there');
console.log(linkedList1.toArray());
