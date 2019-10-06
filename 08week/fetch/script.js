'use strict';

//  // not sure why this method will not work
//  let index1 = Math.floor(Math.random() * 150)
//  let index2 = Math.floor(Math.random() * 150)
//  var pokemon1 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index1}`)
//  var pokemon2 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index2}`)




let pokemon = []

let getPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150)}`)
    .then(res => res.json())
    .then(info => {
      console.log(info)
      pokemon.push(info)
    })
}





const battle = () => {
  // generates random numbers to randomize pokemon selection, move choice and damage output
  let randomLeft = Math.floor(Math.random() * 20)
  let randomLeft1 = Math.floor(Math.random() * 3)


  let leftDmg = `${pokemon[0].stats[randomLeft1].base_stat}`
  // create elements to hold data on left side
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

  // generates random numbers to randomize pokemon selection, move choice and damage output
  let randomRight = Math.floor(Math.random() * 20)
  let randomRight1 = Math.floor(Math.random() * 3)

  let rightDmg = `${pokemon[1].stats[randomRight1].base_stat}`
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

  let left = `${pokemon[0].stats[randomLeft1].base_stat}`
  let right = `${pokemon[1].stats[randomRight1].base_stat}`
  console.log(left, right) 

  const leftWin = () => {
    const div = document.querySelector('#displayBoard')
    const h1 = document.createElement('h1')
    h1.innerHTML = `${pokemon[0].name}`
    const h4 = document.createElement('h4')
    const button = document.createElement('button')
    button.innerHTML = 'Play Again?'
    button.addEventListener('click', function() {
      location.reload(true)
    })
    h4.innerHTML = 'WINS!'
    div.appendChild(h1)
    div.appendChild(h4)
    div.appendChild(button)
  }

  const rightWin = () => {
    const div = document.querySelector('#displayBoard')
    const h1 = document.createElement('h1')
    h1.innerHTML = `${pokemon[1].name}`
    const h4 = document.createElement('h4')
    const button = document.createElement('button')
    button.innerHTML = 'Play Again?'
    button.addEventListener('click', function() {
      location.reload(true)
    })
    h4.innerHTML = 'WINS!'
    div.appendChild(h1)
    div.appendChild(h4)
    div.appendChild(button)
  }

  const draw = () => {
    const div = document.querySelector('#displayBoard')
    const h1 = document.createElement('h1')
    h1.innerHTML = `DRAW`
    
    const button = document.createElement('button')
    button.innerHTML = 'Play Again?'
    button.addEventListener('click', function() {
      location.reload(true)
    })
    h4.innerHTML = 'WINS!'
    div.appendChild(h1)
    div.appendChild(button)
  }

  if (leftDmg > rightDmg){
    leftWin()
  }
  if (leftDmg < rightDmg){
    rightWin()
  }
  if (leftDmg == rightDmg){
    draw()
  }

}


// leftWin = () => {
//   const div = document.querySelector('#displayBoard')
//   const h1 = document.createElement('h1')
//   h1.innerHTML = 'yo'
//   const h4 = document.createElement('h4')
//   const
// }

// rightWin = () => {
//   const div = document.querySelector('#displayBoard')
// }

// draw = () => {
//   const div = document.querySelector('#displayBoard')
// }

// if (leftDmg > rightDmg) {
//   leftWin();
// } else if (leftDmg < rightDmg) {
//   rightWin();
// } else if (leftDmg == rightDmg) {
//   draw();
// }













// let getPokemon = (`https://pokeapi.co/api/v2/pokemon/${index1}`) => {
//   fetch(api)
//     .then(res => res.json())
//     .then(info => {
//       console.log(info)
//       return info
//     })
// }

// let index2 = Math.floor(Math.random() * 150)

// var pokemon1 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index1}`)
// var pokemon2 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index2}`)


// const getPoke = () => {
//   if(pokemon1){
//     console.log(pokemon1)
//   }
// }