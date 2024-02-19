import React, {
  createContext,
  ReactNode,
  useRef,
  useEffect,
  useState,
} from "react";
import { Game } from "../baghchal/game";

interface Props {
  handleClick: (pos: number) => void;
  handleNewGame: () => void;
  statusArr: (number | {
    pos: number[];
    trapStatus: number[];
    available?: any;
    onBoard?: any;
    eaten?: any;
  } | {
    available: number[];
    onBoard: null[];
    eaten: null[];
    pos: null[];
    trapStatus?: any;
})[]
}

const defaultProps: Props = {
  handleClick: () => {},
  handleNewGame: () => {},
  statusArr: [
    {
      pos: [0, 4, 20, 24],
      trapStatus: [0, 0, 0, 0],
    },
    {
      available: [],
      onBoard: [],
      eaten: [],
      pos: [],
    },
    -1,
  ],
};

export const GameContext = createContext<Props>(defaultProps);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [statusArr, setStatusArr] = useState([
    {
      pos: [0, 4, 20, 24],
      trapStatus: [0, 0, 0, 0],
    },
    {
      available: Array.from(Array(20).keys()),
      onBoard: [],
      eaten: [],
      pos: [],
    },
    -1,
  ]);

  const game = useRef<Game | null>(null);

  useEffect(() => {
    game.current = new Game();
  }, []);

  const handleClick = (pos: number) => {

    if(game.current){
      game.current.updateGoat(pos)
    }

  };

  const handleNewGame = () => {
    if (game.current) {
      game.current.startGame();
      setStatusArr(game.current.getBoardStatus());
    }
  };

  return (
    <GameContext.Provider
      value={{
        handleClick,
        handleNewGame,
        statusArr,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
