console.log("Let's try and make fetch happen today!")

document.addEventListener("DOMContentLoaded", function(e){

  const baseUrl = "http://localhost:3000/api/v1/movies"
  const movieList = document.querySelector('#movie-list')
  
  let getMovies = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(movieCollection => {
      movieCollection.map(movieObj => {
        return new Movie(movieObj)
      })

      Movie.renderMovies(movieList)
    })
  }
  
  document.addEventListener('click', function(e){
    if(e.target.className === 'up-vote'){

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
      .then(movieObj => {
        const movie = Movie.find(movieObj.id)
        movie.remove()
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

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(movieObj)
    })
    .then(response => response.json())
    .then(console.log)
  })
  
  getMovies()  
})
