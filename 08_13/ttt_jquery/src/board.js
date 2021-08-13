class Board {
  constructor() {
    this.grid = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  static DIAGONAL_DIRS = [[1, -1], [1, 1]];
  static HOR_VERT_DIRS = [[0, 1], [1, 0]];

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
  };

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
  };

  placeMark(pos, mark) {
    this.grid[pos[0]][pos[1]] = mark;
  };

  empty(pos) {
    if (this.grid[pos[0]][pos[1]] === "") {
      return true;
    } else {
      return false;
    }
  };
};

Board.MARKS = ["x", "o"];

module.exports = Board;