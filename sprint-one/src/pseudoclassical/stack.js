var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};	

Stack.prototype.size = function() {
  return this.length;
};

Stack.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  let poppedValue = this[this.length - 1];
  delete this[this.length - 1];
  if (this.length) { this.length--; } 
  return poppedValue;
};
