/*

* scope

1. Global Scope
2. Funtion Scope
3. Block Scope

* hoisting


* first class functions

*/

// 1. Global Scope

// const name = "Steven"

// let sayName = () => {
//   let name = "Maharaj"
//   return name
// }

// 2. Function Scope

// let greet = () => {
//   let greeting = "hello"

//   let sayHi = () => {
//       let something = "something"
//      console.log(greeting)
//   }
//   // console.log(something)
//   sayHi()
// }

// console.log(greeting)

// 3. Block Scope

// let dinner

// if(true){
//   dinner = "lasagna"
//   console.log(dinner)
// } else {
//   dinner = "tofu"
// }

// console.log(dinner)

// HOISTING

// variables declared with var are hoisted

// console.log(dog)

// var dog = "perky"

// function declarations are hoisted

// bark()

// function bark() {
//   console.log("woof woof")
// }


// FIRST CLASS FUNCTIONS

/* 

languages are said to treat functions as first class citizens 
when they treat functions like other objects meaning they can be
assigned to variables, they can be passed around as arguments,
or they can be assigned as properties insid objects.

*/

// function hello(){
//   console.log("howdy")
// }

// let sayHi = hello

// CALLBACK - passing a function in as an argument to another function
// create my own implementation of the map function

// let myMap = (array, callback) => {
//   let newArray = []

//   for (let i = 0; i < array.length; i++) {
//     const item = array[i]
//     const value = callback(item)
//     newArray.push(value)
//   }

//   return newArray
// }


// HIGHER ORDER FUNCTIONS
// functions that return other functions

function outerFn() {
  return function innerFn() {
    console.log('haha i am an inner function lol')
  }
}

// CLOSURES
// a closure is when a function is able to remember and access its
// scope even when that function is executing outside of its original scope

const multiplier = x => {
  let cheese = "cheddar"
  return y => {
    console.log(cheese)
    return x * y
  }
}

let doubler = multiplier(2)
let tripler = multiplier(3)

// can you do something like tripler(doubler(2))

