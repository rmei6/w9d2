const View = require("./ttt-view");// require appropriate file
const Game = require("../ttt_node/game");// require appropriate file


document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector('.ttt');
  // debugger;
  const game = new Game();
  // debugger;
  const view = new View(game,grid);
});


