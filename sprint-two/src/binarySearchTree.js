var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  Object.assign(newBinaryTree, bstreeMethods);
  return newBinaryTree;
};

var bstreeMethods = {};

bstreeMethods.insert = function(value) {
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

bstreeMethods.contains = function(target) {
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

bstreeMethods.depthFirstLog = function(callback) {
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
