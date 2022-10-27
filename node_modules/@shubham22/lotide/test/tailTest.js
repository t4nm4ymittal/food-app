const tail = require('../tail');
const expect = require('chai').expect;

describe("#tail", () => {
  it("returns ['b', 'c', 'd'] for ['a', 'b', 'c', 'd']", () => {
    expect(tail(['a', 'b', 'c', 'd'])).to.have.same.members(['b', 'c', 'd']);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    expect(tail(['Hello', 'Lighthouse', 'Labs'])).to.have.same.members(['Lighthouse', 'Labs']);
  });
  it("returns [] for []", () => {
    expect(tail([])).to.have.same.members([]);
  });
});