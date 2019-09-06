//                             RULES

// User gets 10 GUESSES, or chances to guess the correct sequence, or SOLUTION.

// Guessed characters must be valid characters, A, B, C, D, E, F, G or H. (switch function?)
/*
if (guess !== 'a' || 'b' || 'c' || 'd' || 'e' || 'f' || 'g' || 'h') {
  console.log('Please select character A thru H');
  return false;
}
*/

// User has to enter 4 characters for each guess
/*
function validInput() {
  if (guessArray.length !== 4) {
    console.log('Input must be 4 characters');
    return false;
  } else {
    return true;
  }
}
*/

// GUESS and SOLUTION are converted to arrays to compare.
/*
let guessArray = guess.split('');
let solutionArray = solution.split('');
*/


// If any of the characters in guessArray is also present in solutionArray, 


// If guess is equal to solution, player wins the game.
/*
if (guess === solution) {
  console.log('You Win!');
}
*/


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

function validInput(guessArray) {
  if (guessArray.length !== 4) {
    console.log('Input must be 4 characters');
    return false;
  } else {
    return true;
  }
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  let guessArray = guess.split('');
  validInput(guessArray);
  board.push(guessArray);
}


function getPrompt() {
  rl.question('Guess: ', (guess) => {
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
