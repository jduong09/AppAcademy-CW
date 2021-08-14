class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupGame();
  };

  setupGame() {
    for (let i = 0; i < 3; i++) {
      this.addTowerRows();
    }
    this.addLegendRow();
  };

  addTowerRows() {
    const $row = $("<ul>").addClass("row").addClass("group");
    const rowIdx = this.$el.find(".row").length;
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const $column = $("<li>").addClass("disk").data("pos", [rowIdx, colIdx]);
      $row.append($column);
    }
    this.$el.append($row);
  };

  addLegendRow() {
    const $row = $("<ul>").addClass("row").addClass("group").addClass("legend");
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const $column = $("<li>").addClass("marker");
      $row.append($column);
    }
    this.$el.append($row);
  };
};

module.exports = View;