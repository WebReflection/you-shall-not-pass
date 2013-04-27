var gandalf = [];

function reTest(re) {
  return re.test(this);
}

function youShallNotPass(what, blackList, whiteList) {
  return  gandalf.concat(whiteList || gandalf).some(reTest, what) ?
          false :
          gandalf.concat(blackList || gandalf).some(reTest, what) ||
          !!youShallNotPass['default'];
}

youShallNotPass['default'] = true;