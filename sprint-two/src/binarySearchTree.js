var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  Object.assign(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function(value) {
  node = BinarySearchTree(value);

  var goLeftOrRight = function (node) {
    if (value > node.value) {
      if (!node.right) {
        node.right = BinarySearchTree(value);
      } else {
        goLeftOrRight(node.right);
      }
    } else if (value < node.value) {
      if (!node.left) {
        node.left = BinarySearchTree(value);
      } else {
        goLeftOrRight(node.left);
      }
    }
  };
  
  goLeftOrRight(this);
};

treeMethods.contains = function(target) {
  let findNum = function(node) {
    if (node.value === target) {
      return true;
    }

    if (node.value) {
      if (node.value > target) {
        if (node.left) { return findNum(node.left); }
        
      } else {
        if (node.right) {return findNum(node.right);}        
      }
    }
    return false;
  };

  return findNum(this);
};

treeMethods.depthFirstLog = function(callback) {
  let result = [];
  let getElements = function(node) {
    if (node.value) {
      result.push(node.value);

      if (node.left) {getElements(node.left); }
      if (node.right) {getElements(node.right);}        
    }
  };

  getElements(this);
  

  return result.map(x => callback(x));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
