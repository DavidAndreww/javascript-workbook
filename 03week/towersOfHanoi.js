//                   GAME START
// check to see that the game board is set up correctly
// all 4 pieces are aligned largest to smallest in array A

//                   MOVING PIECES
// Only one piece may be moved at a time
// Make sure there is a piece on the array to be moved

//  -- if ((stacks.a.length > 0) || (stacks.b.length > 0) || (stacks.b.length >0))
//    

// Pass array value into towersOfHanoi to give input for the startStack value. This value will 
// then pop the last element from that array and store as a new variable while determining
// where to place it 

//  -- var pieceHolder = startStack.pop()


// Pushing the piece back to the end of the array:
//    -- Last value in the stack that you are pushing to, must be greater than the value of the 
//    -- piece that is to be pushed

//       if (endStack[endStack.length -1] > pieceHolder)

// Value of pieceHolder must reset back to nothing once it has been pushed, to prepare to pick
// up and hold the next value input

//                  CHECK FOR WIN
// If the number of elements in array B or C are equal to 4, and ordered from highest number
// to lowest, the game has been won

//    if ((stacks.b.length === 4) || (stacks.c.length === 4)){
//      return 'You win!';
//    }

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here


}

function isLegal() {
  // Your code here

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
