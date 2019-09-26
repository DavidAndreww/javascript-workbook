'use strict'
let arrayOfUsers = [];
console.log(typeof arrayOfUsers)
window.onload = function() {
  getUsers()
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(user1 => arrayOfUsers = user1)
}

// let newPerson = Object.values(arrayOfUSers)

// arrayofusers is not an ARRAY

const displayUsers = () => {
  const allUsers = document.getElementById('address-book')
  arrayOfUsers.map((user1) => {
    const userList = document.createElement('li')
    const userText = document.createTextNode(`Name:${user1.name} - Picture: ${user1.picture}`)
    userList.appendChild(userText)
    allUsers.append(userList)
  })
}







// const getUsers = () => {
// Promise.all([
//   fetch('https://randomuser.me/api/'),
//   fetch('https://randomuser.me/api/'),
//   fetch('https://randomuser.me/api/'),
//   fetch('https://randomuser.me/api/')
// ])
// .then(res => res.json())
// .then(users => arrayOfUsers.push(users))
// }

// console.log(arrayOfUsers)


