import React, { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { Game } from "../baghchal/game";

interface Props {
  handleClick: (pos: number) => void;
  handleNewGame: () => void;
  isPlaying: boolean;
  statusArr: (
    | {
        pos: number[];
        trapStatus: number[];
        available?: number[];
        onBoard?: number[];
        eaten?: number[];
      }
    | number
  )[];
  highlightElems: number[][];
}

const defaultProps: Props = {
  handleClick: () => {},
  handleNewGame: () => {},
  isPlaying: false,
  statusArr: [
    {
      available: [],
      onBoard: [],
      eaten: [],
      pos: [],
      trapStatus: [0, 0, 0, 0],
    },
    -1,
  ],
  highlightElems: [[], [], []],
};

export const GameContext = createContext<Props>(defaultProps);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [statusArr, setStatusArr] = useState<Props["statusArr"]>(defaultProps.statusArr);
  const [highlightElems, setHighlightElems] = useState<Props["highlightElems"]>(defaultProps.highlightElems);
  const [isPlaying, setIsPlaying] = useState(false);

  const game = useRef<Game | null>(null);

  useEffect(() => {
    game.current = new Game();
  }, []);

  const handleClick = (pos: number) => {
    if (game.current) {
      game.current.updateGoat(pos);
    }
  };


  // This function handles the new game
  // Remove the goats and tiger from the previous game
  // Reset the highlight nodes 

  const handleNewGame = () => {
    setIsPlaying(true);
    if (game.current) {
      setHighlightElems([[], [], []]);
      setStatusArr(game.current.getBoardStatus());
      setHighlightElems(game.current.startGame());
    }
  };

  return (
    <GameContext.Provider
      value={{
        handleClick,
        handleNewGame,
        statusArr,
        highlightElems,
        isPlaying,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
