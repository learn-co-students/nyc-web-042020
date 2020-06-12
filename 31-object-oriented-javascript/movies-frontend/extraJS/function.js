// function declaration
function sayHi(){
  console.log("hi")
}

//function expression
let sayHello = function(){
  console.log("hello")
}


//fat arrow syntax
let sayHowdy = () => {
  console.log("Howdy")
}

sayHi()
sayHello()
sayHowdy()

let hiVar = sayHi
let helloVar = sayHello
let howdyVar = sayHowdy
