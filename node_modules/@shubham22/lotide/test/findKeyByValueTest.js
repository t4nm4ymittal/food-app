const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;

const bestTVShowsByGenre = {scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"};

describe("#findKeyByValue", () => {
  it('returns "drama" for {scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"} and searchValue as "The Wire"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined for {scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"} and searchValue as "That \'70s Show"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('returns "Brooklyn Nine-Nine" for {scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"} and searchValue as "Brooklyn Nine-Nine"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

});
