console.log("listening")

// when a user clicks on the welcome image I want to see a turquoise border

// √* get the image from the DOM
// √* add a listener to image node to listen for clicks
// √* when that node is clicked, we need to add a turquoise border to the image

const welcomeImage = document.querySelector('#welcome-image')

welcomeImage.addEventListener("click", function(e){
  // e.target will always be the node the event just happend to
  console.log("image click", e.target)
  const image = e.target
  image.style.border = "solid thick turquoise"
})

// when the mouse moves over the welcome image i want to see a picture of a baby sloth, and i want the picture to change back when the mouse moves off the image




