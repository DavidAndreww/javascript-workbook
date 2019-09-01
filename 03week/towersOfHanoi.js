//                   GAME START
// check to see that the game board is set up correctly
// all 4 pieces are lined up largest to smallest in array A



//                   MOVING PIECES
// Only one piece may be moved at a time, and the entry must be a valid entry

// --  if ((startStack == 'a') || (startStack == 'b') || (startStack == 'c') && (endStack == 'a') || (endStack == 'b') || (endStack == 'c')){
//      *all other logic goes inside of here*
//    } else {return 'Please select a valid input'};


// Make sure the array you're looking to pop from (startStack), has an element in it

//  -- if ((stacks.a.length > 0) || (stacks.b.length > 0) || (stacks.b.length > 0))


// The towersOfHanoi startStack argument will select which array in the stacks variable to pull the
// first piece from. Its value must be stored in a variable. 

//  -- var pieceHolder = stacks.startStack.pop();


// The towersOfHanoi endStack agument selects where you want to drop the piece that was just
// pulled from the startStack.
//                              AND!

// The value of the last element in the stack you are pushing to, must be of higher value than
// the piece you are currently holding.

//    -- if ((stacks.endStack[stacks.endStack.length -1] > pieceHolder) || stacks.endStack['']){
//           stacks.endStack.push(pieceHolder);
//          }
//                              AND!        

// The value of pieceHolder must reset back to nothing, or empty, once it has been pushed, to prepare to pick
// up and hold the next value input

//        --   pieceHolder = '';
//                         = null;
//                         = undefined;


//                  CHECK FOR WIN
// If the number of elements in array B or C are equal to 4, and ordered from highest number
// to lowest, the game has been won

//   -- if ((stacks.b.length === 4) || (stacks.c.length === 4)){
//        return 'You win!';
//      }

//  Reset the game by returning the stacks object back to its original values at start of game.

//  Add inside of the checkForWin function
//  --  let stacks = {
//        a: [4, 3, 2, 1],
//        b: [],
//        c: []
//      };



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

function movePiece(startStack, endStack) {
  // Your code here
  var pieceHolder = stacks[startStack].pop();
  stacks[endStack].push(pieceHolder);
}

function isValid(startStack, endStack){
  if ((startStack == 'a') || (startStack == 'b') || (startStack == 'c') && (endStack == 'a') || (endStack == 'b') || (endStack == 'c')){
    return true;      
  } else {
    console.log('Not valid');
    return false;
  };
}

function isLegal(startStack, endStack) {
  // Your code here
  let endKey = stacks[endStack];
  let startKey = stacks[startStack];
  if ((endKey[endKey.length -1] > startKey[startKey.length -1]) || (endKey.length == 0)){
    return true;
  } else {
    console.log('NO')
    return false
  }
};

function checkForWin() {
  // Your code here
  if ((stacks.b.length === 4) || (stacks.c.length === 4)){
    console.log('');
    console.log('You Win!!');
    console.log('');
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if(isValid(startStack, endStack) && isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
    if(checkForWin()){
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
    }
  }
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