var greetTest = require('../lib/greet');
var assert = require('assert');

describe('function', function(){
  describe('greetTest', function(){
    it('should return a greeting', function(){
      var name = 'JR';
      assert.equal(greetTest(name), 'Hello ' + name);
    });
  });
});

// console.log(greetTest);
