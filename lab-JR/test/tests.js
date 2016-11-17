//require in function from greet.js
//would i pass entire object to index.js through some modular pattern?
//what are dev dependencies? are they the ones that live in package.json script: ?
const testGreet = require('../lib/greet');
const assert = require('assert');
describe('function', function() {
  describe('greet()', function() {
    it('should return a string Hello + param', function(){
      //assert.equal(actual, expected, [message]);
      assert.equal(testGreet('JR'), 'Hello ' + 'JR');
    });
  });
});
