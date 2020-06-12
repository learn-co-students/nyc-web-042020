/* 
1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - genre
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Genre: Science Fiction, Score: 9"
*/  

class Movie{
  static all = []
  
  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.year = movieObj.year
    this.imageUrl = movieObj.imageUrl
    this.genre = movieObj.genre
    this.score = movieObj.score
    
    this.node = this.createLi()

    Movie.all.push(this)
  }

  prettyPrint(){
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}, Score: ${this.score}`
  }

  createLi(){
    const movieLi = document.createElement('li')
    movieLi.className = 'movie'
    movieLi.dataset.beef = "cow"
    movieLi.dataset.id = this.id

    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt="" src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button data-purpose="down-vote">Down Vote</button>
      <button class="delete">&times;</button>
    `
  
    return movieLi
  }
  
  render(list){
    list.append(this.node)
  }

  remove(){
    this.node.remove()
  }

  static renderMovies(list){
    this.all.forEach(movie => {
      movie.render(list)
    })
  }

  static find(id){
    return this.all.find(movie => movie.id === id)
  }
}


// const movie = new Movie('Top Gun', '1989', 'topgun.com', 'Action', '8')
// console.log(movie)

// movie.prettyPrint()