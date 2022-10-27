const eqObjects = require("../eqObjects");
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it('returns true for({a: {z: 1}, b: 2}, {a: {z: 1}, b: 2})', () => {
    assert.strictEqual(eqObjects({a: {z: 1}, b: 2}, {a: {z: 1}, b: 2}), true);
  });
  it('returns false for ({a: {y: 0, z: 1}, b: 2}, {a: {z: 1}, b: 2})', () => {
    assert.strictEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: {z: 1}, b: 2}), false);
  });
  it('returns false for ({a: {y: 0, z: 1}, b: 2}, {a: 1, b: 2})', () => {
    assert.strictEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: 1, b: 2}), false);
  });
  it('returns true for ({a: "1", b: "2"}, {b: "2", a: "1"})', () => {
    assert.strictEqual(eqObjects({a: "1", b: "2"}, {b: "2", a: "1"}), true);
  });
  it('returns false for ({a: "1", b: "2"}, {a: "1", b: "2", c: "3"})', () => {
    assert.strictEqual(eqObjects({a: "1", b: "2"}, {a: "1", b: "2", c: "3"}), false);
  });

});
