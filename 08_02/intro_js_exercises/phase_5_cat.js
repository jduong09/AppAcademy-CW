class Cat {
  constructor(name, owner) {
    this.name = name,
    this.owner = owner
  }
}

let donut = new Cat("Donut", "Thea");

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}!`;
}

console.log(donut.cuteStatement());
let sylvester = new Cat("Sylvester", "Julian");

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}, especially ${this.owner}!`
}

console.log(donut.cuteStatement());

Cat.prototype.meow = function() {
  return `${this.name} meows!`;
}

console.log(donut.meow());
console.log(sylvester.meow());

donut.meow = function() {
  return `${this.name} meows at ${this.owner}`;
}

console.log("I just changed Donut's meow!");
console.log(donut.meow());
console.log(sylvester.meow());
console.log("They shouldn't be the same!");

