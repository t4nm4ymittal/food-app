const letterPositions = require("../letterPositions");
const assert = require('chai').assert;


const result = letterPositions("lighthouse in the house");

describe("#letterPosition", () => {
  it('for "h" in "lighthouse in the house" it returns [3, 5, 13, 15]', () => {
    assert.deepEqual(result['h'], [3, 5, 13, 15]);
  });
  it('for "z" in "lighthouse in the house" it returns undefined', () => {
    assert.strictEqual(result['z'], undefined);
  });
  it('for "s" in "lighthouse in the house" it returns [8, 18]', () => {
    assert.deepEqual(result['s'], [8, 18]);
  });

});
