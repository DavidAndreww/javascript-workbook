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

  // indexMatch holds # of correctly placed letters. if value at the index of the guessArray is equal to value at the same index of solutionArray, then that index of the solutionArray is set to null, so that it may no longer be compared. indexMatch is increased by 1 each time this happens. 
  let indexMatch = 0;
    solutionArray.map((input, index) => {
      if (guessArray[index] === input) {
        solutionArray[index] = null;
        indexMatch++;
      }
    });

  // letterMatch holds # of shared letters between solutionArray and guessArray. if solutionArray shares an input value with guessArray, that index is stored in the target variable. If the input is not shared, the value of target will be -1. If target is equal to any index that isn't -1, then that index in the solution will be set to null so as to not be compared again, and the letterMatch variable will increase by 1. 
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

// Stops game from progressing if player enters a guess that is not equal to 4 characters
function validInput(guess) {
  if (guess.length !== 4) {
    console.log('--------------------------');
    console.log('Input must be 4 characters');
    console.log('--------------------------');
    return false;
  } else {
    return true;
  };
}

// Restricts the user to choosing a character A, B, C, D, E, F, G or H.
function validEntry(letters, guess) {

  // The loop iterates through each index in the guessArray, and pulls back the value at that index. That value is then compared to the values of the letters variable. letters.indexOf will pull the index at that shared value. If shared, then the check variable will set as equal to that index, being zero, or a positive integer. If not shared, check will be set to -1.  
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

  // If validInput and validEntry are both true, then that guess will be run in the program.
  if (validInput(guess) && validEntry(letters, guess)) {
    
    // The current guess is pushed to the board variable as an array to be printed, a hint will be generated if there are any matching letters and the turn counter will decrease by 1.
    board.push(guessArray);
    printBoard();
    generateHint(guess);
    turnCounter();
  };

  // If the player guesses the solution then the board and turn counter are reset.
  if (solution === guess) {
    board = [];
    turnCount = 9;
    console.log('You win! Great work!')
    console.log('')
    let winner ='You guessed it!';
    return winner;
  };
}

// Prompts the player for their guess, then runs the program.
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
