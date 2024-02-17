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
            [0,null,null,null,0],
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null],
            [0,null,null,null,0]
        ];
        
        this.tigers = {
            trapStatus  : [0,0,0,0],                         
            friendlyTrap : [0,0,0,0],
            pos         : [0,4,20,24],                              
            validMoves  : []

        };
        this.goats = {
            available   : Array.from(Array(20).keys()), 
            onBoard     : [],
            pos         : [],
            eaten       : [],                                 
            validMoves  : [],
            endangered  : [],
        };
    
        this.turn = 1;                                      
        this.prevSelection = -1;                            
        this.prevSuggestions = [];  
        this.moveHistory = [];      
    }


    //generate a array of node 
    highlightNodes(computingValidMoves = false){
        let possibleNodes = [];
        if(this.turn === 1 || computingValidMoves){
            for(let i = 0; i<5; i++){
                for(let j = 0; j< 5; j++){
                    if(this.board[i][j]===null){
                        possibleNodes.push(i*5+j);
                    }
                }
            }
        }
        this.prevSuggestions = possibleNodes;
        return [[],possibleNodes,[]];
    }

}