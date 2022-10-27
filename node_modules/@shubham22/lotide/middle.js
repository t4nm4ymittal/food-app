const middle = function(array) {

  const length = array.length;
  const midIndex = length / 2;
  let tempArray = [];

  if (length <= 2) {
    return tempArray;
  }

  if (Number.isInteger(midIndex)) {
    tempArray.push(array[Math.floor(midIndex - 1)]);
  }
  tempArray.push(array[Math.floor(midIndex)]);
  return tempArray;

};

module.exports = middle;