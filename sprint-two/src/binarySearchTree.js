var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.childrenLength = 0;
  Object.assign(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function(value) {
  var node = BinarySearchTree(value);
  //intial case if (___);
  
  var goLeftOrRight = function (node) {
    if (value > !node.value){
      let direction = node.right;
    } else if (value < !node.value){
      let direction = node.left;
    } else {
      return 0;
    }

    if (!direction) {
      direction = BinarySearchTree(value); //this.right = node]\
    } else {
      goleftOrRight(direction);
    }
  }
  goLeftOrRight(this);
  
  // this.children.push(node);
  // this.childrenLength++;
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
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
