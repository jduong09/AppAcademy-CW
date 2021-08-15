class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.active = null;

    this.$el.on('click', 'ul', this.clickTower.bind(this));
    this.setupGame();
    this.render();
  };

  setupGame() {
    for (let i = 0; i < 3; i++) {
      const $row = $("<ul>").addClass("row").addClass("group").data("row-number", i);
      this.addTowerRows($row);
    }
  };

  addTowerRows($row) {
    const rowIdx = this.$el.find(".row").length;
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const $disk = $("<li>")
        .attr("data-pos", [rowIdx, colIdx])
        .data("size", this.game.diskSize([rowIdx, colIdx]));
      $row.append($disk);
    }
    this.$el.append($row);
  };

  //Looking to make a makeMove function
  //On click, it selects one unit
  //On second click in different location, it moves first unit to that location
  clickTower(event) {
    const $row = $(event.currentTarget);

    if (this.active === null) {
      this.active = $row.data("row-number");
    } else {
        if (!this.game.move(this.active, $row.data("row-number"))) {
          alert('Invalid Move! Try again.');
        }
      this.active = null;
    }

    this.render();

    if (this.game.isWon()) {
      // Remove click handler when done.
      this.$el.off('click');
      this.$el.addClass('game-over');
      alert('Good work, you!');
    }
  };

  render() {
    const $towers = this.$el.find("ul");
    $towers.removeClass();

    if (this.active !== null) {
      $towers.eq(this.active).addClass("active");
    }

    this.game.towers.forEach((disks, towerIdx) => {
      const $disks = $towers.eq(towerIdx).children();
      $disks.removeClass();

      disks.forEach((diskWidth, diskIdx) => {

        $disks.eq(diskIdx).addClass(`size-${diskWidth}`);
      });
    });
    
  };
};

module.exports = View;