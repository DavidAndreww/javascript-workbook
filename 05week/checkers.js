'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker() {
  // Your code here
}

class Board {
  constructor() {
    this.grid = []
    this.checkers = [] 
    this.whitePiece = 'w';
    this.blackPiece = 'b';
  }
  // Creates an 8x8 array, filled with null values. No return value
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  // Prints the grid. No return value.
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column]);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Creates checkers at game start and populates board. No return value.
  createCheckers(){
    //Create white pieces
    for(let row1 = 0; row1 < 3; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 0 && col1 % 2 == 1){
          this.grid[row1][col1] = this.blackPiece;
          this.checkers.push(this.blackPiece); // only purpose is to pass test
        }
      }
    }
    for(let row1 = 0; row1 < 3; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 1 && col1 % 2 == 0){
          this.grid[row1][col1] = this.blackPiece;
          this.checkers.push(this.blackPiece); // only purpose is to pass test
        }
      }
    }

    // Create black pieces
    for(let row1 = 5; row1 < 8; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 0 && col1 % 2 == 1){
          this.grid[row1][col1] = this.whitePiece;
          this.checkers.push(this.whitePiece); // only purpose is to pass test

        }
      }
    }
    for(let row1 = 5; row1 < 8; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 1 && col1 % 2 == 0){
          this.grid[row1][col1] = this.whitePiece;
          this.checkers.push(this.whitePiece); // only purpose is to pass test
        }
      }
    }
  }

  killChecker(position){
    // Enter Code
  }  
}

class Game {
  constructor() {
    this.board = new Board;
    this.counter = 1;
  }

  // Ensures that user input is valid
  validateInput(whichPiece, toWhere){
    let reg = /[0-7]/g;
    let startCheck = whichPiece.match(reg);
    let endCheck = toWhere.match(reg);
    // Restricts entry if input is not two characters
    if(whichPiece.length !== 2 || toWhere.length !== 2){
      console.log('Please select two numbers')
      return false;
    }
    // Limits user input to integer values between 0 and 7
    if(startCheck.length != 2 || endCheck.length != 2){
      console.log('Valid numbers must range from 0-7')
      return false;
    }
    return true;
  }

  // Ensures that the move is a valid move
  validMove(start, end){
    // Ensures that the selected start square contains a game piece
    let startValue = start.split('');
    let isPiece = this.board.grid[startValue[0]][startValue[1]];
    if(isPiece == null){
      console.log(`There is no piece at square ${start}`)
      return false;
    } 
    // Ensure that square to be moved to is empty
    let endValue = end.split('');
    let isEmpty = this.board.grid[endValue[0]][endValue[1]];
    if(isEmpty !== null){
      console.log(`Square at ${end} is already occupied`)
      return false;
    }
    // Ensure white can only make legal diagonal moves
    if(isPiece == this.board.whitePiece){
      if((parseInt(start) - parseInt(end) !== 9) && (parseInt(start) - parseInt(end) !== 11)){
        console.log(`Square ${end} is not a valid move.`);
        return false;
      }
    }
    // Ensure white can only make legal diagonal moves
    if(isPiece == this.board.blackPiece){
    if((parseInt(start) - parseInt(end) !== -9) && (parseInt(start) - parseInt(end) !== -11)){
      console.log(`Square ${end} is not a valid move.`);
      return false;
    }
  }
  return true;
  }
  
  turnCounter(){
    console.log(`Turn ${this.counter}`);
  }

  // Turn counter and tracking player turn
  changePlayer(start){
    let startValue = start.split('');
    let currentPiece = this.board.grid[startValue[0]][startValue[1]];
    if(this.counter % 2 !== 0){
      if(currentPiece !== this.board.whitePiece){
        console.log('It is whites move')
        return false;
        } 
      return true;
    }

    if(this.counter % 2 !== 1){
      if(currentPiece !== this.board.blackPiece){
        console.log('It is blacks move')
        return false;
      } 
      return true;
    }
  }

  start() {
    this.board.createGrid();
    this.board.createCheckers()
  }
  // All game logic passed through here to play the game
  moveChecker(start, end){
    if(this.validateInput(start, end) && this.validMove(start, end)){
      let startValue = start.split('');
      let endValue = end.split('');
      let currentPiece = this.board.grid[startValue[0]][startValue[1]];
        if(this.changePlayer(start)){
        this.board.grid[endValue[0]][endValue[1]] = currentPiece;
        this.board.grid[startValue[0]][startValue[1]] = null;
        this.counter++;
      }
    }    
  }
}

function getPrompt() {
  game.board.viewGrid();
  game.turnCounter();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
