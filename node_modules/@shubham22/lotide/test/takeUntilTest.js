const takeUntil = require("../takeUntil");
const assert = require('chai').assert;


const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data1 = [4, 9, 6, 4, 51, 5, 100, 4, 51, 841];

describe("#takeUntil", () => {
  it('returns ["I\'ve", "been", "to", "Hollywood"] for (["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"], x => x === ",")', () => {
    assert.deepEqual(takeUntil(data, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
  it('returns [4, 9, 6, 4, 51, 5] for ([4, 9, 6, 4, 51, 5, 100, 4, 51, 841], x => x < 100)', () => {
    assert.deepEqual(takeUntil(data1, x => x === 100), [4, 9, 6, 4, 51, 5]);
  });

});