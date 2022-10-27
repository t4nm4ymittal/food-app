const without = function(source, itemsToRemove) {

  let filteredArray = [];

  for (const element of source) {
    if (!(itemsToRemove.includes(element))) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = without;