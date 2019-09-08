'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let turnCount = 9;
let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Prints game board at start of each turn
function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// Creates random integers to be used in generating random solution
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Creates a random solution of 4 characters
function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

// Generates hints to help player solve puzzle, based off of their most recent input
function generateHint(guess) {
  let guessArray = guess.split('');
  let solutionArray = solution.split('');

  //
  let indexMatch = 0;
    solutionArray.map((input, index) => {
      if (guessArray[index] == input) {
        solutionArray[index] = null;
        indexMatch++;
      }
    });

  let letterMatch = 0;
  guessArray.map((input) => {
    let target = solutionArray.indexOf(input);
    if (target !== -1){
      solutionArray[target] = null;
      letterMatch++;
    }
  });
  
  console.log('');
  console.log(`${indexMatch} correctly placed letters`);
  console.log(`${letterMatch} shared letters`);
  return indexMatch + '-' + letterMatch;
}

// Tracks number of remaining turns, and resets game if turns left = 0.
function turnCounter(){
  if (turnCount === 0){
    console.log('--------------------------------');
    console.log('You ran out of turns! Try again!');
    console.log('--------------------------------');
    console.log('');
    board = [];
    turnCount = 10;
  } 
  console.log('--------------');
  console.log(`Turns left: ${turnCount}`);
  console.log('--------------');
  console.log('');
  turnCount--;
}

function validInput(guess) {
  let guessArray = guess.split('');

  if (guessArray.length !== 4) {
    console.log('--------------------------');
    console.log('Input must be 4 characters');
    console.log('--------------------------');
    return false;
  } else {
    return true;
  };
}

function validEntry(letters, guess) {
  let guessArray = guess.split('');
  
  for (let num = 0; num < guess.length; num++){
    let check = letters.indexOf(guess[num]);
    if (check === -1) {
      console.log('-----------------------------------------');
      console.log("One or more of your selections is invalid");
      console.log('-----------------------------------------');
      return false;
    }  
  }
  return true;
}

function mastermind(guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
  let guessArray = guess.split('');

  if (validInput(guess) && validEntry(letters, guess)) {
    
    board.push(guessArray);
    printBoard();
    generateHint(guess);
    turnCounter();
  };

  if (solution == guess) {
    board = [];
    turnCount = 9;
    console.log('You win! Great work!')
    console.log('')
    let winner ='You guessed it!';
    return winner;
  };
}

function getPrompt() {
  rl.question('Guess: ', (guess) => {
    mastermind(guess);
    
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
