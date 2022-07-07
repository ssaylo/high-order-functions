const _ = require('lodash')

// 偏函数

function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`;
}

const myGithubPath = _.partial(buildUri, "https", "github.com");
const profilePath = myGithubPath("linlai/linlai163");
const awesomeTsPath = myGithubPath("linlai/awesome-linlai");

console.log(myGithubPath, profilePath, awesomeTsPath);

function partial(fn) {
  let args = [].slice.call(arguments, 1);
  return function () {
    const newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
}