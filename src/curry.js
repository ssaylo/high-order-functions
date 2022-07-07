// 柯里化的作用
// 1. 参数复用
function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`;
}

// const profilePath = buildUri("https", "github.com", "linlai163")
// const awesomeTsPath = buildUri("https", "github.com", "linlai163/666")

const buildUriCurry = _.curry(buildUri);
const myGithubPath = buildUriCurry("https", "github.com");
const profilePath = myGithubPath("linlai163");
const awesomeTsPath = myGithubPath("linlai163/awesome");

console.log(profilePath, awesomeTsPath);

// 2. 延迟计算（当柯里化后的函数接收到足够的参数后，就会开始执行原函数）
const add = function (a, b) {
  return a + b;
}

const curried = _.curry(add);
const plusOne = curried(1);
console.log(plusOne(10)); // 10

// 3. 柯里化的实现 
function curry(func) { // 我第一次知道函数还有形参，而且这个形参是根据函数的入参个数来计算的
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}