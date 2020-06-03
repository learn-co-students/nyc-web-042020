console.log("Events")


// -----------

//const 
// variables declared with const cannot be redefined or redeclared

// const steven = "Steven"
// steven = "Stephen"

// let michael = "Michael"
// michael = "Mike"



// -------------
// add goonies to the DOM

// √* create an li element for goonies
// √* set the innerHTML to movie details
// √* get the UL from the DOM
// √* append the LI the UL

const movieList = document.querySelector('#movie-list')

const goonies = {
  title: "The Goonies",
  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/519WqfZT2xL._AC_.jpg",
  score: 0,
  genre: "Adventure",
  year: 1985
}

function createMovieLi(movieObj){
  const movieLi = document.createElement('li')
  movieLi.className = 'movie'
  
  movieLi.innerHTML = `
    <h3>${movieObj.title}</h3>
    <img alt="" src="${movieObj.imageUrl}" />
    <h4>Year: ${movieObj.year}</h4>
    <h4>Genre: ${movieObj.genre}</h4>
    <h4>Score: <span>${movieObj.score}</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button>Down Vote</button>
    <button class="delete">&times;</button>
  `

  return movieLi
}

const gooniesLi = createMovieLi(goonies)
movieList.append(gooniesLi)



// -----------

// add click listeners to the up-vote buttons so that the score increments by 1 when the button is clicked

// √get all the up-vote buttons from the DOM
// √add a click listener to each one
// √modify the DOM to increment the score

// const upVoteButtons = document.getElementsByClassName('up-vote')
// const upVoteArray = Array.from(upVoteButtons)

// upVoteArray.forEach(function(button){
//   button.addEventListener("click", function(e){
//     // √get the score span from the DOM
//     // √modify its textContent to display the new score
    // const parentLi = e.target.parentNode
    // const scoreSpan = parentLi.querySelector('span')
    // scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
//   })
// })

document.addEventListener('click', function(e){
  if(e.target.className === 'up-vote'){
    console.log("voting up")
    const parentLi = e.target.parentNode
    const scoreSpan = parentLi.querySelector('span')
    
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1

  } else if(e.target.className === "delete"){
    console.log('deleting')
    e.target.parentNode.remove()
  }
})
