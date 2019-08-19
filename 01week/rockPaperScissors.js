'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {

  let p1 = hand1.toLowerCase().trim()
  let p2 = hand2.toLowerCase().trim()

  var inputCheck = true;

  while (inputCheck) {
    if (p1 == 'rock' || p1 == 'paper' || p1 == 'scissors') {
      inputCheck = false;
    } else {
      return ' Sorry, Player 1, please choose a valid input';
    }
  }

  var inputCheck = true;

  while (inputCheck) {
    if (p2 == 'rock' || p2 == 'paper' || p2 == 'scissors') {
      inputCheck = false;
    } else {
      return ' Sorry, Player 2, please choose a valid input';
    }
  }

  if (p1 === p2) {
    return "It's a tie!";
  }
  if (p1 === 'rock'){
    if (p2 === 'paper') {
      return 'Hand two wins!';
    } else return 'Hand one wins!';
  }
  if (p1 === 'scissors') {
    if (p2 === 'paper') {
      return 'Hand one wins!';
    } else return 'Hand two wins!';
  }
  if (p1 === 'paper') {
    if (p2 === 'scissors') {
      return 'Hand two wins!'; 
    } else return 'Hand one wins!';
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

//Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
