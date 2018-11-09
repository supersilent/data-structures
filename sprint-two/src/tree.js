var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.childrenLength = 0;
  Object.assign(newTree, treeMethods);
  
 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
  this.childrenLength++;
};

treeMethods.contains = function(target) {
  let findNum = function(node) {
    if (node.value === target) {
      return true;
    }
    if (node.childrenLength > 0) { // if (node.childrenLength > 0) {
      for (var e of node.children) {
        if (findNum(e)) {
          return true;
        }
      // return findNum(e);
      }    
    }
    return false;
  };
  return findNum(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
