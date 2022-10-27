const map = require("../map");
const assert = require('chai').assert;


const words = ["ground", "control", "to", "major", "tom"];
const amounts = [100, 296, 20, 51, 12];
const names = ["Steve", "Sam", "Tony", "David"];

describe("#takeUntil", () => {
  it('returns ["g", "c", "t", "m", "t"] for (["ground", "control", "to", "major", "tom"], word => word[0])', () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });
  it('returns [120, 355, 24, 61, 14] for ([100, 296, 20, 51, 12], amount => Math.floor(amount * 1.2))', () => {
    assert.deepEqual(map(amounts, amount => Math.floor(amount * 1.2)), [120, 355, 24, 61, 14]);
  });
  it('returns ["Mr. Steve", "Mr. Sam", "Mr. Tony", "Mr. David"] for (["Steve", "Sam", "Tony", "David"], name => "Mr. " + name)', () => {
    assert.deepEqual(map(names, name => "Mr. " + name), ["Mr. Steve", "Mr. Sam", "Mr. Tony", "Mr. David"]);
  });
});