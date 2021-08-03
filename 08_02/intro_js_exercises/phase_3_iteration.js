//Array.bubbleSort: receives an array, returns a sorted array by implementing bubble sort sorting algorithm
Array.prototype.bubbleSort = function() {
  // iterate through the array, and check adjacent items
  // if the one to the left is bigger than the one to the right, switch and keep iterating

  let sorted = false;

  while (sorted == false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      } 
    }
  }
  return this;
}

//String.substrings: receives a string, returns an array of all substrings

String.prototype.substrings = function() {
  let substrings = [];
  for (let i = 0; i < this.length; i++) {
    let word = this[i];
    substrings.push(word);
    for (let j = i + 1; j < this.length; j++) {
      word += this[j];
      substrings.push(word);
    }
  }
  return substrings;
}

