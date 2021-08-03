/* Array#uniq - returns a new array containing each individual element of the original array
   only once (creating all unique elements) 
*/
// Return a new array
// Should not mutate the original array
// Elements should be in the order in which they first appeared in the original array
Array.prototype.uniq = function() {
  let new_array = [];

  for (let i = 0; i < this.length; i++) {
    if (new_array.includes(this[i])) {
      continue;
    } else {
      new_array.push(this[i]);
    }
  }

  return new_array;
} 

// Array#twoSum - returns an array of position pairs where the elements sum to zero
Array.prototype.twoSum = function() {
  let pair_array = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        const pair = [this[i], this[j]];
        pair_array.push(pair);
      }
    }
  }

  return pair_array;
}

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// Should not mutate the original array
// relook at!
Array.prototype.transpose = function() {

  // this creates the empty transposed array
  // just a neat trick to avoid iterating
  const columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }

  return columns;
};