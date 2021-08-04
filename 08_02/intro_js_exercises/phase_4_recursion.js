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
// note: bsearch is O(log n) under the assumption that the array given is sorted
function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let midIndex = Math.floor(arr.length / 2);
  let mid = arr[midIndex];

  if (target === mid) {
    return midIndex;
  }

  if (target < mid) {
    // We know the element is on the left of the mid element, do a bsearch on the array from starting up to mid element
    return bsearch(arr.slice(0, midIndex), target);
  } else if (target > mid) {
    const ele = bsearch(arr.slice(midIndex + 1), target);
    return ele === -1 ? -1 : ele + midIndex + 1;
  }

}

// Need to sort the two sorted arrays into one sorted array
function merge(arrayOne, arrayTwo) {
  let newArray = [];

  //Check the first of each array to see which is the smaller one, add that to the new array.
  while (arrayOne.length != 0 && arrayTwo.length != 0) {
    if (arrayOne[0] <= arrayTwo[0]) {
      let ele = arrayOne.shift();
      newArray.push(ele);
    } else {
      let ele = arrayTwo.shift();
      newArray.push(ele);
    }
  }

  //Next, if there are any leftovers in the two arrays, add those to the end of the new array.
  while (arrayOne.length != 0) {
    let ele = arrayOne.shift();
    newArray.push(ele);
  }

  while (arrayTwo.length != 0) {
    let ele = arrayTwo.shift();
    newArray.push(ele);
  }

  return newArray;
}

// mergesort(arr): receives an array, returns a sorted copy of the array by implementing merge sort sorting algorithm
function mergesort(arr) {
  // base case: if arr is empty or length 1, it is sorted
  if (arr.length === 0) {
    return arr;
  }

  if (arr.length === 1) {
    return arr;
  }
  // Divide arr in half, call mergesort on both
  const midIndex = Math.floor(arr.length / 2);

  const leftArray = arr.slice(0, midIndex);
  const rightArray = arr.slice(midIndex);

  // Use merge helper method to combine and sort arrays
  let array = merge(mergesort(leftArray), mergesort(rightArray));

  return array;
}

// subsets(arr): receives an array, returns an array containing all the subsets of the original array
function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const first = arr[0];
  const nonFirst = subsets(arr.slice(1));

  const withFirst = nonFirst.map(sub => [first].concat(sub) );

  return nonFirst.concat(withFirst);
}