var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.frontKey = 0;
  this.lastKey = 0;
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(value) {
  this[this.lastKey] = value;
  this.length++;
  this.lastKey++;
};

Queue.prototype.dequeue = function() {
  let poppedValue = '';
  if (this.length) {
    poppedValue = this[this.frontKey];
    delete this[this.frontKey];
  
    this.length--;
    this.frontKey++;
  } 

  return poppedValue;
};