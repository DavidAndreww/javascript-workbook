'use strict'
let testArray;
let arrayOfUsers;

window.onload = function() {
  getUser1()
  getUsers()
}

const getUser1 = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(user1 => testArray = user1)
}


const logUser = () => {
  console.log(testArray)
}




















const getUsers = () => {
Promise.all([
  fetch('https://randomuser.me/api/'),
  fetch('https://randomuser.me/api/'),
  fetch('https://randomuser.me/api/'),
  fetch('https://randomuser.me/api/')
])
.then(res => res.json())
.then(users => arrayOfUsers.push(users))
}

console.log(arrayOfUsers)


// const displayUsers = () => {
//   const allUsers = document.getElementById('address-book')
//   arrayOfUsers.map((users, index) => {
//     const userList = document.createElement('li')
//     const userText = document.createTextNode(`Name:${users.name} <br> ${users.picture}`)
//     userList.appendChild(userText)
//     allPosts.append(userList)
//   })
// }

