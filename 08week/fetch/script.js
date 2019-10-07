// occasionally declares wrong winner and I cannot figure out why. I declared variables on lines 18 and 19 to store random value, and pass it through functions to keep that number equal throughout code. I Console logged values at each function they are passed into, and they are equal the entire way through, yet still occasionally calls wrong winner...damage values to be passed into winner selector on lines 196 and 197

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

// declare variables to hold random number to be used to generate pokemon damage output. passed into battle(), printLeftPoke(), printRightPoke() and findWinner() functions
let randStatL = Math.floor(Math.random() * 3)
let randStatR = Math.floor(Math.random() * 3)
console.log(`base randStatL: ${randStatL}, base randStatR: ${randStatR}`)
// run battle() function when FIGHT button is clicked
const fight = document.querySelector('#fight')
fight.addEventListener('click', function () {
  battle(randStatL, randStatR)
})

// assigned as an on-click function that generates data for a random pokemon
let getPokemonL = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150)}`)
    .then(res => res.json())
    .then(info => {
      pokemon.push(info)
    })
  // removes window.onload instructions from displayboard after button is clicked
  const displayBoard = document.querySelector('#displayBoard')
  displayBoard.removeChild(document.querySelector('.loading'))
  // creates temporary waiting image and appends to DOM
  const leftDiv = document.querySelector('#pokeLeft')
  const img = document.createElement('img')
  img.setAttribute('class', 'emoji')
  img.src = './question.png';
  leftDiv.appendChild(img)
}

// assigned as an on-click function that generates data for a random pokemon
let getPokemonR = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150)}`)
    .then(res => res.json())
    .then(info => {
      pokemon.push(info)
    })
  // creates temporary waiting image and appends to DOM
  const rightDiv = document.querySelector('#pokeRight')
  const img = document.createElement('img')
  img.setAttribute('class', 'emoji')
  img.src = './question.png';
  rightDiv.appendChild(img)
}

// assigned as an on-click function that:
// 1: loads DOM with pokemon
// 2: compares damage output and signals the winner
const battle = (randStatL, randStatR) => {
  // if pokemon selection is duplicated, restarts program and alerts player
  if (pokemon[0].name == pokemon[1].name){
    window.alert('Pokemon was duplicated!')
    location.reload(true)
  }
  console.log(`battleL: ${randStatL}, battleR: ${randStatR}`)
  // removes loading images from DOM to make space for pokemon
  const leftDiv = document.querySelector('#pokeLeft')
  const rightDiv = document.querySelector('#pokeRight')
  leftDiv.removeChild(document.querySelector('.emoji'))
  rightDiv.removeChild(document.querySelector('.emoji'))

  // prints pokemon on left side
  printLeftPoke(randStatL)
  // prints pokemon on right side
  printRightPoke(randStatR)
  // finds the winner
  findWinner(randStatL, randStatR)
}

// generates random pokemon, move name and damage output, and appends to DOM
const printLeftPoke = (randStatL) => {
  console.log(`printLeftPoke: ${randStatL}`)
  // generates random numbers to randomize left pokemon selection, move choice and damage output
  let random = Math.floor(Math.random() * 20)
  // create elements to display data for left pokemon
  const leftDiv = document.querySelector('#pokeLeft')
  const leftName = document.createElement('h6')
  // displays left pokemon name
  leftName.innerHTML = `${pokemon[0].name}`
  const imgL = document.createElement('img')
  // displays left pokemon photo
  imgL.src = `${pokemon[0].sprites.front_default}`
  const textHolderL = document.createElement('p')
  // displays random pokemon move, and damage output passed in from randStatL variable
  const txtNodeL = document.createTextNode(`${pokemon[0].moves[random].move.name}: ${pokemon[0].stats[randStatL].base_stat} damage!`)
  // append elements to DOM
  leftDiv.appendChild(leftName)
  leftDiv.appendChild(imgL)
  textHolderL.appendChild(txtNodeL)
  leftDiv.appendChild(textHolderL)
}

// generates random pokemon, move name and damage output, and appends to DOM
const printRightPoke = (randStatR) => {
  console.log(`pringRightPoke: ${randStatR}`)
  // generates random numbers to randomize right pokemon selection, move choice and damage output
  let random = Math.floor(Math.random() * 20)
  // let randStatR = Math.floor(Math.random() * 3)
  // create elements to hold data on rigth side
  const rightDiv = document.querySelector('#pokeRight')
  const rightName = document.createElement('h6')
  // displays right pokemon name
  rightName.innerHTML = `${pokemon[1].name}`
  const imgR = document.createElement('img')
  // displays right pokemon photo
  imgR.src = `${pokemon[1].sprites.front_default}`
  const textHolderR = document.createElement('p')
  // displays random pokemon move, and damage output passed in from randStatR variable
  const txtNodeR = document.createTextNode(`${pokemon[1].moves[random].move.name}: ${pokemon[1].stats[randStatR].base_stat} damage!`)
  // append elements to DOM
  rightDiv.appendChild(rightName)
  rightDiv.appendChild(imgR)
  textHolderR.appendChild(txtNodeR)
  rightDiv.appendChild(textHolderR)
}

// function that determines winner based off of randomly assigned damage number
const findWinner = (randStatL, randStatR) => {
  console.log(`winnerL: ${randStatL}, winnerR: ${randStatR}`)

  // function that displays text if left pokemon wins
  const leftWin = () => {
    // create elements to hold data for left win
    const div = document.querySelector('#displayBoard')
    const h1 = document.createElement('h1')
    // displays left pokemon name
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
    // displays right pokemon name
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
    // button that when clicked, refreshes browser
    button.addEventListener('click', function () {
      location.reload(true)
    })
    // appends elements to DOM
    div.appendChild(h1)
    div.appendChild(button)
  }

  // assigns damage counts to variables to be used in the conditional statement below
  let leftDmg = `${pokemon[0].stats[randStatL].base_stat}`
  let rightDmg = `${pokemon[1].stats[randStatR].base_stat}`
  console.log(`leftDmg: ${leftDmg}`)
  console.log(`rightDmg: ${rightDmg}`)
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
