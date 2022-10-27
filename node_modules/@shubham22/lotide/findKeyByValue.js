const findKeyByValue = function(inputObject, searchValue) {

  const keyArray = Object.keys(inputObject);

  for (const key of keyArray) {

    if (inputObject[key] === searchValue) {
      return key;
    }

  }
  return undefined;
};

module.exports = findKeyByValue;