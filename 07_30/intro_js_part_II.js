console.log("Ayyy Esketit");

//Phase 1: titleize

function printCallback(array) {
  array.forEach(ele => console.log(ele));
}

function titleize(array, printCallback) {
  const new_array = array.map(x => `Mx. ${x} Junglemeister Schmidt`);

  printCallback(new_array)
}

titleize(["Mary", "Brian", "Leo"], printCallback);

//Phase 2: Constructors, Prototypes, and this

function Elephant(name, height, tricks) {
  this.name = name,
  this.height = height, /* height in inches */
  this.tricks = tricks
}



let elephant1 = new Elephant('Dumbo', 76, ["painting a picture"]);

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the Elephant goes phrRRRRR!!`);
}

console.log(elephant1);
elephant1.trumpet()

Elephant.prototype.grow = function() {
  this.height += 12;
  console.log(`${this.name} the Elephant has grown to ${this.height} inches!`);
}

elephant1.grow();
elephant1.grow();

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
  console.log(`${this.name} the Elephant learned a new trick, ${trick}.`);
}

Elephant.prototype.play = function() {
  const random = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} the Elephant is ${this.tricks[random]}!`);
}

elephant1.addTrick("juggling a ball");
elephant1.addTrick("shooting a basketball");

elephant1.play();
elephant1.play();

//Phase 3

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

Elephant.paradeHelper(micah);

herd.forEach(ele => Elephant.paradeHelper(ele));


//Phase 4: Closures

function dinerBreakfast() {
  order = "I'd like cheesy scrambled eggs please";
  function addToOrder(additional_item) { 
    console.log(order += ` and ${additional_item}`)
  };
  return addToOrder;
}

let bfastOrder = dinerBreakfast();
// "I'd like cheesy scrambled eggs please"
bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."