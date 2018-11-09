var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var mySet = this._storage;
  if (!(mySet.includes(item))) {
    mySet.push(item);
  }
  // this._storage = new Set(this._storage.concat([item]));
};

setPrototype.contains = function(item) {
  var mySet = this._storage;
  if (mySet.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  var mySet = this._storage;
  mySet.splice(mySet.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
