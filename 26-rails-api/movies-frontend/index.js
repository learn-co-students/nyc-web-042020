console.log("Let's try and make fetch happen today!")

document.addEventListener("DOMContentLoaded", function(e){

  const baseUrl = "http://localhost:3000/api/v1/movies"
  const movieList = document.querySelector('#movie-list')
  
  function createMovieLi(movieObj){
    const movieLi = document.createElement('li')
    movieLi.className = 'movie'
    movieLi.dataset.beef = "cow"
    movieLi.dataset.id = movieObj.id

    
    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt="" src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button data-purpose="down-vote">Down Vote</button>
      <button class="delete">&times;</button>
    `
  
    return movieLi
  }
  
  function renderMovies(movies) {
    movies.forEach(function(movieObj){
      renderMovie(movieObj)
    })
  }

  function renderMovie(movieObj){
    const movieLi = createMovieLi(movieObj)
    movieList.append(movieLi)
  }
  
  let getMovies = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(movies => {
      renderMovies(movies)
    })
  }
  
  document.addEventListener('click', function(e){
    if(e.target.className === 'up-vote'){

      // pessimistic rendering beause we're going to wait to hear
      // back from the DB before updating the DOM

      const parentLi = e.target.parentNode
      const id = parentLi.dataset.id
      const scoreSpan = parentLi.querySelector('span')
      const score = parseInt(scoreSpan.textContent) + 1

      fetch(`${baseUrl}/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({ score: score })
      })
      .then(response => response.json())
      .then(movie => {
        scoreSpan.textContent = movie.score
      })


      
  
    } else if(e.target.className === "delete"){
      const parentLi = e.target.parentNode
      const id = parentLi.dataset.id 

      fetch(`${baseUrl}/${id}`, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
        parentLi.remove()
      })


    } else if(e.target.id === 'show-form'){
      const button = e.target
      const movieForm = document.createElement('form')

      movieForm.innerHTML = `
        <label>Title: </label>
        <input type="text" name="title">
        <br>
        <label>Year: </label>
        <input type="text" name="year">
        <br>
        <label>Genre: </label>
        <input type="text" name="genre">
        <br>
        <label>Image URL: </label>
        <input type="text" name="imageUrl">
        <br>
        <input type="submit" value="Add Movie">
      `

      button.insertAdjacentElement('afterend', movieForm)
      button.textContent = 'Hide Form'
      button.id = 'hide-form'

    } else if(e.target.id === 'hide-form'){
      const button = e.target
      const movieForm = document.querySelector('form')

      movieForm.remove()
      button.textContent = 'Show Form'
      button.id = 'show-form'
    } 
  })
  
  document.addEventListener("submit", function(e){
    e.preventDefault()

    // this is optimistic rendering because we're adding the
    // movie to the DOM before hearing back from the DB

    const movieForm = e.target

    const title = movieForm.title.value
    const year = movieForm.year.value
    const genre = movieForm.genre.value
    const imageUrl = movieForm.imageUrl.value

    const movieObj = {
      title: title,
      year: year,
      genre: genre,
      imageUrl: imageUrl,
      score: 0
    }

    renderMovie(movieObj)

    // create a movie record in the db

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(movieObj)
    }) // end of fetch call
    .then(response => response.json())
    .then(console.log)
  })
  
  getMovies()  
})

// Load movies from DB
// √1. get the movies
// √2. render the movies


// Add new movie to DB
// √1. get movie info from form
// √2. submit that info to the DB
// √3. render that movie to the DOM


// Update score on movie record in DB
// 1. make a fetch request (PATCH) to update the record on up-vote-click