var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    let storageLength = Object.keys(storage).length;
    let lastStorageKey = 0;
    if (!storageLength) {
      lastStorageKey = 0;
    }else{
      lastStorageKey = Number(Object.keys(storage)[storageLength - 1]) + 1;
    }
    storage[lastStorageKey] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (!count   ){ return '';}
    let dequeuedValue = Object.keys(storage).length ? storage[Object.keys(storage)[0]] : '';
    delete storage[Object.keys(storage)[0]];
    count--;
    return dequeuedValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
