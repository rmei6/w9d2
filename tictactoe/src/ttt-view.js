class View {
  constructor(game, el) {
    this.game = game;
    // debugger;
    this.el = el;
    this.setupBoard();
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
  }
  setupBoard() {
    let ul = document.createElement("ul");
    ul.classList.add("cells")
    for (let i = 0;i<9;i++){
      let li = document.createElement("li");
      li.classList.add("list-element");
      li.setAttribute('position',[Math.floor(i / 3), (i % 3)]);
      ul.appendChild(li);
    }
    this.el.appendChild(ul);
    let message = document.createElement("h2");
    this.el.appendChild(message);
    
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    // debugger;
    e.stopPropagation();
    e.preventDefault();
    let ele = e.target;
    // debugger;
    if (ele.classList.contains('list-element') && !ele.classList.contains('done')){
      this.makeMove(ele);
    }else{
      alert("That's not a valid move!");
    }
  }

  makeMove(square) {
    square.classList.add('done');
    let pos = square.getAttribute('position');
    square.innerText = this.game.currentPlayer;
    square.classList.add(this.game.currentPlayer);
    this.game.playMove([pos[0], pos[2]]);
    if (this.game.isOver()) {
      if(!this.game.winner()){
        let message = document.querySelector('h2');
        message.innerText = "There is NO winner";
      }else{
        let winners = document.querySelectorAll(`.${this.game.winner()}`);
        winners.forEach(ele => ele.classList.toggle("active"));
        let loser = this.game.winner() === "x" ? "o" : "x";
        let losers = document.querySelectorAll(`.${loser}`);
        losers.forEach(ele => ele.classList.toggle("inactive"));

        let congrats = `${this.game.winner().toUpperCase()} won!!!`;
        let message = document.querySelector('h2');
        message.innerText = congrats;
      }
    }
  }

}

module.exports = View;
