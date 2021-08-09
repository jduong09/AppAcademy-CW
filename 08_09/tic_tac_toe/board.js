class Board {
  constructor() {
    this.grid = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  static DIAGONAL_DIRS = [[1, -1], [1, 1]];
  static HOR_VERT_DIRS = [[0, 1], [1, 0]];

  print() {
    for (let i = 0; i < this.grid.length; i++) {
      console.log(this.grid[i]);
    }
  }

  // Need to check if there are three in a row in any direction.
  // Check 3 diagonal down left, 3 diagonal right
  // Check 3 left each row, 3 down each column
  // 9 checks
  won() {
    if (this.checkDirection([0, 0], Board.DIAGONAL_DIRS[1])) {
      return true;
    } 
    if (this.checkDirection([0, 2], Board.DIAGONAL_DIRS[0])) {
      return true;
    }

    for (let i = 0; i < 3; i++) {
      const pos = [i, 0];
      if (this.checkDirection(pos, Board.HOR_VERT_DIRS[0])) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      const pos = [0, i];
      if (this.checkDirection(pos, Board.HOR_VERT_DIRS[1])) {
        return true;
      }
    }
    return false;
  }

  checkDirection (pos, dir) {
    if (this.grid[pos[0]][pos[1]] == "") {
      return false;
    }

    for (let i = 0; i < 2; i++) {
      const nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
      if (this.grid[pos[0]][pos[1]] != this.grid[nextPos[0]][nextPos[1]]) {
        return false;
      }
      pos = nextPos;
    }
    return true;
  }
  
  // if position on board is empty, place marker
  // else spot is taken, return false and cannot place marker
  placeMark(pos, mark) {
    if (this.empty(pos)) {
      this.grid[pos[0]][pos[1]] = mark;
      return true;
    } else {
      return false;
    }
  }

  // return true if position on board at empty
  // return false if position has a marker on it (x or o)
  empty(pos) {
    if (this.grid[pos[0]][pos[1]] === "") {
      return true;
    } else {
      return false;
    }
  }

  promptMark(reader, callback) {
    this.print();
    reader.question("Enter row:", function(res) {
      const row = res;

      reader.question("Enter column:", function(res) {
        const col = res;

        callback([row, col]);
      })
    });
  }

}

module.exports = Board;

