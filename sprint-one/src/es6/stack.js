class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.storage = {};
    // this.lastValue = '';
  }

  size() {
    return this.length;
  }
  
  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    let poppedValue = '';
    if (this.length) {
      poppedValue = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
    }
    return poppedValue;
  }

}