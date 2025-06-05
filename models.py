from enum import Enum
from typing import List,Tuple,Optional

class PieceType(str,Enum): #common variables
    TIGER = 'tiger'
    SHEEP = 'sheep'
    EMPTY = 'empty'

VALID_POSITIONS = {  # for all possible positions of a piece
    (0, 0): [(0, 2), (2, 0), (1, 1)],
    (0, 2): [(0, 0), (0, 4), (1, 2)],
    (0, 4): [(0, 2), (2, 4), (1, 3)],
    (1, 1): [(0, 0), (1, 2), (2, 0), (2, 2)],
    (1, 2): [(0, 2), (1, 1), (1, 3), (2, 2)],
    (1, 3): [(0, 4), (1, 2), (2, 2), (2, 4)],
    (2, 0): [(0, 0), (1, 1), (2, 2), (4, 0)],
    (2, 2): [(1, 1), (1, 2), (1, 3), (2, 0), (2, 4), (3, 1), (3, 3), (4, 2)],
    (2, 4): [(0, 4), (1, 3), (2, 2), (4, 4)],
    (3, 1): [(2, 0), (2, 2), (4, 0)],
    (3, 3): [(2, 2), (2, 4), (4, 4)],
    (4, 0): [(2, 0), (3, 1), (4, 2)],
    (4, 2): [(2, 2), (4, 0), (4, 4), (3, 3)],
    (4, 4): [(2, 4), (3, 3), (4, 2)],
}

Total_sheep = 20
Total_tiger = 4

class Gameboard: # gamestate
    def __init__(self):
        self.board = self._init_board()
        self.turn = PieceType.SHEEP
        self.sheep_dead = 0
        self.sheep_placed = 0
        self.tiger_position = [(0,0),(0,4),(4,0),(4,4)]
        self.sheep_position = []

        for i in self.tiger_position:
            self._place_pieces(i,PieceType.TIGER)
        


    def _init_board(self) -> dict:
        #generate board 5X5 for positioning ease
        return {(i,j):PieceType.EMPTY for i in range(5) for j in range(5)}
    
    def _place_pieces(self,position : Tuple[int,int],pieces : PieceType):
        if self.board[position] != PieceType.EMPTY:
            raise ValueError('Position already Occupied')
        self.board[position] = pieces
        if pieces == PieceType.SHEEP:
            self.sheep_position.append(position)

    def move_sheep(self,position : Tuple[int,int],destination : Tuple[int,int],piece : PieceType):
        if piece != PieceType.SHEEP:
            raise ValueError('You can only move sheeps')
        if self.board[position] != PieceType.SHEEP:
            raise ValueError('Select a sheep to move')
        if destination not in VALID_POSITIONS.get(position,set()): #set lookup with a safe landing
            raise ValueError('Invalid Move')
        if self.board[destination] != PieceType.EMPTY:
            raise ValueError('Invalid Move')
        self.board[position] = destination
        self.board[position] = PieceType.EMPTY
        self.board[destination] = PieceType.SHEEP
        print(VALID_POSITIONS[position])
        print(VALID_POSITIONS[destination])






        
    
    def display_board(self):
        for i in range(5):
            row = ''
            for j in range(5):
                piece = self.board[(i, j)]
                if piece == PieceType.EMPTY:
                    row += '. '
                elif piece == PieceType.TIGER:
                    row += 'T '
                else:
                    row += 'S '
            print(row)
        print()


g = Gameboard()
g._place_pieces((1,3),PieceType.SHEEP)

g.move_sheep((1,3),(1,2),PieceType.SHEEP)
g.display_board()

    

