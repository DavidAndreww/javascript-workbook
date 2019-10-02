/* 
Checkpoint 2 Dodge Ball!

20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.

20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.

20pts - Can add Players to different Teams - When we click on the blue button they Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.

20pts - Uses Class - This is not a hack job. You should use class to add the new properties you need and extend when you need.

20pts - Make a button to remove Players from Teams and back to the Players list.
Make a button to remove Player from the Players List and move them into the People List. 
*/

// array of players, listed as objects
const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 7,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

//push people into listOfPlayers array when able to play, then allow them to be pushed to either blue or red team
const listOfPlayers = []
const blueTeam = []
const redTeam = []

// template to turn person into a dodgeball player
class DodgeBallPlayer {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = true;
    this.canDodgeBall - true;
    this.hasPaid = true;
    this.isHealthy = true;
    this.yearsExperience = true;
  }
}

// extends player and adds teamColor and mascot for blue team
class BlueTeammate extends DodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascot) {
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.teamColor = 'Blue';
    this.mascot = 'Blue Baracudas';
  }
}

// extends player and adds teamColor and mascot for red team
class RedTeammate extends DodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascot) {
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.teamColor = 'Red';
    this.mascot = 'Red Jaguars';
  }
}

// prints list of people to the DOM
const listPeopleChoices = () => {
  // selects <ul> to display list of people
  const peopleList = document.getElementById('people')
  // adds makePlayer button and player name and skillset for each player in the array of people
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    // event listener that removes person from person list and adds them to player list
    button.addEventListener('click', function () {
      makePlayer(person.id);
      peopleList.removeChild(li)
    })
    // appends elements to the DOM
    li.appendChild(button)
    li.appendChild(document.createTextNode(` ${person.name} - ${person.skillSet} `))
    peopleList.append(li)
  })
}

// instantiates dodgeballplayer from person
const makePlayer = (id) => {
  // select dodgeball players <ul> to add new players to
  const playerList = document.querySelector('#players')
  // return the array value (object) of selected player if the player ID matches and store it as a variable
  let idMatch = arrOfPeople.find(player => {
    return player.id == id;
  })
  // set variable equal to the index of the player (object) we accessed above
  let positionMatch = arrOfPeople.indexOf(idMatch)
  // instantiates new DodgeBallPlayer from person (object) found in idMatch
  const newPlayer = new DodgeBallPlayer(
    idMatch.id,
    idMatch.name,
    idMatch.age,
    idMatch.skillSet,
    idMatch.placeBorn,
    canThrowBall = true,
    canDodgeBall = true,
    hasPaid = true,
    isHealthy = true,
    yearsExperience = 5
  )
  // push new player to player list & removes them from people list
  listOfPlayers.push(newPlayer)
  arrOfPeople.splice(positionMatch, 1)
  // creates <li> to hold buttons and textNode
  const li = document.createElement('li')
  // creates button with function of adding player to blueTeam and removing from player list
  const addBlue = document.createElement('button')
  addBlue.innerHTML = 'Add to Blue'
  addBlue.addEventListener('click', function () {
    addToBlue(newPlayer.id)
    playerList.removeChild(li)
  })
  // creates button with function of adding player to redTeam and removing from player list
  const addRed = document.createElement('button')
  addRed.innerHTML = 'Add to Red'
  addRed.addEventListener('click', function () {
    addToRed(newPlayer.id)
    playerList.removeChild(li)
  })
  // creates button to remove player from player list and put them back to person list
  const button = document.createElement('button')
  button.innerHTML = 'Remove'
  button.addEventListener('click', function () {
    removePlayer(id)
    playerList.removeChild(li)
  })
  // appends both buttons and textNode to <li>, then appends <li >to the <ul>
  li.appendChild(addBlue)
  li.appendChild(addRed)
  li.appendChild(document.createTextNode(` ${newPlayer.name} - ${newPlayer.skillSet} - Can throw: ${newPlayer.canThrowBall} `))
  li.appendChild(button)
  playerList.append(li)
}

