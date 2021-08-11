function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function start() {
  this.game.draw(this.ctx);

  setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 40);
};

module.exports = GameView;