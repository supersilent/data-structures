

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage.get(index)) {this._storage.set(index, {})};
  this._storage.each(function( value, i, storage){
    if (i === index) {
    storage[i][k]=v;
    }
  });
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each( function(value, i, storage) {
    if (i === index) {
      delete storage[i][k];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


