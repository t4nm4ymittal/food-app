const countOnly = require("../countOnly");
const assert = require('chai').assert;


const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
const result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

describe("#countOnly", () => {
  it('returns {Jason:1} for ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] & {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}', () => {
    assert.strictEqual(result["Jason"], 1);
  });
  it('returns undefined for ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] & {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}', () => {
    assert.strictEqual(result["Karima"], undefined);
  });
  it('returns {Fang:2} for ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] & {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}', () => {
    assert.strictEqual(result["Fang"], 2);
  });

});
