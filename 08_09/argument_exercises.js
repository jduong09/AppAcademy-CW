// sum and sumRest
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

//console.log(sum(1, 3, 5, 2, 1, 4, 4));

function sumRest(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}

//console.log(sumRest(1, 3, 4, 1, 4, 2, 5, 6));

// bind


// curried
// takes in number of arguments that will be summed
function sumCurry(...numArgs) {
  const numbers = [];
  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length == numArgs) {
      return numbers.reduce((previous, current) => {
        return previous + current;
      });
    } else {
      return _curriedSum;
    }
  };
  
  return _curriedSum;
};

let f1 = sumCurry(3);
f1(3);
f1(5);
console.log(f1(10));

Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
}



