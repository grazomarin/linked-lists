class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }

  changeValue(input) {
    this.value = input;
  }
}

class LinkedList {
  HEAD = null;

  #findLastNode(node) {
    if (node.next === null) return node;
    return this.#findLastNode(node.next);
  }

  append(value) {
    if (this.HEAD === null) {
      this.HEAD = new Node(value);
      return;
    }
    const lastNode = this.#findLastNode(this.HEAD);
    lastNode.next = new Node(value);
  }

  prepend(value) {
    const firstNode = new Node(value);
    firstNode.next = this.HEAD;
    this.HEAD = firstNode;
  }
}
