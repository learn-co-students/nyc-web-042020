console.log("this is so much fun!")

/************ Function called on an Object ***************/

// `this` references the object executing the current function

const steven = {
  name: "Steven",
  sayName: function(){
    console.log(`Hi, my name is ${this.name}`)
  }
}

steven.sayName() // `this` is going to be the steven object


/************ Simple Function Call ***********************/
// in a simple function call, `this` will be the window object

this.name = "Winslow"

function sayHi() {
  console.log(`Howdy! My name is ${this.name}`)
}

function returnThis(){
  return this
}
/************ Bind/Call/Apply ****************************/

// thisArg is an object we want to be used as the `this` object in a given context

function sayHiNameLocation(location, time) {
  console.log(`Hey there! My name is ${this.name}. I'm in ${location} and it's ${time}`)
}

// `call` and `apply` will immediately invoke whatever function they're called on with the `thisArg` and parameters passed in

// sayHiNameLocation.call(steven, "LIC", "11:17")

// sayHiNameLocation.apply(steven, ["LIC", "11:17"])

// `bind` returns a bound function that has the original function inside of it
// the bound function won't be immediately invoked
// common use case is passing bound functions as callbacks to other functions

// const boundHi = sayHiNameLocation.bind(steven, "LIC", "11:22")


/************ Function Called with New Keyword ***********/


class Movie {
  constructor(title, year, genre){
    this.title = title
    this.year = year
    this.genre = genre
  }
}

const matrix = new Movie("matrix", "1999", "sci-fi")


/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`, they get it from the parent context
// cannot use `call`, `apply`, or `bind` with arrow function

let perky = {
  name: "Perky",
  whatIsThis: this,
  traditionalThis: function() { return this },
  arrowThis: () => this,
  sayName: function() { return this.name },
  sayNameArrow: () => this.name
}



















// let neikko = {
//   node: document.querySelector('#this'),
//   name: "Neikko",
//   sayThis: function(){ console.log("This: ", this)},
//   initialize: function(){
//       this.node.addEventListener("click", this.sayThis.bind(this))
//   }
// }

// dog.initialize()

// let perky = {
//   name: "Perky",
//   whatIsThis: this,
//   traditionalThis: function() { return this },
//   arrowThis: () => this
// }