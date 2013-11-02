var should = require('should'),
    reMap = require('../lib/re-map.js');

describe("re-map", function() {
  it("should work as expected", function() {
    reMap(10, 0, 100, 0, 200).should.equal(20);
    reMap(0, 0, 100, 0, 200).should.equal(0);
    reMap(10, 0, 100, 0, 512).should.equal(51.2);
    reMap(5.5, 0, 100, 0, 512).should.equal(28.16);
    reMap(1, 0, 100, 0, 30).should.equal(0.3);
    reMap(25, 0, 100, 0, 50).should.equal(12.5);
  });
});