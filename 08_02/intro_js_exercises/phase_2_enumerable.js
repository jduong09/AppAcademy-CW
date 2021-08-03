// myForEach: receives a callback function and executes the callback for each element in the array
// Note that JavaScript's forEach function has no return value (returns undefined)
Array.prototype.myEach = function(callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }

  return this;
}

// myMap: receives a callback function, 
// returns a new array of the results of calling the callback function 
// on each element of the array
// Should use myEach and a closure
Array.prototype.myMap = function(callBack) {
  new_array = [];

  this.myEach(ele => new_array.push( callBack(ele)) );

  return new_array;
}


// myReduce/myInject
// Takes a callback function and an optional initialValue parameter
// if an initialValue Parameter is not given, default to the first item in the array
Array.prototype.myReduce = function(callBack, initialValue) {
  let arr = this;

  if (initialValue === undefined) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;

  arr.myEach(el => result = callBack(result, el));

  return result;
}

