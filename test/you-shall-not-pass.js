//remove:
var main = require('../build/you-shall-not-pass.node.js');
//:remove

wru.test([
  {
    name: "main",
    test: function () {
      wru.assert(typeof main == "object");
      // wru.assert(0);
    }
  }
]);
