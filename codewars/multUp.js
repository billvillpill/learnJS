/**
The story of the famous Disney-Pixar animated movie "Up" is based on the main character Carl Fredricksen journey in his home equipped with balloons.

But can this happen for real? What kind of objects can you lift with helium balloons? How many balloons do you need?

In this kata you will create a class

Journey(object, crew, balloons)

so anyone can create objects like

var gravityFalls = new Journey(house, 2, 20622)

which means starting a new journey to Gravity Falls in a house with 2 members of crew (Carl and Russel).

But is this journey possible? Will the house float? Is it enough to have 20622 helium balloons (the number used by Pixar animators in liftoff scene)?

Your Journey class should have a public method isPossible() that returns true or false based on these rules:

1). Every object (dictionary in Python) passed to Journey will have its weight property like

var house = {"weight": 45000};

(we will use metric system in this kata, 45 000 kg is about 100 000 pounds).

2). Each member of the crew weighs 80 kg.

3). We use regular sized party balloons filled with helium. Each balloon lifts 4.8 grams + its own weight.

Can you lift a tiny 95 kg(~200 pound) push cart with 50 balloons like in one of the starting scenes of the movie?
 */
const letterToEllie = {'weight': 0.004536};
const house = {'weight': 45000};
const pushCart = {'weight': 95};
const lawnChair = {'weight': 5};

function Journey(object, crew, balloons) {
  this.object = object;
  this.crew = crew;
  this.balloons = balloons;
}

Journey.prototype.isPossible = function() {
  return this.balloons * 0.0048 >= this.object.weight + this.crew * 80;
}
const gravityFalls = new Journey(letterToEllie, 10, 1000622);

// class Journey {
//   constructor(object, crew, balloons){
//     this.weight = object.weight
//     this.crew = crew
//     this.balloons = balloons
//   }
  
//   isPossible(){
//     return 0.0048 * this.balloons >= this.crew * 80 + this.weight ? true : false
//   }
// }
console.log(gravityFalls.isPossible())