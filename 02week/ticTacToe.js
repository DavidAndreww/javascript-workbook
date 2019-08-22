'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Code Below Works
  if((board[0][0] == 'x') && (board[0][1] == 'x') && (board[0][2] == 'x')){
    console.log('Player X Wins!')
  }
  if((board[1][0] == 'x') && (board[1][1] == 'x') && (board[1][2] == 'x')){
    console.log('Player X Wins!')
  }
  if((board[2][0] == 'x') && (board[2][1] == 'x') && (board[2][2] == 'x')){
    console.log('Player X Wins!')
  }

  if((board[0][0] == 'y') && (board[0][1] == 'y') && (board[0][2] == 'y')){
    console.log('Player y Wins!')
  }
  if((board[1][0] == 'y') && (board[1][1] == 'y') && (board[1][2] == 'y')){
    console.log('Player Y Wins!')
  }
  if((board[2][0] == 'y') && (board[2][1] == 'y') && (board[2][2] == 'y')){
    console.log('Player Y Wins!')
  }
}

function verticalWin() {
  // Code Below Works
  if((board[0][0] == 'x') && (board[1][0] == 'x') && (board[2][0] == 'x')){
    console.log('Player X Wins!')
  }
  if((board[0][1] == 'x') && (board[1][1] == 'x') && (board[2][1] == 'x')){
    console.log('Player X Wins!')
  }
  if((board[0][2] == 'x') && (board[1][2] == 'x') && (board[2][2] == 'x')){
    console.log('Player X Wins!')
  }

  if((board[0][0] == 'y') && (board[1][0] == 'y') && (board[2][0] == 'y')){
    console.log('Player Y Wins!')
  }
  if((board[0][1] == 'y') && (board[1][1] == 'y') && (board[2][1] == 'y')){
    console.log('Player Y Wins!')
  }
  if((board[0][2] == 'y') && (board[1][2] == 'y') && (board[2][2] == 'y')){
    console.log('Player Y Wins!')
  }
}

function diagonalWin() {
  // Code Below Works!
  if((board[0][0] == 'x') && (board[1][1] == 'x') && (board[2][2] == 'x')){
    console.log('Player X Wins!')
  }
  if((board[0][2] == 'x') && (board[1][1] == 'x') && (board[2][0] == 'x')){
    console.log('Player X Wins!')
  }
  if((board[0][0] == 'y') && (board[1][1] == 'y') && (board[2][2] == 'y')){
    console.log('Player X Wins!')
  }
  if((board[0][2] == 'y') && (board[1][1] == 'y') && (board[2][0] == 'y')){
    console.log('Player Y Wins!')
  }
  
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
