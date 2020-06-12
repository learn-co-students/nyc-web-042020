/*

To answer the following questions please spin up the json-server database in this directory.
 - `json-server -w db.json`

You can test your code in the browser console. 
Try to answer these questions without looking at any other code.


1. Following RESTful conventions, what's the HTTP method and path used to create a new resource in the database (e.g., a movie)?

- POST to `/movies`

2. What do POST, PATCH, and DELETE fetch requests require that a GET fetch request does not?

- POST, PATCH, and DELETE requests require a configuration object as the second argument passed to fetch

3. Why do we not need to pass the id as a property of the body when we make a DELETE fetch request?

- using dynamic routing, the id is pulled from the url (e.g., /movies/12 would add id: 12 to the params hash)

4. Write the fetch request to get all the movies from the db and log the response to the console.

fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(movies => {
  console.log(movies)
})

5. Write the fetch request to change the title of "Jaws" to "Big Fish, Big Teeth".

const url = "http://localhost:3000/movies"
const id = 1

fetch(`${url}/${id}`,{
  method: "PATCH",
  headers: {
    "content-type": "application/json",
    "accept": "application/json"
  },
  body: JSON.stringify({ title: "Big Fish, Big Teeth", genre: "Family" })
})
.then(response => response.json())
.then(console.log)

6. What data does json-server return when we make a POST request to create a new movie? What does it return when we make a DELETE request to remove a movie? How can we test this?

- POST returns an object representing the record we just made in the movies table, DELETE returns an emptpy object
- we can test this by console.logging the response from each request

fetch(`${url}/${id}`, {
  method: "DELETE"
})
.then(response => response.json())
.then(console.log)

*/

