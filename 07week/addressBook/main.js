'use strict'
let arrayOfUsers;

window.onload = function() {
  getUsers()
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(user1 => arrayOfUsers = user1)
  console.log(typeof arrayOfUsers)
}


// arrayofusers is not an ARRAY

const displayUsers = () => {
  const allUsers = document.getElementById('address-book')
  arrayOfUsers.map((user1) => {
    const userList = document.createElement('li')
    const userText = document.createTextNode(`Name:${user1}`)
    userList.appendChild(userText)
    allUsers.append(userList)
  })
}

const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
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


