/*

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.

*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const baseUrl = "https://randomuser.me/api/"

  fetch(baseUrl)
  .then(response => response.json())
  .then(data => {
    const user = data.results[0]
    console.log(user)

    setName(user)
    setEmail(user)
    setStreet(user)
  })

  const setName = user => {
    const firstName = user.name.first
    const lastName = user.name.last
    const title = user.name.title
    const fullname = `${title} ${firstName} ${lastName}`

    document.querySelector('#fullname').textContent = fullname
  }

  const setEmail = user => {
    const email = user.email
    
    document.querySelector('#email').textContent = email
  }

  const setStreet = user => {
    const streetNumber = user.location.street.number
    const streetName = user.location.street.name

    document.querySelector('#street').textContent = `${streetNumber} ${streetName}`

  }
});
