'use strict';


// loads instructional text to DOM on page load
window.onload = () => {
  const div = document.querySelector('#displayBoard')
  const h4Load = document.createElement('h4')
  h4Load.setAttribute('class', 'loading')
  h4Load.innerHTML = `Generate two pokemon <br> and <br> FIGHT!`
  div.appendChild(h4Load)
}

// sets an array to have pokemon pushed to
let pokemon = []

// assigned as an on-click function that generates data for a random pokemon
let getPokemonL = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150)}`)
    .then(res => res.json())
    .then(info => {
      pokemon.push(info)
    })
  const displayBoard = document.querySelector('#displayBoard')
  displayBoard.removeChild(document.querySelector('.loading'))
}

// assigned as an on-click function that generates data for a random pokemon
let getPokemonR = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150)}`)
    .then(res => res.json())
    .then(info => {
      pokemon.push(info)
    })
}

// assigned as an on-click function that:
// 1: loads DOM with pokemon
// 2: compares damage output and signals the winner
const battle = () => {
  // generates random numbers to randomize left pokemon selection, move choice and damage output
  let randomLeft = Math.floor(Math.random() * 20)
  let randomLeft1 = Math.floor(Math.random() * 3)
  // create elements to display data for left pokemon
  const leftDiv = document.querySelector('#pokeLeft')
  const leftName = document.createElement('h6')
  leftName.innerHTML = `${pokemon[0].name}`
  const imgL = document.createElement('img')
  imgL.src = `${pokemon[0].sprites.front_default}`
  const textHolderL = document.createElement('p')
  const txtNodeL = document.createTextNode(`${pokemon[0].moves[randomLeft].move.name}: ${pokemon[0].stats[randomLeft1].base_stat} damage!`)
  // append elements to DOM
  leftDiv.appendChild(leftName)
  leftDiv.appendChild(imgL)
  textHolderL.appendChild(txtNodeL)
  leftDiv.appendChild(textHolderL)


  // generates random numbers to randomize right pokemon selection, move choice and damage output
  let randomRight = Math.floor(Math.random() * 20)
  let randomRight1 = Math.floor(Math.random() * 3)
  // create elements to hold data on rigth side
  const rightDiv = document.querySelector('#pokeRight')
  const rightName = document.createElement('h6')
  rightName.innerHTML = `${pokemon[1].name}`
  const imgR = document.createElement('img')
  imgR.src = `${pokemon[1].sprites.front_default}`
  const textHolderR = document.createElement('p')
  const txtNodeR = document.createTextNode(`${pokemon[1].moves[randomRight].move.name}: ${pokemon[1].stats[randomRight1].base_stat} damage!`)
  // append elements to DOM
  rightDiv.appendChild(rightName)
  rightDiv.appendChild(imgR)
  textHolderR.appendChild(txtNodeR)
  rightDiv.appendChild(textHolderR)

  // function that displays text if left pokemon wins
  const leftWin = () => {
    // create elements to hold data for left win
    const div = document.querySelector('#displayBoard')
    const h1 = document.createElement('h1')
    h1.innerHTML = `${pokemon[0].name}`
    const h4 = document.createElement('h4')
    h4.innerHTML = 'WINS!'
    const button = document.createElement('button')
    button.innerHTML = 'Play Again?'
    // button that when clicked, refreshes browser
    button.addEventListener('click', function () {
      location.reload(true)
    })
    // append elements to the DOM
    div.appendChild(h1)
    div.appendChild(h4)
    div.appendChild(button)
  }

  // function that displays text if right pokemon wins
  const rightWin = () => {
    // create elements to hold data for right win
    const div = document.querySelector('#displayBoard')
    const h1 = document.createElement('h1')
    h1.innerHTML = `${pokemon[1].name}`
    const h4 = document.createElement('h4')
    h4.innerHTML = 'WINS!'
    const button = document.createElement('button')
    button.innerHTML = 'Play Again?'
    // button that when clicked, refreshes browser
    button.addEventListener('click', function () {
      location.reload(true)
    })
    // append elements to the DOM
    div.appendChild(h1)
    div.appendChild(h4)
    div.appendChild(button)
  }

  // function that displays text if game is a draw
  const draw = () => {
    // create elements to hold data for draw
    const div = document.querySelector('#displayBoard')
    const h1 = document.createElement('h1')
    h1.innerHTML = `DRAW!`
    // creates button with function of refreshing browser
    const button = document.createElement('button')
    button.innerHTML = 'Play Again?'
    button.addEventListener('click', function () {
      location.reload(true)
    })
    // appends elements to DOM
    div.appendChild(h1)
    div.appendChild(button)
  }

  // assigns damage counts to variables to be used in the conditional statement below
  let leftDmg = `${pokemon[0].stats[randomLeft1].base_stat}`
  let rightDmg = `${pokemon[1].stats[randomRight1].base_stat}`

  //  conditional that determines which win function to run
  if (leftDmg > rightDmg) {
    leftWin()
  } else if (leftDmg < rightDmg) {
    rightWin()
  } else if (leftDmg == rightDmg) {
    draw()
  }
}






// Why are my variables coming back undefined?


// generates random number to use in URL to select pokemon
//  let index1 = Math.floor(Math.random() * 150)
//  let index2 = Math.floor(Math.random() * 150)

// let getPokemon = (api) => {
//   fetch(api)
//     .then(res => res.json())
//     .then(info => {
//       console.log(info)
//       return info
//     })
// }

// var pokemon1 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index1}`)
// var pokemon2 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index2}`)
