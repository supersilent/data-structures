var LinkedList = function() {
  var list = {};
  list.head = null; //list.head = node
  list.tail = null; //list.tail = node


  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head) {
      list.head = node;
    }
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var remove = list.head.value;
    list.head = list.head.next;
    return remove;
  };

  list.contains = function(target) {
    findValue = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return findValue(node.next);
      } else {
        return false;
      }
    };
    return findValue(list.head);
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
