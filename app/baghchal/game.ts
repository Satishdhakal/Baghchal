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

  //this class is responsible for handling parents of the current game
  //in other words this class determines the parent of game
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

    this.getValidMoves();

    return this.highlightNodes();
  }

  // Getting turn status
  getBoardStatus() {
    return [this.tigers, this.goats, this.turn];
  }

  getTurnStatus() {
    return this.turn;
  }

  //This places the goat on the board
  //pos parameter is the position of the goat
  updateGoat(pos: number) {
    let elem = document.createElement("div");

    elem.classList.add("goat", `goat-${pos}`);
    elem.style.marginTop = `${Math.floor(pos / 5) * 21.5}%`;
    elem.style.marginLeft = `${(pos % 5) * 21.5}%`;

    elem.style.zIndex = "1";
    this.parent.appendChild(elem);

    this.board[Math.floor(pos / 5)][Math.floor(pos % 5)] = 1;

    this.goats.onBoard.push(this.goats.available.pop());
    this.goats.pos.push(pos);

    this.prevSuggestions = [];
    this.prevSelection = -1;
    this.turn = 0;

    return [
      [],
      [],
      []
    ]; // highlightedNodes disappear
  }

  highlightNodes(computingValidMoves = false) {
    let possibleNodes = [];
    if (this.turn === 1 || computingValidMoves) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (this.board[i][j] === null) {
            possibleNodes.push(i * 5 + j);
          }
        }
      }
    }
    this.prevSuggestions = possibleNodes;
    return [
      [], possibleNodes, []
    ];
  }

  highlightPath(pos: number, chkTigerValidMoves = false) {
    const possiblePaths: string[] = [];
    const possibleNodes: number[] = [];
    const endangeredGoats: number[] = [];

    const possibleMoves: number[][] =
      pos % 2 === 0 ? [
        [pos - 1, pos + 1], // left, right
        [pos + 5, pos + 4, pos + 6], // bottom, bottom-left, bottom-right
        [pos - 5, pos - 6, pos - 4], // top, top-left, top-right
      ] : [
        [pos - 1, pos + 1],
        [pos + 5],
        [pos - 5]
      ];

    const isSafeToMove = (from: number, to: number) => {
      const [fromRow, fromCol] = [Math.floor(from / 5), from % 5];
      const [toRow, toCol] = [Math.floor(to / 5), to % 5];

      return (
        fromRow === toRow ||
        fromCol === toCol ||
        Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)
      );
    };

    for (const moves of possibleMoves) {
      for (const move of moves) {
        if (move < 0 || move > 24) continue;
        if (!isSafeToMove(pos, move)) continue;

        if (!this.board[Math.floor(move / 5)][move % 5]) {
          possibleNodes.push(move);
          possiblePaths.push(`${Math.min(pos, move)}-${Math.max(pos, move)}`);
        } else if (
          this.board[Math.floor(move / 5)][move % 5] === 1 &&
          (this.turn === 0 || chkTigerValidMoves)
        ) {
          const goatPos = move;

          const possibleJumps = [
            pos - 1,
            pos + 1,
            pos + 5,
            pos + 4,
            pos + 6,
            pos - 5,
            pos - 4,
            pos - 6,
          ].filter(
            (jump) =>
            jump >= 0 &&
            jump <= 24 &&
            isSafeToMove(pos, jump) &&
            !this.board[Math.floor(jump / 5)][jump % 5]
          );

          for (const jump of possibleJumps) {
            const midGoatPos = (pos + jump) / 2;
            if (
              midGoatPos < 0 ||
              midGoatPos > 24 ||
              !this.board[Math.floor(midGoatPos / 5)][midGoatPos % 5]
            )
              continue;

            possibleNodes.push(midGoatPos);
            possibleNodes.push(move);
            possiblePaths.push(
              `${Math.min(pos, midGoatPos)}-${Math.max(pos, midGoatPos)}`
            );
            possiblePaths.push(
              `${Math.min(midGoatPos, move)}-${Math.max(midGoatPos, move)}`
            );
            endangeredGoats.push(midGoatPos);
          }
        }
      }
    }

    this.prevSelection = pos;
    this.prevSuggestions = possibleNodes;
    return [possiblePaths, possibleNodes, endangeredGoats];
  }

  calculateValidGoateMoves() {
    this.goats.validMoves = [];

    if (this.goats.available.length) {
      const tempArr = this.highlightNodes(true);
      this.goats.validMoves.push(...tempArr[1].map((move) => `g-${move}`));
    } else {
      for (const pos of this.goats.pos) {
        const tempArr = this.highlightPath(pos, false);
        this.goats.validMoves.push(
          ...tempArr[1].map((move) => `g-${pos}-${move}`)
        );
      }
    }
  }

  getValidMoves() {
    this.calculateValidGoateMoves();
    //for goats
    if (this.turn) {
      return this.goats.validMoves;
    }
  }

}