'use strict'

// creates an array to store JSON file
let arrayOfUsers;

// action to take when window loads - call the getUsers() function
window.onload = () => {
  getUsers()
  // displayUsers() // why doesn't this load userlist without butto click?

}

// defines a function that fetches API, stores as a JSON file, and then gives its value to arrayOfUsers
const getUsers = () => {
  fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(user1 => arrayOfUsers = user1)
}

// generates random number to display user
let random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function that displays random user on click
const displayUsers = () => {
  // random number
  let randomIndex = random(0, 100)
  // define the divs that holds the content
  const backGround = document.getElementById('background')
  const nameDiv = document.getElementById('userInfo');
  // define the <p>, <img>, <button> and textNode
  const name_Para = document.createElement('h3')
  const imgElem = document.createElement('img')
  const buttonElem = document.createElement('button')
  let nameTextNode = document.createTextNode(`${arrayOfUsers.results[randomIndex].name.first} ${arrayOfUsers.results[randomIndex].name.last}`)
  // textNode is put inside of the <p>, and <img> src attribute is defined
  name_Para.appendChild(nameTextNode)
  imgElem.src = arrayOfUsers.results[randomIndex].picture.large;
  // appends name, image, and button to the userInfo div, which is appended to the backGround display
  backGround.append(nameDiv)
  nameDiv.append(name_Para)
  nameDiv.append(imgElem)
  nameDiv.append(buttonElem)
  buttonElem.addEventListener("click", expandInfo())
}


// Why won't this work for main display button?
//document.getElementById("displayButton").addEventListener("click", displayUsers())

// Will this work?
// buttonElem.addEventListener("click", expandInfo())

// Or maybe this will work
// document.getElementsByTagName("button").setAttribute("class", "expandClass")


// const expandInfo = () => {
//   // define dlement that holds expanded info
//   const expandedLocationDiv = document.getElementById('expandLocation');
//   const expandedEmailDiv = document.getElementById('expandEmail');
//   const expandedAgeDiv = document.getElementById('expandAge');
//   // for each item in array, create <p> and textNode
//   for (let j = 0; j < arrayOfUsers.results.length; j++) {
//     // create divs for textNodes
//     let expandedLocation = document.createElement('div')
//     let expandedEmail = document.createElement('div')
//     let expandedAge = document.createElement('div')
//     // create textNodes
//     let expandedLocationNode = document.createTextNode(`Location:${arrayOfUsers.results[j].location.city}`)
//     let expandedEmailNode = document.createTextNode(`Email ${arrayOfUsers.results[j].email}`)
//     let expandedAgeNode = document.createTextNode(`Age ${arrayOfUsers.results[j].dob.age}`)
//     // puts textNode inside of the <p>
//     expandedLocation.appendChild(expandedLocationNode)
//     expandedEmail.appendChild(expandedEmailNode)
//     expandedAge.appendChild(expandedAgeNode)
//     // puts <p> inside of expandInfo div
//     expandedLocationDiv.append(expandedLocation)
//     expandedEmailDiv.append(expandedEmail)
//     expandedAgeDiv.append(expandedAge)
//   }
// }
// ------------------WORKING CODE ABOVE-----------------//




// Will this work?
// buttonElem.addEventListener("click", expandInfo())

// Or maybe this will work
// document.getElementsByTagName("button").setAttribute("class", "expandClass")
// document.getElementsByClassName("expandClass").addEventListener("click", expandInfo())



const expandInfo = () => {
  // define dlement that holds expanded info
  let randomIndex = random(0, 100) // need to get the random index from getUsers(function)
  // define the divs that holds the content
  const backGround = document.getElementById('background')
  const nameDiv = document.getElementById('userInfo');
  // create divs for textNodes
  let expandedLocation = document.createElement('p')
  let expandedEmail = document.createElement('p')
  let expandedAge = document.createElement('p')
  let expandedPhone = document.createElement('p')
  // create textNodes
  let expandedLocationNode = document.createTextNode(`Location: ${arrayOfUsers.results[randomIndex].location.city}`)
  let expandedEmailNode = document.createTextNode(`Email: ${arrayOfUsers.results[randomIndex].email}`)
  let expandedAgeNode = document.createTextNode(`Age: ${arrayOfUsers.results[randomIndex].dob.age}`)
  let expandedPhoneNode = document.createTextNode(`Phone: ${arrayOfUsers.results[randomIndex].cell}`)
  // puts textNode inside of the <p>
  expandedLocation.appendChild(expandedLocationNode)
  expandedEmail.appendChild(expandedEmailNode)
  expandedAge.appendChild(expandedAgeNode)
  expandedPhone.appendChild(expandedPhoneNode)
  // puts <p> inside of expandInfo div
  nameDiv.append(expandedAge)
  nameDiv.append(expandedPhone)
  nameDiv.append(expandedLocation)
  nameDiv.append(expandedEmail)
  backGround.append(nameDiv)
}








// ---------------------- Promises?!?!-----------------------------
// let userObj1;
// let userObj2;
// let userObj3;
// let userObj4;

// window.onload = () => {
//   getUsers()
// }

// const getUsers = (url) => {
//   return fetch(url)
//     .then(res => res.json())
// }

// getUsers('https://randomuser.me/api/')
//   .then(userData1 => userObj1 = userData1)
// getUsers('https://randomuser.me/api/')
//   .then(userData2 => UserObj2 = userData2)
// getUsers('https://randomuser.me/api/')
//   .then(userData3 => UserObj3 = userData3)
// getUsers('https://randomuser.me/api/')
//   .then(userData4 => UserObj4 = userData4)
