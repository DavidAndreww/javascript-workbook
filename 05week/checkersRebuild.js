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
    this.whitePiece = 'w';
    this.blackPiece = 'b';
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
}

class Game {
  constructor() {
    this.board = new Board;
    this.counter = 1;
  }

  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }

  // Tracks turns, allows validatePlayerTurn function to work
  turnCounter() {
    console.log(`Turn ${this.counter}`);
    this.counter++
  }

  // Tracks number of pieces on the board for each player
  gamePieceCounter() {
    let whiteReg = /[w]/g;
    let blackReg = /[b]/g;
    let whiteCount = this.board.grid.join('').match(whiteReg).length;
    let blackCount = this.board.grid.join('').match(blackReg).length;
    console.log(`White Pieces: ${whiteCount}`);
    console.log(`Black Pieces: ${blackCount}`);
    console.log('');
  }

  validateInput(start, end) {
    let reg = /[0-7]/g;
    let startCheck = start.match(reg);
    let endCheck = end.match(reg);
    return (startCheck.length !=2 || endCheck.length !=2 ? false : true)
  };

 // method that if returns true, allows white to move. if returns false, black moves.
  validatePlayerTurn(pieceCoords) {
    let startValue = pieceCoords.split('');
    let currentPiece = this.board.grid[startValue[0]][startValue[1]];

    // If this.counter is an even number, only white may play a move
    if (this.counter % 2 == 0) {
      return (currentPiece == this.board.whitePiece ? true : false)
    }
    // If this.counter is an odd number, only black may play a move
    if (this.counter % 2 == 1) {
      return (currentPiece == this.board.blackPiece ? false : true);
    }
  };

  validatePlayerMove() {

  };

  moveChecker(start, end) {

    this.turnCounter++
  }
};


/*
1: if validateInput() is true, run validatePlayerTurn(). 
2: if true, run whiteMove(). If false, run blackMove().
3: whiteMove() and blackMove() check for regular moves and jumps. Return true if they jump a piece
4: if true, whiteDoubleJump() and blackDoubleJump() check to see if a second jump can be made. 
5: turn counter increments and getPrompt() runs again
*/



function getPrompt() {
  game.board.viewGrid();
  // added turnCounter() to console.log turn and increment immediately after printing grid
  game.turnCounter();
  // added gamePieceCounter() to console.log number of pieces left in play
  game.gamePieceCounter()
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
