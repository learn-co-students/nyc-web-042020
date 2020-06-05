console.log("Let's try and make fetch happen today!")



document.addEventListener("DOMContentLoaded", function(e){
  console.log("DOM DOM DOM")

  const movies = [
    {
      title: 'The Goonies',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
      year: 1985,
      genre: 'Adventure',
      score: 100
    },
    { 
      title: 'Free Willy',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
      year: 1993,
      genre: 'Family',
      score: 0  
    },
    { 
      title: 'Top Gun',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
      year: 1986,
      genre: 'Adventure',
      score: 0  
    },
    { 
      title: 'Mean Girls',
      imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
      year: 2004,
      genre: 'Comedy',
      score: 0  
    },
    { 
      title: 'Parasite',
      imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
      year: 2019,
      genre: 'Horror',
      score: 0  
    },
    {
      title: "What About Bob?",
      year: 1991,
      genre: 'Comedy',
      score: 0,
      imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: 'Science Fiction',
      score: 0,
      imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
    },
    {
      title: "Jaws",
      year: 1984,
      genre: 'Horror',
      score: 0,
      imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
    },
  ]
  const movieList = document.querySelector('#movie-list')
  
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
  
  function renderMovies(movies) {
    movies.forEach(function(movieObj){
      renderMovie(movieObj)
    })
  }

  function renderMovie(movieObj){
    const movieLi = createMovieLi(movieObj)
    movieList.append(movieLi)
  }
  
  document.addEventListener('click', function(e){
    if(e.target.className === 'up-vote'){
      console.log("voting up")
      const parentLi = e.target.parentNode
      const scoreSpan = parentLi.querySelector('span')
      
      scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
  
    } else if(e.target.className === "delete"){
      console.log('deleting')
      e.target.parentNode.remove()
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
  })
  
  renderMovies(movies)   
})
