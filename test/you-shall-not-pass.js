//remove:
var youShallNotPass = require('../build/you-shall-not-pass.node.js');
//:remove

wru.test([
  {
    name: "main",
    test: function () {
      wru.assert(typeof youShallNotPass == "function");
    }
  },{
    name: 'blacklisted',
    test: function () {
      wru.assert(
        'single check',
        youShallNotPass(
          'test',
          /\btest\b/
        )
      );
      wru.assert(
        'multiple checks',
        youShallNotPass(
          'test',
          [
            /\btes\b/,
            /\btest\b/
          ]
        )
      );
    }
  },{
    name: 'whitelisted',
    test: function () {
      wru.assert(
        'single check',
        !youShallNotPass(
          'test',
          /.*/,
          /\btest\b/
        )
      );
      wru.assert(
        'multiple checks',
        !youShallNotPass(
          'test',
          [
            /.*/,
            /\btest\b/
          ],
          [
            /\btest\b/
          ]
        )
      );
    }
  },{
    name: 'what if not listed',
    test: function () {
      wru.assert(
        'not listed, shall not pass !',
        youShallNotPass(
          'whatever'
        )
      );
    }
  },{
    name: 'different default',
    test: function () {
      youShallNotPass.maybe = true;
      wru.assert(
        'not listed, forced return, shall pass !',
        !youShallNotPass(
          'whatever'
        )
      );
      delete youShallNotPass.maybe;
    }
  }
]);
