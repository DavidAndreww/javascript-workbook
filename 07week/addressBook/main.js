'use strict'
let arrayOfUsers = null;


window.onload = function() {
  getUsers()
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(user1 => arrayOfUsers = user1)
}

const consoleUsers = () => {
  console.log(arrayOfUsers.results[1].name.first)
  console.log(arrayOfUsers.results[1].name.last)
  console.log(arrayOfUsers.results[1].picture.large)
}

const displayUsers = () => {
  const allUsers = document.getElementById('address-book')
  for (let i = 0; i < arrayOfUsers.results.length; i++){
    const userList = document.createElement('li')
    const userField = document.createTextNode(`Name:${arrayOfUsers.results[i].name.first} ${arrayOfUsers.results[1].name.last} - Picture:${arrayOfUsers.results[i].picture.large}`)
    userList.appendChild(userField) // check this, could be wrong
    allUsers.append(userList) // check this, could be wrong
   }
  
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


