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
  
  // create elements to hold data on left side
  const leftDiv = document.querySelector('#pokeLeft')
  const imgL = document.createElement('img')
  imgL.src = `${pokemon[0].sprites.front_default}`
  const textHolderL = document.createElement('p')
  const txtNodeL = document.createTextNode(`${pokemon[0].moves[randomLeft].move.name}: ${pokemon[0].stats[randomLeft1].base_stat} damage!`)
  // append elements to DOM
  leftDiv.appendChild(imgL)
  textHolderL.appendChild(txtNodeL)
  leftDiv.appendChild(textHolderL)

  // generates random numbers to randomize pokemon selection, move choice and damage output
  let randomRight = Math.floor(Math.random() * 20)
  let randomRight1 = Math.floor(Math.random() * 3)
  // create elements to hold data on rigth side
  const rightDiv = document.querySelector('#pokeRight')
  const imgR = document.createElement('img')
  imgR.src = `${pokemon[1].sprites.front_default}`
  const textHolderR = document.createElement('p')
  const txtNodeR = document.createTextNode(`${pokemon[1].moves[randomRight].move.name}: ${pokemon[1].stats[randomRight1].base_stat} damage!`)
  // append elements to DOM

  rightDiv.appendChild(imgR)
  textHolderR.appendChild(txtNodeR)
  rightDiv.appendChild(textHolderR)

  let left = `${pokemon[0].stats[randomLeft1].base_stat}`
  let right = `${pokemon[1].stats[randomRight1].base_stat}`
  console.log(left, right)

  if (left > right) {
    console.log('LEFT WINS')
  } else if (left < right) {
    console.log('RIGHT WINS')
  } else if (left == right) {
    console.log('DRAW')
  }

}


















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