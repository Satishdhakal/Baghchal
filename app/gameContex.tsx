import React, { createContext, ReactNode, useRef, useEffect } from "react";
import { Game } from "./baghchal/game";

interface Props {
  handleClick: () => void;
  handleNewGame: () => void;
}

const defaultProps: Props = {
  handleClick: () => {},
  handleNewGame: () => {},
};

export const GameContext = createContext<Props>(defaultProps);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const game = useRef<Game | null>(null);

  useEffect(() => {
    game.current = new Game();
  }, []);  

  const handleClick = () => {
    console.log("HOLD ON 🤚");
  }

  const handleNewGame = () => {
    if (game.current) {
      game.current.startGame(); 
    }
  }

  return (
    <GameContext.Provider
      value={{
        handleClick,
        handleNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
