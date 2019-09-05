//                             RULES

// User gets 10 GUESSES, or chances to guess the correct sequence, or SOLUTION.

// User has to pick a valid character 4 times per turn
/*
function validInput() {
  if (guessArray.length !== 4) {
    console.log('Input must be 4 characters');
    return false;
  } else {
    console.log('thanks you');
    return true;
  }
}
*/

// GUESS and SOLUTION are converted to arrays to compare.
/*
let guessArray = guess.split('');
let solutionArray = solution.split('');
*/





// If guess is equal to solution, player wins the game
/*
if (guessArray === solutionArray) {
  console.log('You Win!');
}
*/



// Step 1:
//            User inputs 4 values into each GUESS, using the values 'A' 'B' 'C' 'D' 'E' 'F' 'G' 'H'.
//            guess gets returned as a string ------ guess = guess.split('');
//            guess gets pushed to board ----------- board.push(guess);

// Step 2:
//            Program compares the 4 user inputs against the current SOLUTION
//                  board.map(function(input, index) {
//                    
//                  })
// Step 2A:
//            


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}  

function generateHint() {
  // your code here
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  let guessArray = guess.split('');
  let solutionArray = solution.split('');
  board.push(guessArray);
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
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
