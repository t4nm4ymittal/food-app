const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [[2, 3, [1, [7, 8, [10]]]], [4]], [[2, 3, [1, [7, 8, [10]]]], [4]]", () => {
    assert.strictEqual(eqArrays([[2, 3, [1, [7, 8, [10]]]], [4]], [[2, 3, [1, [7, 8, [10]]]], [4]]), true);
  });
  it("returns false for [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("returns false for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});
