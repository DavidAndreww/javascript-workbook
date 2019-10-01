/* -Checkpoint 2 Dodge Ball!
20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.

20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.

20pts - Can add Players to different Teams - When we click on the blue button they Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.

20pts - Uses Class - This is not a hack job. You should use class to add the new properties you need and extend when you need.

20pts - Make a button to remove Players from Teams and back to the Players list.
Make a button to remove Player from the Players List and move them into the People List. */

// array of players, listed as objects
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
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
  constructor(person) { // is this correct?
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
class blueTeammate extends DodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascot) {
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.teamColor = blue;
    this.mascot = Baracudas;
  }
}

// extends player and adds teamColor and mascot for red team
class redTeammate extends DodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, teamColor, mascot) {
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.teamColor = red;
    this.mascot = Jaguars;
  }
}

const listPeopleChoices = () => {
  // selects <ul> to display list of people
  const peopleList = document.getElementById('people')
  // iterates through array of people and prints them to the DOM with a button that if clicked, adds that individual to the list of players
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function () { makePlayer(person.id) })
    li.appendChild(button)
    li.appendChild(document.createTextNode(`${person.name} - ${person.skillSet}`))
    peopleList.append(li)
  })
}

// function that turns player into a DodgeBallPlayer
const makePlayer = (id) => {
  // select dodgeball players <ul> to add new players to
  const playerList = document.querySelector('#players')

  // --------------Need to splice proper person based off of Id number-------
  let spliced = arrOfPeople.splice(arrOfPeople[id -2], 1);
  // listOfPlayers.push(spliced)
  listOfPlayers.splice(0, 1 ,spliced)
  console.log(listOfPlayers)
  
  

  listOfPlayers.map((person, index) => {
    console.log('"person" in player array:')
    console.log(person)

    const listElem = document.createElement('li')
    // creates buttons to let new players be added to either blue or red team
    const addBlue = document.createElement('button')
    const addRed = document.createElement('button')
    addBlue.innerHTML = 'Add to Blue'
    addRed.innerHTML = 'Add to Red'
    // set eventListener to buttons which will move player to appropriate team when clicked
    addBlue.addEventListener('click', function () { addToBlue(id) })
    addRed.addEventListener('click', function () { addToRed(id) })

    // appends buttons and textNode to <li>, then appends <li >to the <ul>
    listElem.appendChild(addBlue)
    listElem.appendChild(addRed)
    listElem.appendChild(document.createTextNode(`${person[0].name} - ${person[0].skillSet}`))
    playerList.append(listElem)

    //run listPeopleChoices to reprint remaining array to people list
    //also need to clear list before re-printing, so as not to add the two arrays
  })
  // refreshes DOM
  // listPeopleChoices()
}

const addToBlue = (id) => {
  console.log(id)

  // splice selected player from players array and splice into blue team array
  let spliced = listOfPlayers.splice() // need proper array index
  blueTeam.splice()

  // access blue team <ul> in DOM
  const blueTeamUl = document.querySelector('#blue')
  // for each player in blueTeam array, print player and remove button to the DOM
  blueTeam.map(player => {
    const li = document.createElement('li')
    const btn_removeBlue = document.createElement('button')
    btn_removeBlue.innerHTML = 'Remove'
    btn_removeBlue.addEventListener('click', function () { removeBluePlayer() })
    li.appendChild(btn_removeBlue)
    li.appendChild(document.createTextNode(`${player[0].name}`)) // correct player inserted here
    blueTeamUl.append(li)
  })
  // refreshes DOM
  // makePlayer()
}

const addToRed = (id) => {
  console.log(id)

  // splice selected player from players array and splice into red team array
  let spliced = listOfPlayers.splice()
  redTeam.splice()

  // acces red team <ul> in the DOM 
  const redTeamUl = document.querySelector('#red')
  // for each player in redTeam array, print palye rand remove button to the DOM
  redTeam.map(player => {
    const li = document.createElement('li')
    const btn_removeRed = document.createElement('button')
    btn_removeRed.innerHTML = 'Remove'
    btn_removeRed.addEventListener('click', function () { removeRedPlayer() })
    li.appendChild(btn_removeRed)
    li.appendChild(document.createTextNode(`${player[0].name}`)) // correct player inserted here
    redTeamUl.append(li)
  })
  // refreshes DOM
  // makePlayer()
}