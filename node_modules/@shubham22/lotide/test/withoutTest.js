const without = require("../without");
const assert = require('chai').assert;

describe("#without", () => {
  it('returns ["1", "2"] for (["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('returns ["hello","world"] for (["hello", "world", "lighthouse"],["lighthouse"])', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
  it("returns [1, 2, 3] for ([1,2,3], [])", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });

});