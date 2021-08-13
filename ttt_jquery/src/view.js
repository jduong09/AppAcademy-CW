function View(game, $el) {
  this.game = game;
  this.$el = $el;

  this.setupGrid();
  this.bindEvents();
};

View.prototype.setupGrid = function setupGrid() {
  //Squares should be clickable

  //Add 3 rows, 3 columns of empty squares
  for (let i = 0; i < 3; i++) {
    this.addRow();
  }
};

View.prototype.addRow = function addRow() {
  const $row = $("<ul>").addClass("row").addClass("group");
  const rowIdx = this.$el.find(".row").length;
  for (let colIdx = 0; colIdx < 3; colIdx++) {
    const $square = $("<li>").addClass("square").data("data-pos", [rowIdx, colIdx]);
    $row.append($square);
  }
  this.$el.append($row);
};

View.prototype.bindEvents = function bindEvents() {
  $("li.square").on("click", e => {
    const $square = $(e.currentTarget);
    $square.text(`${this.game.currentPlayer}`);
    this.makeMove($square);
  });
};

View.prototype.makeMove = function makeMove($square) {
  const pos = $square.data("data-pos");
  this.game.playMove(pos);

  if (this.game.over()) {
    this.game.swapPlayers();
    this.$el.off("click");
    console.log(`${this.game.currentPlayer} wins!`);
    const $figcaption = $("<figcaption>");

    $figcaption.html("Game Over!");
    this.$el.append($figcaption);
  }
}

module.exports = View;