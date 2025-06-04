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
        print(self.board)
        self.turn = PieceType.SHEEP
        self.sheep_dead = 0
        self.sheep_placed = 0
        self.tiger_position = [(0,0),(0,4),(4,0),(4,4)]
        self.sheep_position = []
        print(self.sheep_position)

        for i in self.tiger_position:
            pass


    def _init_board(self) -> dict:
        #generate board 5X5 for positioning ease
        return {(i,j):PieceType.EMPTY for i in range(5) for j in range(5)}
    

g = Gameboard()