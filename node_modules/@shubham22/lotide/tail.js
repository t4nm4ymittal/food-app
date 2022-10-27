const tail = function(array) {
  const size = array.length;
  if (size === 1) {
    return [];
  } else {
    return size === 0 ? [] : array.slice(1);
  }
};

module.exports = tail;