// button functionality that removes player from player list & moves them back to person list
const removePlayer = (id) => {
  // return the array value (object) of selected player if the player ID matches and store it as a variable
  const playerMatch = listOfPlayers.find(player => {
    return player.id == id
  })
  // set variable equal to the index of the player (object) we accessed above
  const positionMatch = listOfPlayers.indexOf(playerMatch)
  // push player to people list & removes them from player list
  listOfPlayers.splice(positionMatch, 1)
  arrOfPeople.push(playerMatch)
  // selected list of people <ul> to push players into
  const peopleList = document.querySelector('#people')
  // create <li> and textNode
  const li = document.createElement('li')
  const node = document.createTextNode(` ${playerMatch.name} - ${playerMatch.skillSet} `)
  // creates a <button> with function of making a person into player and removing them from people list 
  const button1 = document.createElement('button')
  button1.innerHTML = "Make Player"
  button1.addEventListener('click', function () {
    makePlayer(id)
    peopleList.removeChild(li)
  })
  // appends all elements to the DOM
  li.appendChild(button1)
  li.appendChild(node)
  peopleList.append(li)
}

// button functionality to add player to blueTeam from player list
const addToBlue = (id) => {
  // return the array value (object) of selected player if the player ID matches and store it as a variable
  let blueMatch = listOfPlayers.find(player => {
    return player.id == id;
  })
  // set variable equal to the index of the player (object) we accessed above
  let positionMatch = listOfPlayers.indexOf(blueMatch)
  // instantiates new blueTeammate from player (object) found in blueMatch
  let newBlue = new BlueTeammate(
    blueMatch.id,
    blueMatch.name,
    blueMatch.age,
    blueMatch.skillSet,
    blueMatch.placeBorn,
    canThrowBall = true,
    canDodgeBall = true,
    hasPaid = true,
    isHealthy = true,
    yearsExperience = 51,
    blueMatch.teamColor,
    blueMatch.mascot
  )
  // splice selected player from players array & push into blue team array
  listOfPlayers.splice(positionMatch, 1)
  blueTeam.push(newBlue)
  // access blue team <ul> in DOM
  const ul = document.querySelector('#blue')
  // create <li>, <button> and textNode 
  const li = document.createElement('li')
  const node = document.createTextNode(` ${newBlue.name} - ${newBlue.mascot} `)
  const button = document.createElement('button')
  button.innerHTML = 'Remove'
  // event listener to remove player from blue team, and push back onto player list
  button.addEventListener('click', function () {
    removeBlue(newBlue.id)
    ul.removeChild(li)
  })
  // appending elements to the DOM
  li.appendChild(button)
  li.appendChild(node)
  ul.append(li)
}

// button functionality to remove player from blueTeam into player list
const removeBlue = (id) => {
  // return the array value (object) of selected player if the player ID matches and store it as a variable
  const blueMatch = blueTeam.find(player => {
    return player.id == id;
  })
  // set variable equal to the index of the player (object) we accessed above
  let positionMatch = blueTeam.indexOf(blueMatch)
  // returns BlueTeammate to regular DodgeBallPlayer
  const newPlayer = new DodgeBallPlayer(
    blueMatch.id,
    blueMatch.name,
    blueMatch.age,
    blueMatch.skillSet,
    blueMatch.placeBorn,
    canThrowBall = true,
    canDodgeBall = true,
    hasPaid = true,
    isHealthy = true,
    yearsExperience = 5
  )
  // splice selected player from blue array and push back to players array
  blueTeam.splice(positionMatch, 1)
  listOfPlayers.push(newPlayer)
  // select dodgeball players <ul> to add new players to
  const playerList = document.querySelector('#players')
  const li = document.createElement('li')
  const node = document.createTextNode(` ${newPlayer.name} - ${newPlayer.skillSet} - Can throw: ${newPlayer.canThrowBall} `)
  // creates button with function of adding player to blueTeam and removing from player list
  const addBlue = document.createElement('button')
  addBlue.innerHTML = 'Add to Blue'
  addBlue.addEventListener('click', function () {
    addToBlue(newPlayer.id)
    playerList.removeChild(li)
  })
  // creates button with function of adding player to redTeam and removing from player list
  const addRed = document.createElement('button')
  addRed.innerHTML = 'Add to Red'
  addRed.addEventListener('click', function () {
    addToRed(newPlayer.id)
    playerList.removeChild(li)
  })
  // adds event listener to remove player from player list & push them to people list
  const button = document.createElement('button')
  button.innerHTML = 'Remove'
  button.addEventListener('click', function () {
    removePlayer(id)
    playerList.removeChild(li)
  })
  // appends all elements to the DOM
  li.append(addBlue)
  li.append(addRed)
  li.append(node)
  li.append(button)
  playerList.append(li)
}

