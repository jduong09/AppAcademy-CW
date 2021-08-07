const readline = require('readline');
/*Ask the user if they'd like tea.
* console.log their response.
* Ask the user if they'd like biscuits.
* console.log their complete response: So you ${firstAns} want tea and you ${secondAns} want coffee.
* Close the reader.
*/

/*
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/

/*

function teaAndBiscuits() {
  reader.question("Would you like some tea?", (answer) => {
    console.log(`You replied ${answer}.`);
    reader.close();
  });
}

teaAndBiscuits();
*/


function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);

    reader.question('Would you like some biscuits?', (res) => {
      second = res;
      console.log(`You replied ${res}.`);

      const firstRes = (first === 'yes') ? 'do' : 'don\'t';
      const secondRes = (second === 'yes') ? 'do' : 'don\'t';
      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);

      reader.close();
    });
  });
}

//teaAndBiscuits();

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

//Noodles.chase(Markov);

//Noodles.chase returns as a regular function, and then call changes the 'this' to Markov
//and the cat becomes the second argument, Noodles.
//results in: 'My name is Markov and I'm chasing Noodles! Woof!'
//Noodles.chase.call(Markov, Noodles);
//Noodles.chase.apply(Markov, [Noodles]);