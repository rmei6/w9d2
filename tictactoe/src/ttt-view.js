class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  setupBoard() {
    let ul = document.createElement("ul");
    ul.classList.add("cells")
    for (let i = 0;i<9;i++){
      let li = document.createElement("li");
      // li.innerText = "0";
      li.setAttribute('position',[Math.floor(i / 3), (i % 3)]);
      ul.appendChild(li);
    }
    this.el.appendChild(ul);
  }
  
  bindEvents() {}

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    let ele = e.target;
    debugger;
    ele.classList.toggle('done');
    let pos = ele.getAttribute('position');
    this.game.playMove([pos[0],pos[2]]);
  }

  makeMove(square) {}

}

module.exports = View;
