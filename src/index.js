// const foodImages = document.querySelector(".detail-image")
// const ramenList = document.getElementById("#ramen-menu")
// const ramenDetails = document.getElementById("#ramen-detail")

// const foodTitle = document.createElement("h2")
// const foodDesc = document.createElement("p")


// async function submitNewRamen(newRamen) {
//   console.log(newRamen)
// }

addRamen()      

async function ramenList() {
  const response = await fetch("http://localhost:3000/ramens")
  const ramens = await response.json()
  console.log(ramens)

  ramens.forEach(ramen => {           // THIS RAMEN IS A FILLER WORD
    const ramenMenu = document.querySelector("#ramen-menu")
    const ramenImg = document.createElement("img")
    ramenImg.src = ramen.image     // SET THE IMAGE SOURCE
    
    ramenMenu.appendChild(ramenImg) // APPEND IMAGE TO RAMEN MENU (RAMEN-MENU DIV)

    ramenImg.addEventListener("click", () => handleClickOnRamen(ramen))   // EVENT LISTENER TO HANDLE CLICKING ON RAMEN IMG
  })
}

function handleClickOnRamen(ramen) {    // FUNCTION TO DISPLAY RAMEN DETAILS WHEN IMG IS CLICKED
  console.log(ramen)    // for debugging
  const mainImg = document.querySelector(".detail-image")
  mainImg.src = ramen.image

  const ramenName = document.querySelector(".name")
  ramenName.textContent = ramen.name

  const ramenRest = document.querySelector(".restaurant")
  ramenRest.textContent = ramen.restaurant

  const ratingDisplay = document.querySelector("#rating-display")
  ratingDisplay.textContent = ramen.rating

  const commentDisplay = document.querySelector("#comment-display")
  commentDisplay.textContent = ramen.comment
}

function addRamen() {   // FUNCTION TO HANDLE NEW RAMEN SUBMISSION
  const submitButton = document.getElementById("submit-button")

  submitButton.addEventListener("click", () => {   // COLLECT THE INPUTS VALUES WHEN SUBMIT IS CLICKED
    const newName = document.getElementById("new-name").value
    const newRest = document.getElementById("new-restaurant").value
    const newImage = document.getElementById("new-image").value
    const newRating = document.getElementById("new-rating").value
    const newComment = document.getElementById("new-comment").value
  
    const newRamen = {
      "name": newName,
      "restaurant": newRest,
      "image": newImage,
      "rating": newRating,
      "comment": newComment,
  }
  
  submitNewRamen(newRamen)    // CALL THE FUNCTION TO HANDLE NEW RAMEN
})
}
async function submitNewRamen(newRamen) {
  console.log(newRamen)   // DEBUGGING NEW RAMEN DATA

  const response = await fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRamen),
  }
)}


ramenList()   // INITALIZE RAMEN LIST WHEN PAGE LOADS

addRamen()    // INITALIZE ADDRAMEN FUNCTION FOR NEW RAMEN INPUT


  // const ramenDiv = document.createElement("div")

  // const ramenName = document.createElement("h3");
  // ramenName.textContent = ramens.name; // Display the name
  // ramenDiv.appendChild(ramenName);

  // const ramenRest = document.createElement("p");
  // ramenRest.textContent = ramens.restaurant; // Display the restaurant
  // ramenDiv.appendChild(ramenRest);

  // const ramenRating = document.createElement("p");
  // ramenRating.textContent = `Rating: ${ramens.rating}`; // Display the rating
  // ramenDiv.appendChild(ramenRating);

  // const ramenComment = document.createElement("p");
  // ramenComment.textContent = ramens.comment; // Display the comment
  // ramenDiv.appendChild(ramenComment);

  // ramenMenu.append(ramenDiv)


// function displayRamen() {
  // const response = await fetch("http://localhost:3000/ramens")
  // const ramens = await response.json()
  
//   fetch("http://localhost:3000/ramens/100", {
//       method: "POST",
//       headers:{"Content-Type" : 'application/json', 'Accept': 'application/json'},
//       body: JSON.stringify({name: 'ShoyuRamen1', restaurant: 'Nonono1', image: 'test', rating: 71, comment: 'Delish' })
//   })
// }

// addRamen()
// ramens.forEach(ramen => {
//   const li = document.createElement("li")
//   li.textContent = ramen.content
//   li.addEventListener("click", ())
// })

// function newRamen() {
//   fetch("http://localhost:3000/ramens/:id") {
//     method: "PATCH"
//     headers: {"Content-Type": "application./json"}
//   }
// }

// function displayRamen()


// document.getElementById("#submit-button").addEventListener("click". addRamen)

// function addRamenToList(ramen) {
//   const ramenName = document.getElementById("div")
//   ramenName.className = 'h2'
//   ramenName.textContent = "name"
// }

///////////////////////////////

// //// display ramen in list

// function submitNewRamen(event) {
//   event.preventDefault()
// }

// // Callbacks
// const handleClick = (ramen) => {
//   // Add code
// };

// const addSubmitListener = () => {
//   // Add code
// }

// const displayRamens = () => {
//   // Add code
// };

// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main
