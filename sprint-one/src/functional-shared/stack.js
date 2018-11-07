var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = {};
  newStack.length = Object.keys(newStack).length;

  var extend = function(obj) {
    return Object.assign(...arguments);
  };

  extend(newStack, stackMethods); 

  return newStack;
};	


var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  let poppedValue = this[this.length - 1];
  delete this[this.length - 1];
  if (this.length) { this.length--; } 
  return poppedValue;
};