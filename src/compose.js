function compose(...funcs) {
  return function (x) {
    return funcs.reduce(function (arg, fn) {
      return fn(arg);
    }, x);
  };
}

function lowerCase(input) {
  return input && typeof input === 'string' ? input.toLowerCase() : input;
}

function upperCase(input) {
  return input && typeof input === 'string' ? input.toUpperCase() : input;
}

function trim(input) {
  return input && typeof input === 'string' ? input.trim() : input;
}

function split(input, delimiter = ',') {
  return typeof input === 'string' ? input.split(delimiter) : input;
}

const trimLowerCaseAndSplit = compose(trim, lowerCase, split);
trimLowerCaseAndSplit('a,B,c');
console.log(trimLowerCaseAndSplit('a,B,c'));

//--------------------  2. curry --------------------
const abc = function(a,b,c) {
  return [a,b,c]
}

const curried = _.curry(abc);
console.log(curried(1)(2)(3))
console.log(curried(1,2)(3))
console.log(curried(1,2,3));
