'use strict';

let pokemon = []


  //  let index1 = Math.floor(Math.random() * 150)
  //  let index2 = Math.floor(Math.random() * 150)


   let getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150)}`)
      .then(res => res.json())
      .then(info => {
        console.log(info)
        pokemon.push(info) 
      })
  }
  
  // WHY DONT WORK
  // var pokemon1 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index1}`)
  // var pokemon2 = getPokemon(`https://pokeapi.co/api/v2/pokemon/${index2}`)
  
  
  const getPoke = () => {
    if(pokemon){
      console.log(pokemon[0].name, pokemon[0].sprites.front_default)
      console.log(pokemon[1].name, pokemon[0].sprites.front_default)
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