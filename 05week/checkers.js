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
  constructor(checkers) {
    this.grid = []
    // this.checkers = [] //Don't need this?
    this.whitePiece = 'W';
    this.blackPiece = 'B';
  }
  // method that creates an 8x8 array, filled with null values
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

  // Popuates board with checker pieces at game start
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

  // Creates checkers and populates board
  createCheckers(){
    //Create white pieces
    for(let row1 = 0; row1 < 3; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 0 && col1 % 2 == 1){
          this.grid[row1][col1] = this.blackPiece;
        }
      }
    }
    for(let row1 = 0; row1 < 3; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 1 && col1 % 2 == 0){
          this.grid[row1][col1] = this.blackPiece;
        }
      }
    }

    // Create black pieces
    for(let row1 = 5; row1 < 8; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 0 && col1 % 2 == 1){
          this.grid[row1][col1] = this.whitePiece;
        }
      }
    }
    for(let row1 = 5; row1 < 8; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 1 && col1 % 2 == 0){
          this.grid[row1][col1] = this.whitePiece;
        }
      }
    }
  }

  // Selects Checker location? // CHECK FOR ACCURACY
  selectChecker(row, column){
    return this.grid([row][column])
  }
  killChecker(position){
    // Enter Code
  }  
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers()
  }
  moveChecker(start, end){
    
  }
}

function getPrompt() {
  game.board.viewGrid();
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
