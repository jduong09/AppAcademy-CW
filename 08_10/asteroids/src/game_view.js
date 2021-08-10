function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function start() {
  this.game.draw(this.ctx);

  setInterval(() => {
    console.log("time to animate");
    this.game.moveObjects();
    this.game.draw(this.ctx);
    console.log("let's animate!");
  }, 40);
};

module.exports = GameView;