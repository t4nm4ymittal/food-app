const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    result.push(element);
  }
  return result;
};

module.exports = takeUntil;