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
  #length = 0;

  #findLastNode(node = this.HEAD) {
    if (node === null) return node;
    if (node.next === null) return node;
    return this.#findLastNode(node.next);
  }

  #findByIndex(index, node = this.HEAD) {
    if (index === 0) return node;
    return this.#findByIndex(index - 1, node.next);
  }

  #findPenultimate(node = this.HEAD) {
    if (node.next.next === null) return node;
    return this.#findPenultimate(node.next);
  }
  #findPenultimateByIndex(index, node = this.HEAD) {
    if (index === 1) return node;
    return this.#findPenultimateByIndex(index - 1, node.next);
  }

  #findByValue(value, node = this.HEAD) {
    if (node.value === value) return node;
    if (node.next === null) return null;
    return this.#findByValue(value, node.next);
  }

  #toString(node = this.HEAD, str = "") {
    str += `( ${node.value} ) => `;
    if (node.next === null) {
      return (str += `( null )`);
    }
    return this.#toString(node.next, str);
  }

  append(value) {
    if (this.HEAD === null) {
      this.HEAD = new Node(value);
      this.#length++;
      return;
    }
    const lastNode = this.#findLastNode();
    lastNode.next = new Node(value);
    this.#length++;
  }

  prepend(value) {
    const firstNode = new Node(value);
    firstNode.next = this.HEAD;
    this.HEAD = firstNode;
    this.#length++;
  }

  size() {
    return this.#length;
  }

  head() {
    return this.HEAD;
  }

  tail() {
    return this.#findLastNode();
  }

  at(index) {
    return this.#findByIndex(index);
  }

  pop() {
    if (this.#length === 0)
      throw new Error("cannot remove items from an empty list");
    if (this.#length === 1) {
      this.HEAD = null;
      this.#length--;
      return;
    }
    const penultimate = this.#findPenultimate();
    penultimate.next = null;
    this.#length--;
  }

  find(value) {
    return this.#findByValue(value);
  }

  toString() {
    return this.#toString();
  }

  insertAt(index, value) {
    if (index > this.#length - 1) throw new Error("enter a valid index");
    const foundNode = this.#findByIndex(index);
    foundNode.value = value;
  }

  removeAt(index) {
    if (index > this.#length - 1) throw new Error("enter a valid index");
    if (index === 0) {
      this.HEAD = this.HEAD.next;
      this.#length--;
      return;
    }
    const penIndex = this.#findPenultimateByIndex(index);
    penIndex.next = penIndex.next.next;
  }
}
