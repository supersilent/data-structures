var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQueue = {};
  newQueue.length = 0;
  newQueue.frontKey = 0;
  newQueue.lastKey = 0;
  var extend = function(obj) {
    return Object.assign(...arguments);
  };

  extend(newQueue, queueMethods); 

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this[this.lastKey] = value;
  this.length++;
  this.lastKey++;
};

queueMethods.dequeue = function() {
  let poppedValue = '';
  if (this.length) {
    poppedValue = this[this.frontKey];
    delete this[this.frontKey];
  
    this.length--;
    this.frontKey++;
  } 

  return poppedValue;
};