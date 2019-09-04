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

// Sets initial values for board at start of game
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Sets max number of turns for turn counter
let number = 14;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Creates a variable to hold the piece that is being moved, and then places it upon user input
function movePiece(startStack, endStack) {
  var pieceHolder = stacks[startStack].pop();
  stacks[endStack].push(pieceHolder);
}

// Restricts user input if they do not select a proper stack value, either A, B or C
function isValid(startStack, endStack){
  if ((startStack == 'a') || (startStack == 'b') || (startStack == 'c') && (endStack == 'a') || (endStack == 'b') || (endStack == 'c')){
    return true;      
  } else {
    console.log('------------------------------');
    console.log('Please select a valid input...');
    console.log('------------------------------');
    return false;
  };
}

// Restricts placement of the piece to the stack, if the value of the last piece in the stack is lesser than the piece being moved
function isLegal(startStack, endStack) {

  // Creating two variables to hold values key array values for easier syntax below
  let endKey = stacks[endStack];
  let startKey = stacks[startStack];

  if ((endKey[endKey.length -1] > startKey[startKey.length -1]) || (endKey.length == 0)){
    return true;
  } else {
    console.log('---------------------------');
    console.log('Please play a valid move...');
    console.log('---------------------------');
    return false
  }
};

// Checks for win: If length of stacks B or C are equal to 4, the player wins.
function checkForWin() {  
    if ((stacks.b.length === 4) || (stacks.c.length === 4)){
    console.log('---------');
    console.log('You Win!!');
    console.log('---------');
    console.log('')
    return true;
  } else {
    return false;
  }
};

// Function to reset the game if the player takes more than the allotted 15 moves to complete the game.
function turnCounter(){
  if (number == 0){
    console.log('--------------------------------');
    console.log('You ran out of turns! Try again!');
    console.log('--------------------------------');
    console.log('');

    // Resets game board and turn counter to start of game values
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    number = 15;
  } 
  console.log('--------------');
  console.log(`Turns left: ${number}`);
  console.log('--------------');
  number--;
}

function towersOfHanoi(startStack, endStack) {
  // Runs the game only if player enters a valid value for stacks, and the movement of the pieces is legal as defined above
  if(isValid(startStack, endStack) && isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
    
    // Continues to check for player win, or expiration of available turns. When one is triggered, the game resets
    if(checkForWin()){
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      number = 15;
    }
    turnCounter();
  }
}

// printStacks() = prints the board
// question() = takes user input
// towersOfHanoi() checks for valid moves, places pieces, and checks for win or expiriation of available moves
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