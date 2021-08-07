const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Give me a number to sum', function(res) {
      const numberToAdd = parseInt(res);

      console.log(`You replied ${numberToAdd}`);
      sum += numberToAdd;

      console.log("Partial Sum:" + sum);

      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function (sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
});