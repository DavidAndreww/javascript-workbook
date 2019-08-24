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

let playerTurn = 'x';

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
    return true;
  }
  if((board[1][0] == 'x') && (board[1][1] == 'x') && (board[1][2] == 'x')){
    return true;
  }
  if((board[2][0] == 'x') && (board[2][1] == 'x') && (board[2][2] == 'x')){
    return true;
  }

  if((board[0][0] == 'o') && (board[0][1] == 'o') && (board[0][2] == 'o')){
    return true;
  }
  if((board[1][0] == 'o') && (board[1][1] == 'o') && (board[1][2] == 'o')){
    return true;
  }
  if((board[2][0] == 'o') && (board[2][1] == 'o') && (board[2][2] == 'o')){
    return true;
  }
}

function verticalWin() {
  // Code Below Works
  if((board[0][0] == 'x') && (board[1][0] == 'x') && (board[2][0] == 'x')){
    return true;
  }
  if((board[0][1] == 'x') && (board[1][1] == 'x') && (board[2][1] == 'x')){
    return true;
  }
  if((board[0][2] == 'x') && (board[1][2] == 'x') && (board[2][2] == 'x')){
    return true;
  }

  if((board[0][0] == 'o') && (board[1][0] == 'o') && (board[2][0] == 'o')){
    return true;
  }
  if((board[0][1] == 'o') && (board[1][1] == 'o') && (board[2][1] == 'o')){
    return true;
  }
  if((board[0][2] == 'o') && (board[1][2] == 'o') && (board[2][2] == 'o')){
    return true;
  }
}

function diagonalWin() {
  // Code Below Works!
  if((board[0][0] == 'x') && (board[1][1] == 'x') && (board[2][2] == 'x')){
    return true;
  }
  if((board[0][2] == 'x') && (board[1][1] == 'x') && (board[2][0] == 'x')){
    return true;
  }
  if((board[0][0] == 'o') && (board[1][1] == 'o') && (board[2][2] == 'o')){
    return true;
  }
  if((board[0][2] == 'o') && (board[1][1] == 'o') && (board[2][0] == 'o')){
    return true;
  }
  
}

function checkForWin() {
  if((horizontalWin() == true) || (verticalWin() == true) || (diagonalWin() == true)){
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;

  if(checkForWin() == true){console.log('Player ' + playerTurn + ' Wins!');}

  if (playerTurn === 'x') {playerTurn ='o';}
  else if (playerTurn === 'o') {playerTurn = 'x';}
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
