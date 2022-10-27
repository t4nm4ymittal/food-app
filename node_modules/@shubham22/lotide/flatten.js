const flatten = function(array) {
  let flatArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    } else {
      flatArray.push(element);
    }
  }

  return flatArray;

};

module.exports = flatten;