// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countObject = {};

  for (const element of allItems) {
    if (itemsToCount[element] === true) {
      (countObject[element] === undefined) ? countObject[element] = 1 : countObject[element]++;
    }
  }
  return countObject;

};

module.exports = countOnly;