// button functionality to add player to redTeam from player list
const addToRed = (id) => {
  // return the array value (object) of selected player if the player ID matches and store it as a variable
  const redMatch = listOfPlayers.find(player => {
    return player.id == id
  })
  // set variable equal to the index of the player (object) we accessed above
  const positionMatch = listOfPlayers.indexOf(redMatch);
  // instantiates new RedTeammate from player (object) found in redMatch
  let newRed = new RedTeammate(
    redMatch.id,
    redMatch.name,
    redMatch.age,
    redMatch.skillSet,
    redMatch.placeBorn,
    canThrowBall = true,
    canDodgeBall = true,
    hasPaid = true,
    isHealthy = true,
    yearsExperience = 51,
    redMatch.teamColor,
    redMatch.mascot
  )
  // splice selected player from players array & push into red team array
  listOfPlayers.splice(positionMatch, 1)
  redTeam.push(newRed)
  // access red team <ul> in the DOM 
  const ul = document.querySelector('#red')
  // create <li>, <button> and textNode
  const li = document.createElement('li')
  const node = document.createTextNode(` ${newRed.name} - ${newRed.mascot} `)
  const button = document.createElement('button')
  button.innerHTML = 'Remove'
  // event listener to remove player from red team, and push back onto player list
  button.addEventListener('click', function () {
    removeRed(newRed.id)
    ul.removeChild(li)
  })
  // appending elements to the DOM
  li.appendChild(button)
  li.appendChild(node)
  ul.append(li)
}

// button functionality to remove player from redTeam into player list
const removeRed = (id) => {
  // return the array value (object) of selected player if the player ID matches and store it as a variable
  let redMatch = redTeam.find(player => {
    return player.id == id;
  })
  // set variable equal to the index of the player (object) we accessed above
  let positionMatch = redTeam.indexOf(redMatch)
  // returns RedTeammate to regular DodgeBallPlayer
  const newPlayer = new DodgeBallPlayer(
    redMatch.id,
    redMatch.name,
    redMatch.age,
    redMatch.skillSet,
    redMatch.placeBorn,
    canThrowBall = true,
    canDodgeBall = true,
    hasPaid = true,
    isHealthy = true,
    yearsExperience = 5
  )
  // splice selected player from red array and push back to players array
  redTeam.splice(positionMatch, 1)
  listOfPlayers.push(newPlayer)
  // create <ul>, <li> and textNode to display player back in playerList
  const playerList = document.querySelector('#players')
  const li = document.createElement('li')
  const node = document.createTextNode(` ${newPlayer.name} - ${newPlayer.skillSet} - Can throw: ${newPlayer.canThrowBall} `)
  // creates button with function of adding player to blueTeam and removing from player list
  const addBlue = document.createElement('button')
  addBlue.innerHTML = 'Add to Blue'
  addBlue.addEventListener('click', function () {
    addToBlue(newPlayer.id)
    playerList.removeChild(li)
  })
  // creates button with function of adding player to redTeam and removing from player list
  const addRed = document.createElement('button')
  addRed.innerHTML = 'Add to Red'
  addRed.addEventListener('click', function () {
    addToRed(newPlayer.id)
    playerList.removeChild(li)
  })
  // adds event listener to remove player from player list & push them to people list
  const button = document.createElement('button')
  button.innerHTML = 'Remove'
  button.addEventListener('click', function () {
    removePlayer(id)
    playerList.removeChild(li)
  })
  // appends all elements to the DOM
  li.append(addBlue)
  li.append(addRed)
  li.append(node)
  li.append(button)
  playerList.append(li)
}




