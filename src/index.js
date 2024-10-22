// const foodImages = document.querySelector(".detail-image")
// const ramenList = document.getElementById("#ramen-menu")
// const ramenDetails = document.getElementById("#ramen-detail")

// const foodTitle = document.createElement("h2")
// const foodDesc = document.createElement("p")

console.log(
  'hiiiiiiiii'
);


async function submitNewRamen(newRamen) {
  console.log(newRamen)
}

addRamen()

async function ramenList() {
  const response = await fetch("http://localhost:3000/ramens")
  const ramens = await response.json()
  console.log(ramens)

  const ramenMenu = document.querySelector("#ramen-menu")
  const ramenDiv = document.createElement("div")
  const ramenImg = document.createElement("img")
  ramenDiv.src = ramens.image     // SET THE IMAGE SOURCE
  ramenDiv.appendChild(ramenImg)

  const ramenName = document.createElement("h3");
  ramenName.textContent = ramens.name; // Display the name
  ramenDiv.appendChild(ramenName);

  const ramenRest = document.createElement("p");
  ramenRest.textContent = ramens.restaurant; // Display the restaurant
  ramenDiv.appendChild(ramenRest);

  const ramenRating = document.createElement("p");
  ramenRating.textContent = `Rating: ${ramens.rating}`; // Display the rating
  ramenDiv.appendChild(ramenRating);

  const ramenComment = document.createElement("p");
  ramenComment.textContent = ramens.comment; // Display the comment
  ramenDiv.appendChild(ramenComment);

  ramenMenu.append(ramenDiv)
  console.log("hi")
}

function addRamen() {
  const newName = document.getElementById("new-name").value
  const newRest = document.getElementById("new-restaurant").value
  const newImage = document.getElementById("new-image").value
  const newRating = document.getElementById("new-rating").value
  const newComment = document.getElementById("new-comment").value
  const submitButton = document.getElementById("submit-button")

  const newRamen = {
      "name": newName,
      "restaurant": newRest,
      "image": newImage,
      "rating": newRating,
      "comment": newComment
  }
  submitButton.addEventListener("click", () => submitNewRamen(newRamen))
  console.log(newComment) 
}

ramenList()


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
// newRamen.forEach(ramen => {
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
//   main,
// };
