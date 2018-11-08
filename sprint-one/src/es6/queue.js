class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.frontKey = 0;
    this.lastKey = 0;
    this.storage = {};
  }

  size () {
    return this.length;
  }

  enqueue (value) {
    this.storage[this.lastKey] = value;
    this.length++;
    this.lastKey++;
  }

  dequeue () {
    let poppedValue = '';
    if (this.length) {
      poppedValue = this.storage[this.frontKey];
      delete this.storage[this.frontKey];
      this.length--;
      this.frontKey++;
    } 

    return poppedValue;

  }


}
