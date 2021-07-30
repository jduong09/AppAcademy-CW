//Phase 1: JS Fundamentals
console.log("Esketit");

function mysteryScoping1() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

console.log("Change two var to two let variables")
mysteryScoping1()

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

console.log("Using two constant variables")
mysteryScoping2()

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

console.log("Constant variable with let variable nested inside block")
mysteryScoping3();

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

console.log("Two let variables")
mysteryScoping4();

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  //let x = 'out of block again';
  console.log(x);
}

console.log("One let variable in function, one let variable declared in IF block")
console.log("Followed by a let variable defined at end of function")
console.log("Two same-name let variables defined in same lexical scope results in error")
mysteryScoping5();

//Madlib function
function madlib(noun, verb, adjective) {
  console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}!`);
}

madlib('guac', 'make', 'best');

//isSubstring

function isSubstring(string, substring) {
  const words = string.split(' ');
  for (let i = 0; i <= words.length; i++) {
    if (words[i] === substring) {
      return true;
    }
  }
  return false;
}

console.log(isSubstring("time to program", "time")); //true

console.log(isSubstring("Jump for joy", "joys")); //false

//Phase 2: JS Looping Constructs
console.log("Brrrrrr");

//fizzBuzz returns a new array checking if the number is divisible by EITHER 3 OR 5, but NOT BOTH

function fizzBuzz(array) {
  fizzy_array = [];

  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      continue;
    } else if (array[i] % 3 == 0) {
      fizzy_array.push(array[i]);
    } else if (array[i] % 5 == 0) {
      fizzy_array.push(array[i]);
    }
  }

  return fizzy_array;
}

console.log(fizzBuzz([1, 3, 5, 12, 15, 30]));

//isPrime

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); //true
console.log(isPrime(10)); //false
console.log(isPrime(15485863)); //true
console.log(isPrime(3548563)); //false

//sumOfNPrimes

function firstNPrimes(n) {
  prime_nums = [0]
  for (let i = 2; i <= n; i++) {
    if (isPrime(i) == true) {
      prime_nums.push(i);
    }
  }
  return prime_nums
}

function sumOfNPrimes(n) {
  const prime_nums = firstNPrimes(25);
  let sum = 0;

  for (let j = 0; j <= n; j++) {
    sum += prime_nums[j];
  }

  return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));