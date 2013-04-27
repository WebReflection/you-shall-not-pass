you-shall-not-pass
==================

just a simple way to filter strings

[![build status](https://secure.travis-ci.org/WebReflection/you-shall-not-pass.png)](http://travis-ci.org/WebReflection/you-shall-not-pass)


### What

It happens that you would like to filter something that if matches shall not pass.


### Blacklist VS Whitelist

The function accepts optionally no list, blacklist, or whitelist, and it gives precedence to the white one.

However, if no list is provided and matches the input, the `youShallNotPass.default` is returned instead.

To preserve the security intent, by default, `youShallNotPass(str)` returns true but if you want to rely the blacklist 100% feel free to chnge the value.

```javascript
// if you don't care about non-ES5 browsers
youShallNotPass.default = false;

// if you support non ES5 browsers too ...
youShallNotPass['default'] = false;
```
### API
```javascript
youShallNotPass(
  str:string,
  [blacklist:Array|RegExp|null],
  [whitelist:Array|RegExp|null]
):boolean
```

These are few examples from the test file:
```javascript
true === youShallNotPass(
  'test',
  /\btest\b/ // blacklist
);

true === youShallNotPass(
  'test',
  [ // blacklist as list
    /\btes\b/,
    /\btest\b/
  ]
);

// as whitelisted, then stronger!
false === youShallNotPass(
  'test',
  /.*/,
  /\btest\b/
);

// same as above
false === youShallNotPass(
  'test',
  [
    /.*/,
    /\btest\b/
  ],
  [
    /\btest\b/
  ]
);
```