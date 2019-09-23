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
    this.grid = [];
    this.checkers = [];
    this.whitePiece = 'w';
    this.blackPiece = 'b';
    this.counter = 1;
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

  // method that console logs the board and pieces
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

  // method that creates the checker pieces to be placed on the board
  createCheckers() {
    // Create black pieces
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 8; col++) {
        if (row % 2 == 0 && col % 2 == 1 || row % 2 == 1 && col % 2 == 0) this.grid[row][col] = this.blackPiece;
      }
    }

    // Create white pieces
    for (let row = 5; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (row % 2 == 0 && col % 2 == 1 || row % 2 == 1 && col % 2 == 0) this.grid[row][col] = this.whitePiece;
      }
    }
  };

  // Tracks turns, allows validatePlayerTurn function to work
  turnCounter() {
    console.log(`Turn ${this.counter}`)
  };

  // Tracks number of pieces on the board for each player
  gamePieceCounter() {
    let whiteReg = /[w]/g;
    let blackReg = /[b]/g;
    let whiteCount = this.grid.join('').match(whiteReg).length;
    let blackCount = this.grid.join('').match(blackReg).length;
    console.log(`White Pieces: ${whiteCount}`);
    console.log(`Black Pieces: ${blackCount}`);
    console.log('');
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }

  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }

  validateInput(start, end) {
    let reg = /[0-7]/g;
    let startCheck = start.match(reg);
    let endCheck = end.match(reg);
    if (startCheck != undefined && endCheck != undefined) {
      return (startCheck.length != 2 || endCheck.length != 2 ? (console.log('Select two numbers between 0-7'), false) : true)
    } else {
      console.log('Select two numbers between 0-7');
      return false;
    }
  };

  // method to make sure that user input looks to select a square that has a piece, and move it to an empty square
  validateMove(start, end) {
    let startValue = start.split('');
    let endValue = end.split('');
    // selectPiece is equal to square to pick up piece from
    let selectPiece = this.board.grid[startValue[0]][startValue[1]];
    // placePiece is equal to square to move piece to
    let placePiece = this.board.grid[endValue[0]][endValue[1]];
    // if start square is empty, or square to place piece is occupied, return false
    return (selectPiece == null || placePiece != null ? (console.log('Select valid piece and move to empty square'), false) : true)
  };

  // method that if returns true, allows white to move. if returns false, black moves.
  validatePlayerTurn(pieceCoords) {
    let startValue = pieceCoords.split('');
    let currentPiece = this.board.grid[startValue[0]][startValue[1]];

    // If this.counter is an even number, only white may play a move
    if (this.board.counter % 2 == 1) {
      return (currentPiece == this.board.whitePiece ? this.board.whitePiece : (console.log('It is whites turn'), false))
    } else if (this.board.counter % 2 == 0) {
      return (currentPiece == this.board.blackPiece ? this.board.blackPiece : (console.log('It is blacks turn'), false))
    };
  };

  // method to move white piece
  whiteMove(start, end) {
    let startValue = start.split('');
    let endValue = end.split('');
    let startEntry = parseInt(start);
    let endEntry = parseInt(end)
    if (startEntry - endEntry == 9 || startEntry - endEntry == 11) {
      let currentPiece = this.board.grid[startValue[0]][startValue[1]];
      this.board.grid[endValue[0]][endValue[1]] = currentPiece;
      this.board.grid[startValue[0]][startValue[1]] = null;
      return true;
    } else {
      console.log('Please play a valid move for white');
      return false;
    }
  };

  // method to move black piece
  blackMove(start, end) {
    let startValue = start.split('');
    let endValue = end.split('');
    let startEntry = parseInt(start);
    let endEntry = parseInt(end)
    if (startEntry - endEntry == -9 || startEntry - endEntry == -11) {
      let currentPiece = this.board.grid[startValue[0]][startValue[1]];
      this.board.grid[endValue[0]][endValue[1]] = currentPiece;
      this.board.grid[startValue[0]][startValue[1]] = null;
      return true;
    } else {
      console.log('Please play a valid move for black');
      return false;
    }
  };

  whiteJump() {

  };

  whiteDoubleJump() {

  };


  blackJump() {

  };

  blackDoubleJump() {

  };



  // Removes checker from board when jumped
  killChecker(start, end) {
    this.board.grid[start][end] = null;
    this.board.checkers.length--; // decrements # of checkers to pass test
    return true;
  }

  moveChecker(whichPiece, toWhere) {
    if (this.validateInput(whichPiece, toWhere) && this.validateMove(whichPiece, toWhere)) {
      if (this.validatePlayerTurn(whichPiece, toWhere) == this.board.whitePiece) {
        if (this.whiteMove(whichPiece, toWhere)) {
          this.board.counter++
        }
      } else if (this.validatePlayerTurn(whichPiece, toWhere) == this.board.blackPiece) {
        if (this.blackMove(whichPiece, toWhere)) {
          this.board.counter++
        }
      }
    }
  }
};

/*
1: if validateInput() and validateMove() is true, run validatePlayerTurn(). 
2: if true, run whiteMove(). If false, run blackMove(), which perform regular moves. (returnT/F to skip over jump conditions)
3: whitJump() and blackJump() allow for jumps. returns true or false, 
4A: if line 3 is true, runs killChecker() to remove piece
4B: if line 3 true, whiteDoubleJump() and blackDoubleJump() check to see if a second jump can be made, and execute
5: program checks for win. returns true/false. If true, game is over, if false runs turn counter
5: turn counter increments and getPrompt() runs again
*/



function getPrompt() {
  game.board.viewGrid();
  // added turnCounter() to console.log turn and increment immediately after printing grid
  game.board.turnCounter();
  // added gamePieceCounter() to console.log number of pieces left in play
  game.board.gamePieceCounter()
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
