// range(start, end): receives a start and end value, returns an array from start up to end

function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end - 1);

  r.push(end - 1);
  
  return r;
}

// sumRec(arr): receives an array of numbers and recursively sums them

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let num = arr.pop();
  
  return num + sumRec(arr);
}

// exponent(base, exp): receives a base and exponent, returns the base raise to the power of the exponent (base ^ exp)

function first_exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }


  return base * first_exponent(base, exp - 1);
}

function second_exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  // even exp
  if (exp % 2 === 0) {
    return second_exponent(base, exp / 2) ** 2; 
  } else if (exp % 2 === 1) { // odd exp
    return base * (second_exponent(base, (exp - 1) / 2) ** 2);
  }

}

// fibonacci(n): receives an integer, n, and returns the first n Fibonacci numbers

function fibonacci(n) {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  let f = fibonacci(n - 1);

  f.push(f[f.length - 1] + f[f.length - 2]);

  return f;
}

// deepDup(arr): deep dup of an Array

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }
  return arr.map((el) => {
    return deepDup(el);
  });
}

// bsearch(arr, target)

function bsearch(arr, target) {
  
}