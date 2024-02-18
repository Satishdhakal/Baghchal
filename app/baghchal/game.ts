export class Game {
  parent: any;
  board: any;
  tigers: any;
  goats: any;
  turn: any;
  prevSelection: any;
  prevSuggestions: any;
  moveHistory: any;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.board = [
      [0, null, null, null, 0],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [0, null, null, null, 0],
    ];

    this.tigers = {
      trapStatus: [0, 0, 0, 0], // 1 means trapped  and 0 means not trapped
      friendlyTrap: [0, 0, 0, 0],
      pos: [0, 4, 20, 24], // tigers spawn at four corners of the board
      validMoves: [],
    };
    this.goats = {
      available: Array.from(Array(20).keys()), // 20 goats in total
      onBoard: [],
      pos: [],
      eaten: [], // 0 goats eaten/captured at the beginning
      validMoves: [],
      endangered: [],
    };

    this.turn = 1; // 1 means goat
    this.prevSelection = -1; // no selection at the beginning
    this.prevSuggestions = [];
    this.moveHistory = [];
  }

  setParent() {
    this.parent = document.querySelector(".canvas-container-inner");
  }

  startGame() {
    //removing tigers and goats of previous game if any
    this.parent = document.querySelector(".game-container-inner");

    //removing tigers
    let removeEle = document.querySelectorAll(".tiger");
    if (removeEle) {
      removeEle.forEach((ele) => this.parent.removeChild(ele));
    }
    //removing goats
    removeEle = document.querySelectorAll(".goat");
    if (removeEle) {
      removeEle.forEach((ele) => this.parent.removeChild(ele));
    }

    //now initialinzing a new board state
    this.initialize();

    //positioning four tigers at four corners
    let tigerPos = [0, 4, 20, 24];
    tigerPos.forEach((pos) => {
      //initializing 4 tigers on four corners of the board
      let elem = document.createElement("div");
      elem.classList.add("tiger", `tiger-${pos}`);
      elem.setAttribute("role", "img");
      elem.setAttribute("aria-label", "Tiger");
      elem.style.zIndex = "1";
      this.parent.appendChild(elem);
    });
  }

  // Getting turn status
  getBoardStatus(){
    return [this.tigers,this.goats,this.turn];
  }

}