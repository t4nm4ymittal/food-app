const eqObjects = function(object1, object2) {

  const obj1KeyArray = Object.keys(object1);
  const obj2KeyArray = Object.keys(object2);

  if (obj1KeyArray.length !== obj2KeyArray.length) {
    return false;
  }
  for (const key of obj1KeyArray) {
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      return eqObjects(object1[key], object2[key]);
    } else if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;