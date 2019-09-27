'use strict'
let arrayOfUsers;


window.onload = function() {
  getUsers()
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(user1 => arrayOfUsers = user1)
}

const consoleUsers = () => {
  console.log(arrayOfUsers)
  console.log(arrayOfUsers.results)
}

const displayUsers = () => {
  const allUsers = document.getElementById('address-book')
  const userImage = document.getElementById('div')
  const userButton = document.getElementById('button')
  for (let i = 0; i < arrayOfUsers.results.length; i++){
    const userList = document.createElement('li')
    const userImg = document.createElement('img')
    const userBtn = document.createElement('button')
    const userField = document.createTextNode(`Name:${arrayOfUsers.results[i].name.first} ${arrayOfUsers.results[i].name.last}`)
    userImg.src = arrayOfUsers.results[i].picture.large;
    userImage.append(userImg)
    userList.appendChild(userField) 
    allUsers.append(userList) 
    userButton.append(userBtn)
   }
}


