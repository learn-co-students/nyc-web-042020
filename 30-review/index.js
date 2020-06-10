console.log('review')

const button = document.getElementsByClassName('awesome')[0]
const ul = document.querySelector('#list')
const things = ['apple', 'aardvark', 'arrow', 'zebra', 'tv', 'desk', 'chair', 'can']

button.addEventListener("click", e => {
  if(e.target.textContent === "-"){
    e.target.textContent = "A"
    let newThings = things.filter(thing => {
      return thing[0] === 'a'
    })


    ul.innerHTML = ''
    newThings.forEach(thing => {
      let li = document.createElement('li')
      li.textContent = thing
      ul.append(li)
    })
  } else if(e.target.textContent === 'A') {
    e.target.textContent = "C"

    let newThings = things.filter(thing => {
      return thing[0] === 'c'
    })

    ul.innerHTML = ''
    newThings.forEach(thing => {
      let li = document.createElement('li')
      li.textContent = thing
      ul.append(li)
    })
  }
})



things.forEach(thing => {
  let li = document.createElement('li')
  li.textContent = thing
  ul.append(li)
})

document.querySelector('ol').addEventListener("click", e => {
  let li = e.target
  console.log(li.dataset)
  li.dataset.favColor = "turquoise"
  li.dataset.purpose = "Joshua's question"
  console.log(li.dataset)
})


// searching the DOM by dataset property
let cowSound = "moo"
document.querySelector(`[data-beef="${cowSound}"]`)

