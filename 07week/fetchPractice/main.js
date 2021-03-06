let arrayOfPosts;
let arrayOfComments;
let arrayOfUsers;
let arrayOf5Posts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()
  getComments()
  getUsers()
  get5Posts()
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

const getComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(comments => arrayOfComments = comments)
}

const getUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => arrayOfUsers = users)
}

const get5Posts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts/5')
  .then(res => res.json())
  .then(fivePosts => arrayOf5Posts = fivePosts)
}

// these functions log the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

const console5Posts = () => {
  console.log(arrayOf5Posts)
}

const consoleComments = () => {
  console.log(arrayOfComments)
}

const consoleUsers = () => {
  console.log(arrayOfUsers)
}


// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!

const displayComments = () => {
  const allComments = document.getElementById('all-comments')
  arrayOfComments.map((comments, index) => {
    const commentList = document.createElement('li')
    const commentText = document.createTextNode(`Index # ${index}: - Name:${comments.name} - Comments: ${comments.body}`)
    commentList.appendChild(commentText)
    allComments.append(commentList)
  })
}

const displayUsers = () => {
  const allUsers = document.getElementById('all-users')
  arrayOfUsers.map((users, index) => {
    const userList = document.createElement('li')
    const userText = document.createTextNode(`Index: ${index} - Name: ${users.name}`)
    userList.appendChild(userText)
    allUsers.append(userList)
  })
}

const display5Posts = () => {
  const f5vePosts = document.getElementById('5-posts')
  arrayOf5Posts.map((fivePosts, index) => {
    const fiveList = document.createElement('li')
    const fiveText = document.createTextNode(`#${index}, Title: ${fivePosts}:`)
    fiveList.appendChild(fiveText)
    f5vePosts.append(fiveList)
  })
}
