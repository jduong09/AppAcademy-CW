/*
* Only one disk may be moved at a time.
* Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod.
* No disk may be placed on top of a disk that is smaller than it.
*/
class Hanoi {
  constructor() {
    this.towers = [[1, 2, 3], [], []];
  }

  validMove(startIdx, endIdx) {
    if (!this.towers[startIdx].length) {
      return false;
    } else {
      const piece = this.towers[startIdx][0];

      if (this.towers[endIdx] == []) {
        return true;
      } else if (piece > this.towers[endIdx][0]) {
        return false;
      } else {
        return true;
      }
    }
  }

  diskSize(pos) {
    return this.towers[pos[0]][pos[1]];
  }

  promptMove(reader, callback) {
    this.print();
    let startIdx, endIdx;

    reader.question("Which tower do you want to grab a disk from?", function(res) {
      startIdx = parseInt(res - 1);

      reader.question("Which tower do you want to place your disk on?", function(res) {
        endIdx = parseInt(res - 1);
        callback(startIdx, endIdx);
      });
    });
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.validMove(startTowerIdx, endTowerIdx)) {
      const piece = this.towers[startTowerIdx].shift();
      this.towers[endTowerIdx].unshift(piece);
      return true;
    } else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    if (this.towers[2].length === 3) {
      return true;
    } else {
      return false;
    }
  }

  run(reader, completionCallback) {
    //until all disks are on the right side,
      //prompt the user to select a disk and move disk
      //make sure move is valid
      //execute move
      //check if game is over
      //promptMove from the user.
      //In the callback, try to perform the move. If it fails, print an error message.
      //Test run here (yes, just make sure promptMove works within run).
      //If the game is not yet won, call run again.
      //Otherwise, log that the user has won, then call the completionCallback.
      //Test this out, should we call isWon in the top level of run or in the callback to promptMove?
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        this.run(reader, completionCallback);
      } else {
        this.print();
        console.log("You win!");
        completionCallback();
      }
    });
  }
}

module.exports = Hanoi;

