var assert = require('chai').assert;
var noease = require('../index.js');

describe('Number easing', function(){

  it('should be a function', function(){
    assert.isFunction(noease);
  });

  it('should return the start value', function() {
    noease(function(val) {
      var value = val;
      assert.equal(value, 10);
    });
  });

  it('should return the end value after duration', function() {
    var value;
    noease(function(val) {
      value = val;
    });
    setTimeout(function() {
      assert.equal(value, 1000);
    },1000);
  });

  it('should return the correct start value specified in options', function() {
    var options = { startValue: 5000 };
    noease(options,function(val) {
      var value = val;
      assert.equal(value, 5000);
    });
  });

  it('should return the correct end value specified in options', function() {
    var value;
    var options = { endValue: 5000 };
    noease(options,function(val) {
      value = val;
    });
    setTimeout(function() {
      assert.equal(value, 5000);
    },1000);
  });

  it('should be able to count down', function() {
    var value;
    var options = { startValue: 5000, endValue: 1000 };
    noease(options,function(val) {
      value = val;
    });
    setTimeout(function() {
      assert.equal(value, 1000);
    },1000);
  })
});