const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(ele1, ele2, callback) {
  reader.question(`Is ${ele1} greater than ${ele2}?`, function(res) {
    callback(res);
  });
}

/*
askIfGreaterThan(0, 3, function(res) {
  if (res == "yes") {
    console.log(true);
  } else {
    console.log(false);
  }
  reader.close();
});
*/

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  //If i < arr.length - 1, it should call askIfGreaterThan, asking the user to compare arr[i] and arr[i + 1].
  //if the current element (i) being looked at is not the last element 
  //(arr.length - 1 is the final index of the array)
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan == "yes") {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      } 
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } else if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  //For a callback to askIfGreaterThan, pass in an anonymous helper function. This should:
  //Take in a single argument: isGreaterThan; askIfGreaterThan will pass either true or false as this argument.
  //Perform a swap of elements in the array if necessary.
  //Call innerBubbleSortLoop again, this time for i + 1. It should pass madeAnySwaps. Update madeAnySwaps if you did swap.
  //Call outerBubbleSortLoop if i == (arr.length - 1). It should receive madeAnySwaps as an argument.
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      // pass in sorted array!
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});