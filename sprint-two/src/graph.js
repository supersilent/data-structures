

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.relationship = []; //[ [2,3], [1,2] ]
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes.splice(this.nodes.indexOf(node), 1);
  this.relationship.splice(this.relationship.indexOf(node), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.relationship.includes(JSON.stringify([fromNode, toNode].sort()));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // var arr = this.nodes;
  // arr[arr.indexOf(fromNode)]// === fromNode          .relationship.push(toNode);
  // arr[arr.indexOf(toNode)]            .relationship.push(fromNode);
  this.relationship.push(JSON.stringify([fromNode, toNode].sort()));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.relationship.splice(this.relationship.indexOf(JSON.stringify([fromNode, toNode].sort())), 1);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let e of this.nodes ){
    cb(e);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


